import Link from "next/link";
import Logo from "../resuables/Logo";
import { Button, Select } from "antd";

const { Option } = Select;
function Navbar(props) {
  return (
    <nav className=" h-16 border-b flex justify-between">
      <ul className="flex space-x-2 items-center h-full px-5">
        <li className="lg:pr-6 pr-2">
          <Logo />
        </li>

        <li className="hidden lg:block w-16 text-center">
          <Link href="/">
            <a className="text-black text-base">Discover</a>
          </Link>
        </li>
        <li className="hidden lg:block  w-16 text-center">
          <Link href="/add">
            <a className="text-black text-base">Add</a>
          </Link>
        </li>
      </ul>

      <ul className="flex space-x-2 items-center h-full px-5">
        <li className="">
          <Button type="primary">Add group</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
