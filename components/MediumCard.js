import React from "react";
import Image from "next/image";
function MediumCard({ img, title }) {
  return (
    <div className="rounded-xl shadow hover:scale-105 hover:bg-gray-100 transition transform duration-300 ease-out">
      <div className="relative h-56 w-80">
        <Image
          className="rounded-xl"
          src={img}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>
        <h3 className="text-2xl p-2">{title}</h3>
      </div>
    </div>
  );
}

export default MediumCard;
