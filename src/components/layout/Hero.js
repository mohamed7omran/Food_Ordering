import Image from "next/image";
import Right from "../icons/right";

const Hero = () => {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better <br /> with a{" "}
          <span className="text-primary">pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex justify-center uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm">
            Order noe
            <Right />
          </button>
          <button className="flex gap-2 py-2 items-center border-0 text-gray-600 font-semibold">
            Learn more <Right />
          </button>
        </div>
      </div>
      <div className="relative animate-spin-slow ">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
};

export default Hero;
