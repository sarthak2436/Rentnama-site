"use client";

import Image from "next/image";
import { Search, Heart, User, ShoppingBag, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full bg-white shadow-sm px-4 py-1 sm:py-2">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto gap-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/M.png"
            alt="Rentnama Logo"
            width={80}
            height={45}
            className="hidden sm:block"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col items-end flex-1 min-w-[220px]">
          {/* Search + Icons */}
          <div className="flex items-center justify-end w-full space-x-2 sm:space-x-3">
            <div className="flex items-center bg-[#f2ecf6] px-2 py-1 rounded-full w-36 sm:w-56 md:w-64">
              <input
                type="text"
                placeholder="Search by product"
                className="bg-transparent outline-none text-xs sm:text-sm flex-grow"
              />
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            </div>
                   <button 
    onClick={() => router.push("/LoginSign")}
    className="text-xs font-medium hover:text-gray-600 transition-colors"
  >
    Login
  </button>
  <button 
    onClick={() => router.push("/Signup")}
    className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-all"
  >
    Sign Up
  </button>
</div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <Heart
                onClick={() => router.push("/wishlist")}
                className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer"
              />
              <ShoppingBag
                onClick={() => router.push("/ShoppingCart")}
                className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer"
              />
              <User
                onClick={() => router.push("/Account")}
                className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer"
              />
            </div>

            <button className="sm:hidden p-1 rounded-md border border-gray-300">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
