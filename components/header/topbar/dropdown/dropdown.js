import DarkButtonLink from "../../../global/darkbuttonlink";
import DNavItem from "./navitem";

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
