import JoinUs from "../../../global/joinus";
import Pricing from "../../pricing/pricing";
import CourseTitle from "../title";

export default function Poetry(props) {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="text-center mb-8 lg:mb-12">
        <CourseTitle>Poetry Slam Club</CourseTitle>
        <img
          className="w-full my-5 rounded-2xl"
          src="https://www.thelanguagecloud-edu.com/image/Slam poetry.png"
          alt="dummy"
        />
        <div className="mb-5 font-light text-gray-500 sm:text-xl">
          English/French Welcome to Debate Club! We believe in your child’s
          ability to stand on their ground and express their valuable thoughts!
          Here we will teach how to use words powerfully and straight to the
          point! Debate is an amazing activity for upper-intermediate to
          advanced level. It teaches useful skills for different academic
          pursuits and life in a variety of areas. Our debaters will build
          confidence speaking in public and expressing their ideas eloquently.
          During our time together, we will practice how to formulate what it is
          we are thinking and trying to say. There will be plenty of
          opportunities to grow in critical thinking, public speaking and
          teamwork, of course, in a much supportive and fun environment! What to
          expect? Children will be guided by dedicated, experienced coaches,
          will play engaging games, will debate relevant topics, and consider
          issues from more than one perspective! We will use techniques that
          incorporate natural abilities and will employ dynamic teaching methods
          to engage and interact with children to get the best out of their
          learning experience! Are you ready to prove your point? Join us! +
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
