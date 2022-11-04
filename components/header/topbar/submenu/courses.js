import DarkButtonLink from "../../../global/darkbuttonlink";
import { DNavItem } from "../dropdown/dropdown";

export default function Courses(props) {
  return (
    <div className="hidden group-hover:block absolute right-0 top-full bg-white px-3 py-4 rounded-xl border border-gray-50 shadow-lg">
      <div className="block font-semibold">
        <DNavItem name="language english" to="/language-english" />
        <DNavItem name="language french" to="/language-french" />
      </div>
    </div>
  );
}
