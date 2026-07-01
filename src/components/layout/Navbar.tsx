import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navigation";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-red-600"
        >
          🚌 BusGo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="font-medium text-gray-700 transition hover:text-red-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          <button className="rounded-lg border border-red-600 px-5 py-2 text-red-600 transition hover:bg-red-50">
            Login
          </button>

          <button className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700">
            Sign Up
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;