import Image from "next/image";
import React from "react";

const HomeMenu = () => {
  return (
    <div className=" relative flex flex-col gap-2 justify-center items-center">
      <button className="flex text-2xl uppercase  text-slate-400">
        Check out
      </button>
      <button className=" text-2xl font-bold text-primary italic mb-8">
        Menu
      </button>
      <div className=" fixed -left-40 top-[400px] -z-10">
        <div className=" relative h-[100px] w-[100px] md:h-[400px] md:w-[400px] rotate-45 ">
          <Image
            src={
              "https://i0.wp.com/www.khan.com.bd/wp-content/uploads/2020/10/Coriander-Leaves.jpg?fit=1200%2C1200&ssl=1"
            }
            layout="fill"
            alt="coriander"
          />
        </div>
      </div>

      <div className=" fixed -right-40 top-[400px] -z-10">
        <div className=" relative h-[100px] w-[100px] md:h-[400px] md:w-[400px] -rotate-45 ">
          <Image
            src={
              "https://i0.wp.com/www.khan.com.bd/wp-content/uploads/2020/10/Coriander-Leaves.jpg?fit=1200%2C1200&ssl=1"
            }
            layout="fill"
            alt="coriander"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
