import React, { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import offerImg from "../../../Assets/offerImage.png.jpg";
import { menuData } from "../../DummyData/DummyData";
const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    subItems: { title: string; items: string[] }[];
  } | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<{
    title: string;
    items: string[];
  } | null>(null);

  return (
    <div>
      <div className="flex items-center w-[90%] mx-auto justify-between">
        <div
          className="sm:hidden flex gap-3 py-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="text-2xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="sm:hidden flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-1 font-bold text-3xl sm:text-4xl md:text-5xl sm:text-center justify-center sm:justify-start">
          GK JEWELERS
        </div>

        <div className="flex items-center gap-3">
          <div className="sm:hidden flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div className="sm:hidden flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>

          <div className="hidden sm:block py-2 w-[90%] mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="h-12 w-full border p-4 pr-10 text-xs"
              />
              <CiSearch
                size={25}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500"
              />
            </div>
          </div>

          <div className="relative">
            <div className="hidden sm:flex flex-row-reverse gap-3">
              <div className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300">
              </div>

              <div
                className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300 relative"
                onMouseEnter={() => setShowCard(true)}
                onMouseLeave={() => setShowCard(false)}
              >
                <CiUser size={24} />
                {showCard && (
                  <div className="absolute top-10 right-[-10px] w-64 bg-white shadow-lg overflow-hidden border z-50 mt-5">
                    <div className="text-center p-4 border-b">
                      <h2 className="text-xl font-light">
                        My <span className="font-bold">GK JEWELER</span>
                      </h2>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <button className="w-full bg-black text-white py-2 text-sm font-semibold">
                        LOG IN
                      </button>
                      <button className="w-full border border-black text-black py-2 text-sm font-semibold">
                        JOIN NOW
                      </button>
                    </div>
                    <div className="relative">
                      <img
                        src={offerImg}
                        alt="Join Now"
                        className="w-full h-44"
                      />
                    </div>
                    <div className="p-4 text-center text-sm">
                      <span className="font-semibold underline text-blue-400">
                        What Is My GK Jeweler?
                      </span>
                      <p className="text-gray-600 mt-2 text-xs font-semibold">
                        *The 10% discount will be in your account 3 days after
                        you join and is valid for 30 days.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden bg-white fixed top-0 left-0 w-[90%] h-screen transition-transform ${
            isMenuOpen ? "translate-x-0 z-20" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-100">
            {selectedItem || selectedSubItem ? (
              <button
                className="text-gray-600 hover:text-black flex items-center gap-1"
                onClick={() =>
                  selectedSubItem
                    ? setSelectedSubItem(null)
                    : setSelectedItem(null)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>

                <span className="text-lg font-semibold text-gray-600">Back</span>
              </button>
            ) : (
              <div></div>
            )}

            <button
              className="flex items-center gap-2 text-gray-600 hover:text-black text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Close
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="h-[calc(100vh-60px)] overflow-hidden overflow-y-auto">
            <ul className="overflow-y-auto h-full bg-white mt-2">
              {!selectedItem && !selectedSubItem && (
                <>
                  <li className="flex items-center border-b border-gray-300 px-4 py-3 whitespace-nowrap gap-3">
                    <div className="flex items-center gap-2">
                      <CiUser size={20} />
                      <h2 className="text-sm font-semibold">
                        My <span className="text-sm font-bold">GK JEWELER</span>
                      </h2>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      LOG IN / JOIN NOW
                    </span>
                  </li>
                  {menuData.map((menu, index) => (
                    <li
                      key={index}
                      className="py-4 px-4 border-b cursor-pointer font-semibold flex justify-between items-center text-lg"
                      onClick={() => setSelectedItem(menu)}
                    >
                      {menu.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </li>
                  ))}
                </>
              )}
              {selectedItem &&
                !selectedSubItem &&
                selectedItem.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-3 px-4 border-b cursor-pointer font-semibold flex justify-between items-center"
                    onClick={() => setSelectedSubItem(subItem)}
                  >
                    {subItem.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                ))}
              {selectedSubItem &&
                selectedSubItem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-4 text-sm py-3">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-pink-300 w-full h-1"></div>
      <div>
        <nav className="relative w-[90%] mx-auto py-2 flex gap-6">
          <div className="relative w-full">
            <div className="flex gap-6">
              {menuData.map((menu, menuIndex) => (
                <div
                  key={menuIndex}
                  className="relative"
                  onMouseEnter={() => setActiveIndex(menuIndex)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Menu Title */}
                  <div className="cursor-pointer hidden sm:flex items-center gap-1 text-xs font-semibold uppercase border-b-2 border-transparent hover:border-pink-500 py-1">
                    {menu.title}
                    {activeIndex === menuIndex ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {activeIndex !== null && (
              <div className="absolute left-0 top-full w-screen h-screen bg-white shadow-lg border p-6 grid grid-cols-4 gap-6 mt-2 z-50">
                {menuData[activeIndex]?.subItems.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    <h4 className="text-sm font-semibold text-black mb-2">
                      {subItem.title}
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1 inline-block">
                      {subItem.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="hover:text-black hover:border-b hover:border-black cursor-pointer pb-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
