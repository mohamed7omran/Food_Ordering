import Image from "next/image";
import Right from "../icons/right";

const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything is better with a pizza
        </h1>
        <p className="mt-4 text-gray-500">pizza is the missing pice</p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm">
            Order noe
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Lern more <Right />
          </button>
        </div>
      </div>
      <div className="relative">
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
