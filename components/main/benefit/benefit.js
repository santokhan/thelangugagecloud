import DarkButtonLink from "../../global/darkbuttonlink";
import TitleAndDesctiption from "./titleanddesctiption";

export default function Benefit(props) {
  return (
    <div className="py-10 xl:py-[6rem] bg-white">
      <div className="text-4xl font-bold text-center mb-10">Benefit</div>
      <div className="flex flex-wrap justify-center mx-auto max-w-7xl items-center px-4">
        <div className="w-full md:w-1/3 p-2">
          <div className="flex flex-col items-center bg-[#CBFCFF] py-7 px-5 rounded-2xl">
            <TitleAndDesctiption
              title="Exciting and empowering program"
              des="We created a variety of programs that are not only highly academic,
            but also fun, social, culturally rich and greatly inspiring!"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex flex-col items-center bg-[#FFDEAD]  py-7 px-5 rounded-2xl">
            <TitleAndDesctiption
              title="Competent and caring teachers"
              des="We carefully handpicked teachers, not only for their proficiency in
            English, but also for their unique talents in painting, singing,
            writing, acting and public speaking."
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex flex-col items-center bg-[#CDFFDB] py-7 px-5 rounded-2xl">
            <TitleAndDesctiption
              title="Relevant and flexible"
              des="Tailored made course according to the needs of our students"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
