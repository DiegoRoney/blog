import Link from "next/link";

import bg from '../public/banner.jpg.png'
const Nav = () => {
  return (
    <nav className=" ">
      <div className="nav-marca" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition:'center',
      width: '100%',
      height: '100%',
    }}>
        <div>
          <Link href="/" passHref>
            <h1 className="pointer">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Blog - <span><br></br>Em construção</span>
            </h1>
          </Link>
         
        </div>

        {/* <div>
          <Link href="/bio" passHref>
            <p className="ms-5 pointer lead my-auto">Bio</p>
          </Link>
        </div> */}
      </div>

      
    </nav>
  );
};
export default Nav;
