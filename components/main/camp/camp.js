import JoinUs from "../../global/joinus";
import Pricing from "../pricing/pricing";
import Holiday from "./holiday/holiday";
import Summer from "./summer/summer";

export default function Camp(props) {
  return (
    <section className="bg-teal-100">
      <div className="mx-auto max-w-7xl py-8 lg:py-16 px-4 lg:px-6">
        <h2 className="text-4xl tracking-tight font-bold text-gray-900 text-center">
          Language Camps
        </h2>
      </div>
      <Holiday></Holiday>
      <Summer></Summer>
    </section>
  );
}
