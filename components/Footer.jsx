
import Image from "next/image"


const Footer = () =>{
    return(
        <footer className="p-3 d-flex justify-content-center ">
        <a
          href="https://diegoroney.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Construido por: {' '}
          <span className="logo">
            <Image src="/d-diego.png" alt="Diego Logo" width={100} height={20} />
          </span>
        </a>
      </footer>
    )
}

export default Footer