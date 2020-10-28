import {createGlobalStyle} from 'styled-components'

function fontFace(name, src, family, fontWeight = 'normal') {
  return `
    @font-face{
      font-family: "${name}";
      src: url(${require(`./fonts/${family}/${src}_${fontWeight}.ttf`)});
      src: url(${require('./images/password-dot.svg')});
      font-weight: ${fontWeight};
    }
  `
}

export const IbmFont = createGlobalStyle`
  ${fontFace('ibmRegular', 'ibmRegular', 'ibm', 400)} 
  ${fontFace('ibmBold', 'ibmBold', 'ibm', 700)} 
  ${fontFace('ibmPlexSansBold', 'ibmPlexSansBold', 'ibm', 700)}
  ${fontFace('ibmPlexSansRegular', 'ibmPlexSansRegular', 'ibm', 400)}
  ${fontFace('ibmPlexSansLight', 'ibmPlexSansLight', 'ibm', 300)}
  ${fontFace('ubuntuLight', 'ubuntuLight', 'ubuntu', 300)}

  body {
    font-family: ibmRegular, sans-serif;
  }
  
  button {
    font-family: ibmBold, sans-serif;
  }

  #hello_msg {
    font-family: ibmPlexSansLight, sans-serif;
  }
 
  #features_title {
    font-family: ubuntuLight, sans-serif;
  }

 .feature_title {
    font-family: ibmPlexSansLight, sans-serif;
  }

  .feature_description {
    font-family: ibmPlexSansRegular, sans-serif;  
  }

  .detailed {
    font-family: ibmPlexSansBold, sans-serif;
  }

  input::placeholder {
    font-family: ibmRegular, sans-serif;
  }
`