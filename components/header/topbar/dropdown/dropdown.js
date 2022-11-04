import Link from "next/link";
import DarkButtonLink from "../../../global/darkbuttonlink";

export default function DropdownMenu(props) {
  return (
    <div className="absolute right-0 top-full bg-white px-3 py-4 rounded-xl border border-gray-50">
      <nav className="block font-semibold">
        <DNavItem name="home" to="/" />
        <DNavItem name="language camps" to="/language-camps" />
        <DNavItem name="language clubs" to="/language-clubs" />
        <DNavItem name="courses" to="/courses" />
        <DNavItem name="contact us" to="/contact" />
        <div className="px-5 py-6">
          <DarkButtonLink name="CONTACT NOW" to="contact" />
        </div>
      </nav>
    </div>
  );
}
export function DNavItem(props) {
  return (
    <div className="px-5 py-2">
      <Link
        className="uppercase group flex flex-col items-start"
        href={props.to}
      >
        <div className="whitespace-nowrap">{props.name}</div>
        {/* <div className="h-[2px] bg-slate-800 w-0 group-hover:w-auto"></div> */}
      </Link>
    </div>
  );
}
