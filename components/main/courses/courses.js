import JoinUs from "../../global/joinus";
import Card from "./card/card";
import English from "./english/english";
import French from "./french/french";

export default function Courses(props) {
  return (
    <section className="bg-sky-100 py-10 lg:py-16 px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl tracking-tight font-bold text-gray-900 text-center">
          Language Courses
        </h2>
      </div>
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto px-4 py-12 gap-[2rem]">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
}
