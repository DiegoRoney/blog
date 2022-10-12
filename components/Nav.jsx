import Link from 'next/link'

const Nav = () => {
  return (    
    <nav className=" " >
      <div> 
      <Link href="/" passHref>
        <h1 className="pointer">Blog Diego </h1>
      </Link>
      </div> 
      <div>
      <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto">Bio</p>
      </Link>
      </div>
      
    </nav>

  )
}
export default Nav
