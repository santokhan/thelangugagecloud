/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import DarkButtonLink from "../../global/darkbuttonlink";
import DropdownMenu from "./dropdown/dropdown";
import LanguageCamps from "./submenu/languagecamps";
import Link from "next/link";
import LanguageClub from "./submenu/languageclubs";
import Courses from "./submenu/courses";

export default function Topbar() {
  const [dropdown, setdropdown] = useState(false);

  return (
    <div className="bg-white flex justify-between items-center px-4 sm:px-10 py-2 border">
      <div>
        <img
          className="w-[6rem] xl:w-[8rem]"
          src="https://www.thelanguagecloud-edu.com/image/logo-main.png"
          alt="image"
        />
      </div>
      <div className="hidden xl:block">
        <nav className="flex items-center font-semibold">
          <NavItem name="home" to="/"></NavItem>
          <NavItem name="language camps" to="/language-camps">
            <LanguageCamps></LanguageCamps>
          </NavItem>
          <NavItem name="language clubs" to="/language-clubs">
            <LanguageClub></LanguageClub>
          </NavItem>
          <NavItem name="courses" to="/courses">
            <Courses></Courses>
          </NavItem>
          <NavItem name="contact us" to="/contact" />
          <div className="px-4">
            <DarkButtonLink name="CONTACT NOW" to="contact" />
          </div>
        </nav>
      </div>
      <div className="block xl:hidden relative">
        <button
          type="button"
          onClick={() => {
            setdropdown(!dropdown);
          }}
        >
          <img
            src="https://www.thelanguagecloud-edu.com/image/bar.png"
            alt="bar"
          />
        </button>
        {dropdown ? <DropdownMenu></DropdownMenu> : ""}
      </div>
    </div>
  );
}

export function TopbarOld() {
  const [dropdown, setdropdown] = useState(false);

  return (
    <div className="bg-white flex justify-between items-center px-4 sm:px-10 py-2 border">
      <div>
        <img
          className="w-[6rem] xl:w-[8rem]"
          src="https://www.thelanguagecloud-edu.com/image/logo-main.png"
          alt="image"
        />
      </div>
      <div className="hidden xl:block">
        <nav className="flex items-center font-semibold">
          <NavItem name="home" to="/"></NavItem>
          <NavItem name="language camps" to="/language-camps">
            <LanguageCamps></LanguageCamps>
          </NavItem>
          <NavItem name="language clubs" to="/language-clubs" />
          <NavItem name="courses" to="/courses" />
          <NavItem name="contact us" to="/contact" />
          <div className="px-4">
            <DarkButtonLink name="CONTACT NOW" to="contact" />
          </div>
        </nav>
      </div>
      <div className="block xl:hidden relative">
        <button
          type="button"
          onClick={() => {
            setdropdown(!dropdown);
          }}
        >
          <img
            src="https://www.thelanguagecloud-edu.com/image/bar.png"
            alt="bar"
          />
        </button>
        {dropdown ? <DropdownMenu></DropdownMenu> : ""}
      </div>
    </div>
  );
}
export function NavItem(props) {
  return (
    <div className="px-5">
      <Link className="uppercase group relative" href={props.to}>
        <div>{props.name}</div>
        <div className="h-[2px] bg-slate-800 w-0 group-hover:w-full rounded"></div>
        {props.children}
      </Link>
    </div>
  );
}
