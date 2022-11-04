import DarkButtonLink from "../../../global/darkbuttonlink";
import { DNavItem } from "../dropdown/dropdown";

export default function LanguageCamps(props) {
  return (
    <div className=" group-hover:block absolute right-0 top-full bg-white px-3 py-4 rounded-xl border border-gray-50 shadow-lg">
      <div className="block font-semibold">
        <DNavItem name="act it out" to="/act-it-out" />
        <DNavItem name="debate" to="/debate" />
        <DNavItem name="poetry" to="/poetry" />
      </div>
    </div>
  );
}
