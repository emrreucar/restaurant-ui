import React from "react";
import Link from "next/link";
import { menu } from "@/data";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`/menu/${category.slug}`}
          className="w-full h-1/3 bg-cover p-8 md:h-[50%] "
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} md:w-[50%] w-full `}>
            <h1 className="uppercase font-bold text-3xl">{category.title} </h1>
            <p className="text-sm my-0 md:my-2 font-bold">{category.desc} </p>
            <button
              className={`hidden 2xl:block bg-${category.color} text-${
                category.color === "black" ? "white" : "white"
              } py-2 px-4 rounded-md `}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
