import { useMemo, useState } from "react";

interface NavItem {
  name: string;
  link: string;
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = useMemo(() => {
    return [
      { name: "Services", link: "#services" },
      { name: "Experience", link: "#experience" },
      { name: "Projects", link: "#projects" },
      { name: "Contact", link: "#contact" },
      { name: "Resume", link: "#resume" },
    ];
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.link === "#resume") {
      window.open("./resume/CV_main.pdf", "_blank");
    } else {
      const target = document.querySelector(item.link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <nav className="px-8 lg:px-32 py-5 bg-primary text-[18px]">
        <div className="flex flex-row justify-between md:justify-start items-center gap-0 md:gap-32 lg:gap-60 mx-auto max-w-[1440px]">
          <a
            href="/"
            className="text-secondary cursor-pointer flex font-medium"
          >
            PORT<p className="text-white">folio</p>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex lg:gap-10 md:gap-5 justify-start items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="hover:text-secondary cursor-pointer bg-transparent border-none outline-none"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden relative">
            <img
              loading="lazy"
              src={
                mobileMenuOpen ? "./icons/cancel.png" : "./icons/menu-bar.png"
              }
              alt="menubar"
              className="h-8 w-8 bg-white rounded-full cursor-pointer"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            />
            {mobileMenuOpen && (
              <div className="absolute flex flex-col background-gradient border border-gray-500 rounded-md w-[130px] shadow-lg duration-300 right-0 top-10 p-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item);
                      setMobileMenuOpen(false);
                    }}
                    className="hover:text-secondary cursor-pointer text-left bg-transparent border-none outline-none"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
