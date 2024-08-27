import React from "react";
import "../Navber/NavberComponent.css";
import { FaRegCalendarCheck } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

const NavberComponent = () => {
  return (
    <header className="bg-[#000D39] text-white">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="text-xs">
          <button className="bg-gray-600 px-2 py-1 my-2 rounded btn font-medium text-[17px]">
            Trending
          </button>
          <span className="ml-2 font-medium text-[17px]">
            Every success is helped by someone behind the people
          </span>
        </div>
        <div className="flex items-center my-3 text-[17px] btn font-medium">
          <div className="flex pr-[10px]">
            <TiWeatherPartlySunny />
          </div>
          <span>Dhaka 36°</span>
          <span className="mx-4">
            <FaRegCalendarCheck />
          </span>
          <span>Monday - July 2, 2021</span>
        </div>
      </div>
    </header>
  );
};

export default NavberComponent;
