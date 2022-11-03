/* eslint-disable @next/next/no-img-element */
import JoinUs from "../../../global/joinus";
import Pricing from "../../pricing/pricing";
import CourseTitle from "../title";

export default function Summer(props) {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="text-center mb-8 lg:mb-12">
        <CourseTitle>Summer Camp</CourseTitle>
        <img
          className="my-5 rounded-2xl"
          src="https://www.thelanguagecloud-edu.com/image/Lnaguage camps 5.JPG"
          alt="dummy"
        />
        <div className="mb-5 font-light text-gray-500 sm:text-xl">
          Our team has designed a fantastic camp programme that includes a
          thrilling range of adventures - from cultural activities to excursions
          in the woods, to choir, long trips, arts, sports and much more! It is
          never been so easy and enjoyable to learn a foreign language. We have
          put together some amazing projects, exercises and activities to help
          your children learn to communicate effectively and confidently in
          English/French. We believe that the whole process should be natural
          and full of memorable moments that your children will be able to carry
          with them throughout their lives! We have carefully handpicked
          authentic teachers. Your children will be supervised around the clock
          by our experienced, passionate and incredibly friendly instructors.
          What better way for a language to be taken on that in a fun-filled,
          action-packed environment, while making new friends? Come and join us!
          + Prices A link: Check out our summer camp here
        </div>
      </div>
      <Pricing></Pricing>
      <div className="py-12 flex justify-center">
        <JoinUs to="/language-camps"></JoinUs>
      </div>
    </div>
  );
}
