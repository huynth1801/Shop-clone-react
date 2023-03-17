import logo from "../../assets/images/dark-logo.png";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./Header.css";
import { AiOutlineHeart, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header
      className="w-full h-[60px] relative px-8 leading-[70px] my-4 md:h-[70px] items-center"
      ref={headerRef}
    >
      <div className="container items-center justify-between">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="w-full cursor-pointer" />
          </div>

          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul
              className="menu items-center justify-center
                            md:flex flex-col
                            md:flex-row md:gap-x-10 md:font-medium"
            >
              {nav__links.map((item, index) => (
                <li key={index} className="nav__item">
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav icon */}
          <div
            className="nav__icons cursor-pointer text-2xl 
                          flex items-center text-[20px] 
                          gap-4 md:gap-6"
          >
            <span className="heart__icon">
              <AiOutlineHeart className="hover:text-[#DCB14A]" />
            </span>
            <span className="cart__icon ">
              <BsCart3 className="hover:text-[#DCB14A]" />
              <span className="badge">{totalQuantity}</span>
            </span>
            <span className="user__icon">
              <AiOutlineUser className="hover:text-[#DCB14A]" />
            </span>
            {/* Mobile menu */}
            <div className="mobile__menu cursor-pointer text-2xl md:hidden">
              <span onClick={menuToggle}>
                <AiOutlineMenu className="hover:text-[#DCB14A]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
