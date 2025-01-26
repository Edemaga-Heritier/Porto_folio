import NavBar from "./NavBar"


const Header = () =>{
return(
  <header className="fixed top-0 w-full h-20 left-0 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
    <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]" >
      <h1>
        <a href="/" className="logo">
        <img src="" alt="Edems"  width={40} height={40}/>
        </a>
      </h1>
      <div className="relative md:justify-self-center">
        <button className="menu-btn md:hidden" onClick={null}>
          <span className="matrial symbols-rounded">menu</span>
        </button>
      </div>
      <NavBar />
   <a href="#contact"className="">
     Contact
   </a>

       
      


    </div>

  </header>
)


}


export default Header
