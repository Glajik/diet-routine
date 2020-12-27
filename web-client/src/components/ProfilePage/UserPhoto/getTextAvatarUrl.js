/**
 * Use service to get text avatar image by user name
 * @param {string} name User name
 * @return Image URL, that can be used in `<img src="..."/>`
 * 
 * @see https://eu.ui-avatars.com/
 */
const getTextAvatarUrl = (name) => {
  // Colors without hash
  const background = 'f0f0f0'
  const color = '3dad06'
  const host = 'https://eu.ui-avatars.com/api/'
  const getUrl = query => encodeURI(`${host}${query}&background=${background}&color=${color}`)

  if (!name) {
    return `${host}?background=random`
  }
  
  const [first, second] = name.trim().split(' ').filter(el => !!el)

  if (first && second) {
    return getUrl(`?name=${first.trim()}+${second.trim()}`)
  }

  if (first) {
    return getUrl(`?name=${first.trim()}&length=1`)
  }
}

export default getTextAvatarUrl
