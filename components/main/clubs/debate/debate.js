/* eslint-disable @next/next/no-img-element */
import JoinUs from "../../../global/joinus";
import Pricing from "../../pricing/pricing";
import CourseTitle from "../title";
export default function Debate(props) {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="text-center mb-8 lg:mb-12">
        <CourseTitle>Debate Club</CourseTitle>
        <img
          className="my-5 rounded-2xl"
          src="https://www.thelanguagecloud-edu.com/image/one to one.jpg"
          alt="dummy"
        />
        <div className="mb-5 font-light text-gray-500 sm:text-xl">
          English/French Welcome to the ultimate artistic form of expression!
          Here we strive to discover the power of the voice! Slam poetry is
          often written on a page and later performed for an audience. It relies
          on heavy use of rhythm, improvisation, rhymes, wordplay, and slang.
          There is no limit for your art! It can be stories, poems, monologues,
          rap, and even stand-up comedy. We are here to learn AND have fun!
          Poetry slam not only helps students develop literacy skills, but also
          helps to grow social and emotional intelligence, including
          self-awareness, communication, and confidence. Here we aim to create
          and express poetry in a way that it is memorable, moving, and
          impactful. During our sessions, we will practice how to formulate what
          it is we are thinking and are trying to express. We will use a variety
          of different styles and techniques until we find the one that fits who
          we truly are and what we want to say. Are you ready to bring your best
          verse and join our club of poetry slam? We can’t wait to start the
          journey of self-discovery through the medium of wonderful poetry! +
          Prices and so on
        </div>
      </div>
      <Pricing></Pricing>
      <div className="py-12 flex justify-center">
        <JoinUs to="/language-club"></JoinUs>
      </div>
    </div>
  );
}
