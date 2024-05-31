import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-center bg-yellow-400 p-1 absolute w-screen bottom-0">
      Made with ❤️ by{" "}
      <a
        className=""
        href="https://www.linkedin.com/in/kislay-kumar-a49a1316b/"
      >
        {" "}
        <span className="ml-1 underline">Kislay Kumar</span>
      </a>
    </div>
  );
};

export default Footer;
