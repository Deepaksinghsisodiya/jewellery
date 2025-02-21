import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import flag from "../../src/Assets/usa-flag.png";
import { sections } from "../Screens/DummyData/DummyData";

const Footer = () => {
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>(
    {}
  );
  const toggleSection = (index: any) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  console.log(FaFacebookF);

  return (
    <div>
      <div className="bg-gray-100">
        <div className="w-[90%] md:w-[60%] mx-auto py-6 text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <div className="text-lg">
                Join <span className="text-gray-600 font-normal"> My</span>{" "}
                <span className="text-black">GK JEWELER</span>
              </div>
              <div className="text-xs mt-2">
                Join our rewards program today to earn points, get personal
                offers and enjoy exclusive benefits.
              </div>
            </div>
            <div className="mt-4 md:mt-0 w-full md:w-auto">
              <button className="w-full md:w-40 py-3 bg-black text-white text-xs font-semibold">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>

        <div className="border-b mx-4 md:mx-8 border-gray"></div>

        <div className="w-[90%] mx-auto py-6">
          <div className="md:hidden space-y-3">
            {sections.map((section, index) => (
              <div key={index} className="border-b pb-1">
                <div
                  className="flex justify-between items-center py-1 cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <span className="text-black font-semibold">
                    {section.title}
                  </span>
                  <button className="text-lg">
                    {openSections[index] ? "−" : "+"}
                  </button>
                </div>
                {openSections[index] && (
                  <ul className="list-none space-y-2 text-xs text-gray-600">
                    {section.links.map((link, i) => (
                      <li key={i} className="hover:text-black cursor-pointer">
                        {link}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sections.map((section, index) => (
              <ul
                key={index}
                className="list-none space-y-2 text-xs text-gray-600"
              >
                <li className="text-black font-semibold">{section.title}</li>
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-black cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="border-b mx-4 md:mx-8 border-gray"></div>

        <div className="w-[90%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="inline-flex flex-wrap gap-4 md:gap-8 items-center">
            <div>© ALL RIGHTS RESERVED. 2025 GK JEWELER</div>
            <div className="flex items-center gap-1">
              <img src={flag} alt="flag-1" className="h-3 w-5" />
              <div className="text-xs hover:cursor-pointer hover:border-b border-black">
                United States
              </div>
            </div>
            <div className="text-xs hover:cursor-pointer hover:border-b border-black">
              English
            </div>
          </div>

          <div className="inline-flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-0 items-center">
            <div className="text-xs hover:underline cursor-pointer">
              Privacy Policy
            </div>
            <div className="text-xs hover:underline cursor-pointer">
              Terms and Conditions
            </div>
            <div className="inline-flex gap-3 items-center text-gray-600">
              <FaFacebookF
                className="cursor-pointer hover:text-black"
                size={15}
              />
              <FaInstagram
                className="cursor-pointer hover:text-black"
                size={15}
              />
              <FaTwitter
                className="cursor-pointer hover:text-black"
                size={15}
              />
              <FaYoutube
                className="cursor-pointer hover:text-black"
                size={15}
              />
              <FaPinterest
                className="cursor-pointer hover:text-black"
                size={15}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
