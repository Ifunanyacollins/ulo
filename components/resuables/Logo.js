import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="h-10 cursor-pointer w-10 border-1 bg-primary flex justify-center items-center rounded-md">
        <span className="font-extrabold text-sm text-white block">ULO</span>
      </div>
    </Link>
  );
}

export default Logo;
