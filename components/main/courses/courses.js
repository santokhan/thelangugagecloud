import JoinUs from "../../global/joinus";
import English from "./english/english";
import French from "./french/french";

export default function Courses(props) {
  return (
    <section className="bg-sky-100">
      <div className="mx-auto max-w-7xl py-10 lg:py-16 px-4 lg:px-6">
        <h2 className="text-4xl tracking-tight font-bold text-gray-900 text-center">
          Language Courses
        </h2>
      </div>
      <French></French>
      <English></English>
    </section>
  );
}
