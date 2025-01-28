import { useState } from 'react'
import { Menu,X } from 'lucide-react'
import NavLink from './NavLink'
import SocialLink from './socialLink'

         



export default function Header() {
  const[isMenuOpen,setMenuOpen]= useState(false)
  return (
    <header className='flex w-full bg-white/80 z-50 backdrop-blur-md shadow-sm'>
      <nav className=' container mx-auto px-6 py-4 '>
        <div className='flex justify-between items-center'>
          <a href="#home" className=' font-bold text-gray-800 text-4xl'> Porto Folio</a>

        </div>

 {/* Desktop */}
        <div className=' hidden md:flex items-center space-x-8'>
          <NavLink/>
          <SocialLink/>
         

        </div>
         {/* Mobile Menu Button */}
         <button className=' md:hidden' onClick={() =>setMenuOpen(!isMenuOpen)} aria-label='Toggle menu'>
          
{isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
         </button>

{/* Mobile Navigation */}
{isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLink />
              </div>
            </div>
          </div>
        )}

      </nav>

    </header>
  )
}
