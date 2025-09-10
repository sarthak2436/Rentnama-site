export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">Logo</div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <span className="material-icons">search</span>
            </button>
            <button className="relative text-gray-600 hover:text-gray-800">
              <span className="material-icons">shopping_bag</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </span>
            </button>
            <button className="md:hidden text-gray-600 hover:text-gray-800">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex justify-center items-center space-x-8 py-2 border-t">
          <a className="text-gray-600 hover:text-gray-900 font-medium" href="#">
            Men
          </a>
          <a className="text-gray-600 hover:text-gray-900 font-medium" href="#">
            Women
          </a>
          <a className="text-gray-600 hover:text-gray-900 font-medium" href="#">
            Kids
          </a>
        </nav>
      </div>

      {/* Offer banner */}
      <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium">
        <p>Sign in to get 20% off your first rental!</p>
      </div>
    </header>
  );
}
