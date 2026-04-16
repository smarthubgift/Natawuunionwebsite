import { Outlet, Link } from "react-router";
import { useState } from "react";
import { Menu, X, MoreVertical, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "figma:asset/cd23197be1ec1a989d1b0f8f8c7481d8044684c5.png";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-yellow-400 bg-opacity-80 text-[#2d5f3f] shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="NATAWU Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-[#2d5f3f]">NATAWU</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-[#2d5f3f] hover:text-white hover:bg-[#2d5f3f] transition-colors px-3 py-2 rounded"
              >
                HOME
              </Link>

              <Link
                to="/about"
                className="text-[#2d5f3f] hover:text-white hover:bg-[#2d5f3f] transition-colors px-3 py-2 rounded"
              >
                ABOUT US
              </Link>

              <Link
                to="/leadership"
                className="text-[#2d5f3f] hover:text-white hover:bg-[#2d5f3f] transition-colors px-3 py-2 rounded"
              >
                LEADERSHIP
              </Link>

              <Link
                to="/benefits"
                className="text-[#2d5f3f] hover:text-white hover:bg-[#2d5f3f] transition-colors px-3 py-2 rounded"
              >
                BENEFITS
              </Link>
              <Link
                to="/sectors"
                className="text-[#2d5f3f] hover:text-white hover:bg-[#2d5f3f] transition-colors px-3 py-2 rounded"
              >
                SECTORS
              </Link>
              <Link
                to="/gallery"
                className="text-[#2d5f3f] hover:text-white hover:bg-[#2d5f3f] transition-colors px-3 py-2 rounded"
              >
                GALLERY
              </Link>
              <Link
                to="/forms"
                className="text-[#2d5f3f] hover:text-white hover:bg-[#2d5f3f] transition-colors px-3 py-2 rounded"
              >
                FORMS
              </Link>
              <Link
                to="/location"
                className="text-[#2d5f3f] hover:text-white hover:bg-[#2d5f3f] transition-colors px-3 py-2 rounded"
              >
                LOCATION
              </Link>

              {/* Dropdown Menu - Right Side */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className="p-2 text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white rounded-lg transition-colors"
                  aria-label="Menu"
                >
                  <MoreVertical className="h-6 w-6" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-yellow-50 text-gray-800 rounded-md shadow-lg py-2 border border-gray-200">
                    <Link
                      to="/documents"
                      className="block px-4 py-2 text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white transition-colors"
                    >
                      Documents
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-[#2d5f3f]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <Link
                to="/"
                className="block text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white px-4 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="block text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white px-4 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                ABOUT US
              </Link>
              <Link
                to="/leadership"
                className="block text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white px-4 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                LEADERSHIP
              </Link>
              <Link
                to="/benefits"
                className="block text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white px-4 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                BENEFITS
              </Link>
              <Link
                to="/sectors"
                className="block text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white px-4 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                SECTORS
              </Link>
              <Link
                to="/gallery"
                className="block text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white px-4 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                GALLERY
              </Link>
              <Link
                to="/forms"
                className="block text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white px-4 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                FORMS
              </Link>
              <Link
                to="/location"
                className="block text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white px-4 py-2 rounded"
                onClick={toggleMobileMenu}
              >
                LOCATION
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1a3d2a] text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl mb-4">About NATAWU</h3>
              <p className="text-gray-300">
                National Transport and Allied Workers Union - Fighting for workers' rights across South Africa.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-green-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/benefits" className="text-gray-300 hover:text-green-300">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/sectors" className="text-gray-300 hover:text-green-300">
                    Sectors
                  </Link>
                </li>
                <li>
                  <Link to="/location" className="text-gray-300 hover:text-green-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Cape Town - HEAD OFFICE</strong></p>
                <p>Phone: +27 (0) 21 456 7890</p>
                <p>Email: wc@natawu.net.za</p>
                <p>Email: lucky@natawu.net.za</p>
                
                <p className="mt-4"><strong>KZN Branch</strong></p>
                <p>Phone: +27 (0) 73 834 8457</p>
                <p>Email: kzn@natawu.net.za</p>
                <p>Email: simo@natawu.net.za</p>
                
                <p className="mt-4"><strong>Gauteng Branch</strong></p>
                <p>Phone: +27 (0) 61 022 5839</p>
                <p>Email: gp@natawu.net.za</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1B8JpJdXYH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2d5f3f] p-3 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/NATAWU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2d5f3f] p-3 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@NATAWU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2d5f3f] p-3 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/NATAWU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2d5f3f] p-3 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2026 NATAWU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}