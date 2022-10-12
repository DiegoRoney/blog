import Link from 'next/link'


const Menu = () => {
  return (    
    
            
     <div className="nav-links">

      <ul>
        
      <Link href="/" passHref>
        <li> Home</li>
      </Link>
      <Link href="/bio" passHref>
        <li> Sobre</li>
      </Link>
        {/* <li> item</li>
        <li> item</li> */}
      <Link href="https://diegoroney.github.io/portfolio/" passHref>
        <li> Portfólio</li>  
         
      </Link>     
      </ul>     

      
     </div>         
        

  )
}
export default Menu
