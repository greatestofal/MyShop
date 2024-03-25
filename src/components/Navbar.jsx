import WebLogo from "../images/logo.jpg";
import hamburger from "../images/hamburger.jpg";
import { navLinks, navTwo } from "../useful/Useful";
// ... other imports ...

const Navbar = () => {
  return (
    <header className="padding-x py-2 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="hover">
          <img src={WebLogo} alt="Logo" width={130} height={130} />
        </a>

        <ul className="flex-1 flex gap-16 justify-center items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex-1 flex gap-16 justify-center right-10  max-lg:hidden">
          {navTwo.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
