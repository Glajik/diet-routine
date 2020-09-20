import {createGlobalStyle} from 'styled-components'

export function fontFace(name, src, fontWeight = 'normal') {
  return `
    @font-face{
      font-family: "${name}";
      src: url(${require('../fonts/ibm/' + src + '_' + fontWeight + '.ttf')});
      font-weight: ${fontWeight};
    }
  `
}

export const ibmFont = createGlobalStyle`
  ${fontFace('ibmRegular', 'ibmRegular', 400)} 
  ${fontFace('ibmBold', 'ibmBold', 700)} 
  
  body {
    font-family: ibmRegular, sans-serif;
  }
  
  button {
    font-family: ibmBold, sans-serif;
 }
`