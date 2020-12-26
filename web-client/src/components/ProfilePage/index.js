import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebase, useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import { Container, BottomBar } from '../UI'
import PageTitle from './PageTitle/index'
import PageMenu from './PageMenu'
import UserPhoto from './UserPhoto'
import UserName from './UserName'


const ProfilePage = ({ history }) => {
  // Used to r/w access to auth and firestore
  const firestore = useFirestore()
  const firebase = useFirebase()

  // Get auth data from firebase
  const auth = useSelector(state => state.firebase.auth)

  if (!auth.uid) {
    throw new Error("User Not Authed")
  }

  // Set query and listeners to Firestore collection
  useFirestoreConnect([
    {
      collection: 'UserProfiles',
      doc: auth.uid,
    }
  ])

  // Get user profile from store
  const userProfileByUid = useSelector(state => state.firestore.data.UserProfiles)

  if (!userProfileByUid) {
    return <Spinner />
  }

  const userProfile = userProfileByUid[auth.uid]

  if (!userProfile) {
    throw new Error("No valid user profile entry in colleciton")
  }

  console.log(userProfile)

  const { photoURL, displayName } = userProfile

  const onProfileChange = async (options) => {
    await firestore.collection('UserProfiles').doc(auth.uid).update(options)
    await firebase.updateAuth(options)
  }

  const onUsernameChange = async name => await onProfileChange({ displayName: name })

  // https://randomuser.me/api/portraits/men/44.jpg
  const onPhotoPicked = async (file, onUploadSuccess, onUploadFail) => {
    console.log("onPhotoUpload", file)
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
      <UserPhoto name={displayName} photoURL={photoURL} onPick={onPhotoPicked}/>
      <UserName onChange={onUsernameChange}>{displayName}</UserName>
      <PageMenu />
      <BottomBar history={history} />
    </Container>
  )
}

export default ProfilePage
