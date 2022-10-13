
import Image from "next/image"


const Footer = () =>{

   
    return(
        <footer className="" >          
          <div className="footer-texto">
            Desevolvido por:
          </div>

        <a className="footer-link"
          href="https://diegoroney.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className="logo">
            <Image src="/d-diego.png" alt="Diego Logo" width={90} height={15} />
          </span>
        </a>
      </footer>
    )
}

export default Footer

