import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useFirebase, useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import { Container, BottomBar } from '../UI'
import { message } from 'antd'
import PageTitle from './PageTitle'
import PageMenu from './PageMenu'
import UserPhoto from './UserPhoto'
import UserName from './UserName'

const ProfilePageSkeleton = ({ history, active }) => (
  <Container>
    <PageTitle>Profile</PageTitle>
    <UserPhoto skeleton isLoading={active} />
    <UserName skeleton isLoading={active} />
    <PageMenu />
    <BottomBar history={history} />
  </Container>
)


const ProfilePage = () => {
  const history = useHistory()
  // Used to r/w access to auth and firestore
  const firestore = useFirestore()
  const firebase = useFirebase()

  // Get auth data from firebase
  const auth = useSelector(state => state.firebase.auth)

  if (!auth.uid) {
    console.error('User Not Authed')
    message.error('You should login')
  }

  // Set query and listeners to Firestore collection
  useFirestoreConnect([
    {
      collection: 'UserProfiles',
      doc: auth.uid,
    },
  ])

  // Get user profile from store
  const userProfileByUid = useSelector(state => state.firestore.data.UserProfiles)

  // Show to user page with stubs, instead name and photo, while loading
  if (!userProfileByUid) {
    return <ProfilePageSkeleton active history={history}/>
  }

  const userProfile = userProfileByUid[auth.uid]

  if (!userProfile) {
    console.error('Can\'t find user profile entry in "UserProfiles" colleciton')
    message.error('Can\'t find your profile')
    return <ProfilePageSkeleton history={history}/>
  }

  console.log(userProfile)

  const { photoURL, displayName } = userProfile

  const onProfileChange = async options => {
    await firestore.collection('UserProfiles').doc(auth.uid).update(options)
    await firebase.updateAuth(options)
  }

  const onUsernameChange = async name => await onProfileChange({ displayName: name })

  // https://randomuser.me/api/portraits/men/44.jpg
  const onPhotoPicked = async (file, onUploadSuccess, onUploadFail) => {
    console.log('onPhotoUpload', file)
    // Destructure File properties, all of them, for reference.
    const { uid, name, type, size, lastModified, lastModifiedDate } = file
    // Make filename and path to store avatar photo.
    const path = `UserData/${auth.uid}/avatar`
    try {
      // Upload file to storage
      const { uploadTaskSnapshot } = await firebase.uploadFile(path, file)
      const url = await uploadTaskSnapshot.ref.getDownloadURL()
      await onProfileChange({ photoURL: url })
      onUploadSuccess()
    } catch (error) {
      onUploadFail(error)
    }
  }

  return (
    <Container>
      <PageTitle>Profile</PageTitle>
      <UserPhoto name={displayName} photoURL={photoURL} onPick={onPhotoPicked} />
      <UserName onChange={onUsernameChange}>{displayName}</UserName>
      <PageMenu />
      <BottomBar history={history} />
    </Container>
  )
}

export default ProfilePage
