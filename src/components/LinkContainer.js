import Link from './Link'

const LinkContainer = () => {

  const links = [
    {
        id:1,
        href: "https://reactjs.org/",
        content: "Learn React"
    },
    {
        id: 2,
        href: "https://youtube.com/",
        content: "Go to YouTube"
    },
    {
        id:3,
        href: "https://google.com/",
        content: "Go to Google"
    },{
        id:4,
        href: "https://apple.com/",
        content: "Go to Apple"
    },{
        id:5,
        href: "https://amazon.com/",
        content: "Go to Amazon"
    }
]


    return (
      <div>
        {links.map(({id,href,content}) => {
          return (
            <div key={id}>
              <Link href={href}>{content}</Link>
              <br />
              </div>
          )
        })}

      </div>
    )

}

export default LinkContainer