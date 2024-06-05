import React from 'react'

const Header = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Heer</h1>
        </div>
        <nav className="flex items-center">
          <div className="md:hidden" onClick={handleToggle}>
            <button className="text-3xl">&#9776;</button>
          </div>
          <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
            <li><a href="#About" className="block text-gray-700 hover:text-gray-900">About</a></li>
            <li><a href="#Projects" className="block text-gray-700 hover:text-gray-900">Projects</a></li>
            <li><a href="#Contacts" className="block text-gray-700 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
