import React from 'react'

const Header = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="pt-4">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <h1 className="h3 text-secondayr">
            <a href="./">
              Heer
            </a>
          </h1>
        </div>
        <nav className="flex items-center">
          <ul className={`flex space-x-4 mt-4 md:mt-0 subtitle text-secondary`}>
            {/* <li><a href="#About" className="block">About</a></li> */}
            <li><a href="#Projects" className="md:subtitle subtitle-mobile">Projects</a></li>
            <li><a href="#Contacts" className="md:subtitle subtitle-mobile">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
