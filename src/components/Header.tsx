function Header() {
  return (
    <header className="bg-zircon items-center justify-between lg:px-20 md:flex p-4 sticky top-0 w-full">
      <a href="/">
        <h1 className="font-bold mb-4 md:mb-0 text-green-700 text-2xl">
          Success Okorie.
        </h1>
      </a>
      <ul className="flex justify-between md:justify-start">
        <li className="font-bold ml-2">
          <a className="hover:text-green-700" href="#about">
            About Me
          </a>
        </li>
        <li className="font-bold ml-2">
          <a className="hover:text-green-700" href="#skill">
            Skills
          </a>
        </li>
        <li className="font-bold ml-2">
          <a className="hover:text-green-700" href="#projects">
            Projects
          </a>
        </li>
        <li className="font-bold ml-2">
          <a className="hover:text-green-700" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
