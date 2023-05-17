import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-center bg-orange-400 px-3 py-1.5 outline-none max-w-[150px] rounded-lg">
      {text}
    </button>
  );
};

export default Button;
