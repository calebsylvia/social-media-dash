import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      console.log('darkmode')
    } else {
      document.documentElement.classList.remove("dark");
      console.log('light')
    }
  }, [darkMode]);

  const themeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative">
    <div className="md:flex md:justify-between w-4/5 mx-auto pt-8">
      <div>
        <p className="text-2xl md:text-3xl font-bold text-lightMode-text dark:text-darkMode-text">Social Media Dashboard</p>
        <p className="text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue">Total Followes: 23,004</p>
      </div>
      <div className="md:hidden pt-5 pb-4">
        <hr className="border-0 h-px bg-gray-600"/>
      </div>
      <div className="toggle max-md:justify-between">
        <label
          htmlFor="checkbox"
          className="font-bold text-lightMode-text dark:text-darkMode-desatBlue text-sm cursor-pointer md:pr-0"
        >
          Dark Mode
        </label>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={!darkMode}
          onClick={themeHandler}
        />
        <label htmlFor="checkbox" className="label">
          <div className="ball"></div>
        </label>
      </div>
    </div>
    </div>
  );
};

export default Header;
