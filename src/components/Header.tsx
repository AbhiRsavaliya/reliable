import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Menu, X, TreePine, User, LogOut, ChevronDown } from 'lucide-react';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { User as FirebaseUser } from 'firebase/auth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowLogoutModal(false);
      setShowUserDropdown(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getUserDisplayName = () => {
    if (user?.displayName) {
      return user.displayName;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'User';
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/img/Rlogo.png"
                alt="Reliable Landscaping & Yard Care Logo"
                className="h-36 w-auto md:h-40 header-logo-animate"
              />
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    (isActive
                      ? 'text-green-600 font-bold'
                      : 'text-gray-700 hover:text-green-600') +
                    ' text-base md:text-lg transition-all duration-200'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    <User className="h-5 w-5" />
                    <span className="font-medium">{getUserDisplayName()}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${showUserDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm text-gray-500">Signed in as</p>
                        <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          setShowUserDropdown(false);
                          setShowLogoutModal(true);
                        }}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation with slower smooth transition */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
              isMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ willChange: 'max-height, opacity' }}
          >
            <div className="py-4 border-t">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 text-lg font-semibold transition-colors ${
                      isActive(item.path)
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {user ? (
                  <div className="px-3 py-2 space-y-2">
                    <div className="flex items-center space-x-2 text-gray-700 py-2 border-b border-gray-200">
                      <User className="h-5 w-5" />
                      <div>
                        <p className="font-medium">{getUserDisplayName()}</p>
                        <p className="text-sm text-gray-500 truncate">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        setShowLogoutModal(true);
                      }}
                      className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setIsMenuOpen(false)}
                    className="mx-3 mt-2 flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Sign In</span>
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <LogOut className="h-6 w-6 text-red-600" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Confirm Logout
              </h3>

              <p className="text-gray-600 mb-6">
                Are you sure you want to logout? You'll need to sign in again to access your account.
              </p>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes header-logo-zoom {
            0% { transform: scale(1);}
            5% { transform: scale(1);}
            10% { transform: scale(1.15);}
            15% { transform: scale(1);}
            100% { transform: scale(1);}
          }
          .header-logo-animate {
            animation: header-logo-zoom 10s ease-in-out infinite;
          }
        `}
      </style>
    </>
  );
};

export default Header;