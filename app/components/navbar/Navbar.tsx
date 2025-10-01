"use client";
import { usePathname } from "next/navigation";
import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ProfilImage from "@/public/image.png";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="w-full py-4 border-b">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo + Search */}
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold">Genfi</span>

          <form>
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="py-2 px-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-"
            />
          </form>
        </div>

        {/* Right side button */}
        {/* Right side: Profile + Notification + Wallet */}
        <div className="flex items-center space-x-6">
          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <Image
              src={ProfilImage}
              width={40}
              height={40}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">+233 24 123 4567</p>
            </div>
          </div>
          {/* Notification Bell */}
          <button className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none">
            <BellIcon className="w-5 h-5" />

            {/* Notification Badge */}
            <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Wallet Button */}
          <button className="px-4 py-2 bg-[var(--primaryColorDark)] text-white rounded-full hover:bg-[var(--primaryColorMain)] focus:ring-2 focus:outline-none">
            Wallet
          </button>
        </div>
        {/* <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:ring-2 focus:outline-none">
            Dashboard
          </button>
        </div> */}
      </div>
    </nav>
  );
}
