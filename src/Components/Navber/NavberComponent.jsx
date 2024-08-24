import React from "react";

const NavberComponent = () => {
  return (
    <header className="bg-[#000D39] text-white">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="text-xs">
          <span className="bg-gray-600 px-2 py-1 rounded">Trending</span>
          <span className="ml-2">
            Every success is helped by someone behind the people
          </span>
        </div>
        <div className="flex items-center">
          <span>Dhaka 36°</span>
          <span className="mx-4">|</span>
          <span>Monday - July 2, 2021</span>
        </div>
      </div>
    </header>
  );
};

export default NavberComponent;
