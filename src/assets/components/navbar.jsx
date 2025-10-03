import { BsMortarboardFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const navbarItems = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Program",
    link: "#program",
  },
  {
    label: "Benefit",
    link: "#benefits",
  },
  {
    label: "Pricing",
    link: "#pricing",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  return (
    <section className="bg-white shadow-md sticky top-0 z-50">
      <nav className="navbar container mx-auto ">
        <div className="navbar-start">
          <a className="flex items-center gap-2 font-bold text-xl" href="/">
            <span className="p-2 bg-blue-600 rounded-md">
              <BsMortarboardFill color="#ffff" />
            </span>
            <p className="tracking-tight">Language Center</p>
          </a>
        </div>

        {/* responsive navbar */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              aria-label="burger-navbar"
            >
              <RxHamburgerMenu size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-6 w-52 p-2 shadow"
            >
              {navbarItems.map((nav, index) => (
                <li key={index} className="hover:underline">
                  <a href={nav.link}>{nav.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* responsive navbar */}

        <div className="navbar-end lg:flex hidden">
          <ul className="menu menu-horizontal p-0 items-center gap-3">
            {navbarItems.map((nav, index) => {
              if (nav.link == "#contact") {
                return (
                  <li key={index}>
                    <a
                      href={nav.link}
                      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-semibold"
                    >
                      {nav.label}
                    </a>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="hover:underline">
                    <a href={nav.link}>{nav.label}</a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
