
// we can deconstructure in our arguments 

function Link({href, children}) {

  // const {href, children} = props //deconstructuring

  // console.log("props", props)
  
  return (
      <a
            className="App-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
          {children}
          </a>
    )
  }

  export default Link
  
  //props are inputs that is given to a react component