import '../styles/globals.css'

const gift = {
  badge:[]
  // badge: 0
}

if(process.browser){
  var unlocks = localStorage.getItem("unlocks")
  
  if(!unlocks){
    localStorage.setItem("unlocks", JSON.stringify(gift));
  }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
