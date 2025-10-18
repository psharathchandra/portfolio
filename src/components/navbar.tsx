import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-dark opacity-85 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <ul className="flex md:flex space-x-6 text-light">
            <li>
              <Link href="/" className="flex items-center font-bold text-xl p-3 m-1 hover:text-gray-400 transition-all duration-300">
                Sharath Chandra
              </Link>
            </li>
          </ul>

          {/* Menu items */}
          <ul className="hidden md:flex space-x-6 text-light">
            <li>
              <a href="#about" className="flex p-3 my-1 hover:text-gray-400 transition-all duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="flex p-3 my-1 hover:text-gray-400 transition-all duration-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#education" className="flex p-3 my-1 hover:text-gray-400 transition-all duration-300">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="flex p-3 my-1 hover:text-gray-400 transition-all duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="flex p-3 my-1 hover:text-gray-400 transition-all duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile menu button (hamburger) */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
