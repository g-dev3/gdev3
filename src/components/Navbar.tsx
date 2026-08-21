import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div>
          <a href="/" className="flex items-center">
            <span className="font-lexend font-semibold text-4xl text-green">G</span>
            <img src={logo} alt="G Developer logo" className="h-9 w-9" />
            <span className="font-semibold text-3xl text-green">dev3</span>
          </a>
        </div>
        <div className="hidden md:flex gap-12 text-light-cream text-xl">
          <a
            className="
          relative
          pb-2
          hover:text-green
          after:content-['']
          after:absolute
          after:left-0
          after:bottom-0
          after:w-0
          after:h-0.5
          after:bg-light-cream
          after:transition-[width]
          after:duration-300
          after:ease-in-out
          hover:after:w-full
          focus:after:w-full
          "
            href="#home"
          >
            Home
          </a>
          <a
            className="
          relative
          pb-2
          hover:text-green
          after:content-['']
          after:absolute
          after:left-0
          after:bottom-0
          after:w-0
          after:h-0.5
          after:bg-light-cream
          after:transition-[width]
          after:duration-300
          after:ease-in-out
          hover:after:w-full
          focus:after:w-full
          "
            href="#about"
          >
            About
          </a>
          <a
            className="
          relative
          pb-2
          hover:text-green
          after:content-['']
          after:absolute
          after:left-0
          after:bottom-0
          after:w-0
          after:h-0.5
          after:bg-light-cream
          after:transition-[width]
          after:duration-300
          after:ease-in-out
          hover:after:w-full
          focus:after:w-full
          "
            href="#contact"
          >
            Contact Us
          </a>
          <a
            className="
          relative
          pb-2
          hover:text-green
          after:content-['']
          after:absolute
          after:left-0
          after:bottom-0
          after:w-0
          after:h-0.5
          after:bg-light-cream
          after:transition-[width]
          after:duration-300
          after:ease-in-out
          hover:after:w-full
          focus:after:w-full
          "
            href="#login"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
