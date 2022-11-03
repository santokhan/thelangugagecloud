import JoinUs from "../../global/joinus";
import Pricing from "../pricing/pricing";
import ActItOut from "./actitout/actitout";
import Debate from "./debate/debate";
import Poetry from "./poetry/poetry";

export default function Dummy(props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl py-8 lg:py-16 px-4 lg:px-6">
        <h2 className="text-4xl tracking-tight font-bold text-gray-900 text-center">
          Language Clubs
        </h2>
      </div>
      <ActItOut></ActItOut>
      <Debate></Debate>
      <Poetry></Poetry>
    </section>
  );
}
