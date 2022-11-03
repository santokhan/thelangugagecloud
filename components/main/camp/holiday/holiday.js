/* eslint-disable @next/next/no-img-element */
import JoinUs from "../../../global/joinus";
import Pricing from "../../pricing/pricing";
import CourseTitle from "../title";

export default function Holiday(props) {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="text-center mb-8 lg:mb-12">
        <CourseTitle>Holiday Camp</CourseTitle>
        <img
          className="my-5 rounded-2xl"
          src="https://www.thelanguagecloud-edu.com/image/Language camps 1.JPG"
          alt="dummy"
        />
        <div className="mb-5 font-light text-gray-500 sm:text-xl">
          <div>
            Are you constantly wondering how to create a unique and holiday for
            your children?
          </div>
          Are you trying to avoid long periods of screen time or lying on the
          couch? We have planned incredible language camps full of adventure and
          fun for your children! Here we will not only create the warmest
          memories and build friendships, but also develop and challenge
          ourselves while learning all the secrets of mastering the
          English/French language. We have designed an incredible programme to
          help your child discover and enhance their English/French language
          skills in the most efficient way. Our activities are built around a
          variety of educational, entertaining, and creative activities that
          will leave your child with confidence and efficient communication.
          Let’s celebrate holiday with the most + prices A link: Check out our
          Autumn Camp here
        </div>
      </div>
      <Pricing></Pricing>
      <div className="py-12 flex justify-center">
        <JoinUs to="/language-camps"></JoinUs>
      </div>
    </div>
  );
}
