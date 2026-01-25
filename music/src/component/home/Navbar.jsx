import React, { useState } from "react";
import { ChevronDown, Search, Zap, ShoppingBag, User } from "lucide-react";

const categories = [
  "True Wireless Earbuds",
  "Wireless Earbuds",
  "Neckband Earphones",
  "Over-Ear Headphones",
  "On-Ear Headphones",
  "Wired Earphones",
  "Wired Headphones",
  "Wireless Speakers",
  "Portable Bluetooth Speakers",
  "Party Speakers",
  "Soundbars",
  "Home Audio Systems",
  "Studio Headphones",
  "DJ Headphones",
  "Gaming Headsets",
  "Noise Cancelling Headphones",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      {/* ===== ROW 1 : LOGO ===== */}
      <div className="flex justify-center py-3 border-b border-gray-100 bg-black">
        <div className="text-3xl font-bold cursor-pointer text-white uppercase flex items-center gap-2">
          <span className="text-red-600 text-4xl">A</span>udi<span className="text-red-600 ">o</span>vo<span className="text-red-600 text-4xl ">x</span>
        </div>
      </div>

      {/* ===== ROW 2 : NAVIGATION ===== */}
    <div className="w-full py-3 border-b border-gray-100">

  {/* CENTERED CONTAINER */}
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

    {/* ===== LEFT MENU ===== */}
    <ul className="flex items-center gap-8 font-medium text-gray-800">

      {/* Categories Dropdown */}
      <li
        className="relative cursor-pointer flex items-center gap-1 group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        Categories <ChevronDown size={16} className="group-hover:text-red-600 transition-colors" />

        {open && (
          <div className="absolute left-0 top-10 w-[720px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-4 gap-4 z-50">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 hover:text-red-600 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        )}
      </li>

      <li className="cursor-pointer hover:text-red-600" onClick={() => window.location.href='/about'}>About</li>
      <li className="cursor-pointer hover:text-red-600" onClick={() => window.location.href='/contact'}>Contact</li>
      <li className="cursor-pointer hover:text-red-600" onClick={() => window.location.href='/faq'}>FAQ</li>
      <li className="cursor-pointer hover:text-red-600 flex items-center gap-1">
        More <ChevronDown size={16} />
      </li>
    </ul>

    {/* ===== RIGHT SECTION ===== */}
    <div className="flex items-center gap-6">
      <div className="relative">
        <input
            type="text"
            placeholder='Search "Speakers"'
            className="pl-10 pr-4 py-2 w-70 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-black text-sm"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>

      <div className="flex items-center gap-4 text-gray-700">
        <Zap className="cursor-pointer hover:text-red-600 transition-colors" size={24} />
        <ShoppingBag className="cursor-pointer hover:text-red-600 transition-colors" size={24} />
      </div>
    </div>

  </div>
</div>

    </nav>
  );
};

export default Navbar;

