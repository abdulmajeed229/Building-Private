import Image from "next/image";

function Header() {
    return (
      <div className="navMe  h-[100px] w-full bg-[#FFFFFF] text-[#333333] flex justify-around items-center p-4">
  
        <img src="https://eloquent-horse-d72418.netlify.app/logo.png" alt="Logo" className="h-[41px] w-[68px]" />
  
        <div>

          <span className="Icon text-[22px]">&#9776;</span>

          <ul className="flex text-[14px] gap-10 tracking-wider">
            <li className="Good">MAIN</li>
            <li >GALLERY</li>
            <li >PROJECTS</li>
            <li >CERTIFICATION</li>
            <li>CONTACTS</li>
          </ul>
        </div>
      </div>
    );
}

export default Header;
