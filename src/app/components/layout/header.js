import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="http://">
        MSO PIZZA
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          className="bg-primary rounded-full text-white px-8 py-2"
          href={""}
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
