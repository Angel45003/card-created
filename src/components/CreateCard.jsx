import React from "react";

function CreateCard({ image, title }) {
  return (
    <div className="bg-zinc-950 w-fit rounded-lg overflow-hidden transition-all duration-100 relative hover:opacity-60 flex justify-center flex-col text-center hover:cursor-pointer">
      <img
        src={image}
        className="hover:-translate-y-3 transition-all duration-100"
        alt=""
      />
      <div className="p-[6px] text-center transition-all duration-100">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default CreateCard;
