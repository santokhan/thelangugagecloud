import JoinUs from "../../global/joinus";

export default function Founder(props) {
  return (
    <section className="bg-white pb-8 lg:pb-16">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center">
        <div className="w-full xl:w-2/3 px-4 lg:px-6 py-10">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              Meet the founder
            </h2>
            <div className="mb-5 font-light text-gray-500 sm:text-xl">
              Kamal is the creator of the language Cloud, an innovative language
              program whose goal is to teach languages in a fun and creative way
              to both children and adults. Trained as an international school
              teacher in Denmark, he has extensive experience, ranging from
              teaching English and French to toddlers to teaching business
              English to companies. As a world traveler and educator, Kamal has
              also worked with primary school teachers’ trainees in Africa and
              trained European volunteers for educational projects in Africa and
              Asia. Thanks to his experience as a teacher in public and in
              special Needs schools in England and Denmark, he gained valuable
              teaching skills that he passionately uses in all his educational
              works. When given the opportunity, Kamal also lectures in
              University and non-profit organizations around the themes of
              cultures, identity, and politics. Kamal’s picture from the current
              website (will provide it later) Slogans: Learn language naturally!
              Learning a language has never been easier: Our instructors are
              fully aware of what is occurring in your brain and how to take
              advantage of it. Wherever you desire to go, our brain-friendly
              language instruction methods will get you there. Your busy
              schedules, obligations, and personal life will not keep you from
              learning a new language any more. Neither will your prior mistakes
              or irritations. You can pick any language you want to learn or
              practice with us within a comfortable environment. MORE ABOUT
              STUDIO? Have a question? Email us! A form to fill out
            </div>
          </div>
          <div></div>
          <div className="flex justify-center">
            <JoinUs to="/founder"></JoinUs>
          </div>
        </div>
        <div className="w-full xl:w-1/3 flex justify-center">
          <img
            className="px-4 xl:px-0 h-full"
            src="https://www.thelanguagecloud-edu.com/image/kamal.webp"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
