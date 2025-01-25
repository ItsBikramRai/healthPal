import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Logo } from "../Img/img.js";
import { AuthContext } from "../contextAPi/AuthContext.jsx";

function Navbar() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setAuth(null);
    navigate("/");
  };

  return (
    <div className="bg-gray-500">
      <nav
        role="navigation"
        className="bg-gray-900 shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Desktop Navigation */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/">
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="logo" className="h-11 rounded-full" />
                <span className="text-xl text-gray-200 font-bold">
                  HealthPal
                </span>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <div className="text-gray-200 hidden md:flex space-x-6">
              {/* <NavLink to="/patient-section">
                <Button variant="ghost">Patient Section</Button>
              </NavLink> */}

              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-700"
                    : "text-gray-300 hover:text-orange-500 duration-100"
                }
              >
                <Button variant="ghost">Home</Button>
              </NavLink>

              <NavLink to="/about">
                <Button variant="ghost">About</Button>
              </NavLink>

              <NavLink to="/contact">
                <Button variant="ghost">Contact</Button>
              </NavLink>
              {auth?.user && (
                <NavLink to="/user-details">
                  <Button variant="ghost">{auth?.user}</Button>
                </NavLink>
              )}
              {auth?.user ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="hover:underline"
                >
                  Logout
                </button>
              ) : (
                <NavLink to="/login">
                  <Button className="text-black bg-blue-600 hover:bg-blue-700 outline-none">
                    Login
                  </Button>
                </NavLink>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <NavLink to="/home">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  Home
                </Button>
              </NavLink>

              <NavLink to="/about">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  About
                </Button>
              </NavLink>

              <NavLink to="/contact">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  Contact
                </Button>
              </NavLink>

              {auth?.user ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full justify-start text-white"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-white"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
