import JoinUs from "../../../global/joinus";
import Pricing from "../../pricing/pricing";
import CourseTitle from "../title";

export default function French(props) {
  return (
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
      <div className="text-center mb-8 lg:mb-12">
        <CourseTitle>French Language Course</CourseTitle>
        <img
          className="my-5 rounded-2xl"
          src="https://www.thelanguagecloud-edu.com/image/Online English French secondary.jpg"
          alt="dummy"
        />
        <div className="mb-5 font-light text-gray-500 sm:text-xl">
          Bonjour! Have you recently spotted your child appreciation for the
          simplicity and sweetness of life? Then we should definitely be talking
          about charming France and its lifestyle! Are you ready to help your
          child live their French dream to the fullest with the Language Cloud?
          French is the language of culture and love! We have designed a
          fantastic programme based on a range of academic, fun, and creative
          activities that will allow your child to explore the richness of
          French culture and acquire French Language in the most effective way.
          This course will not only help your child master nuances of French
          grammar, but also use this language in a variety of different
          approaches, building knowledge in a more refined and structured way.
          We will take it all the way back to basics and work our way up; to
          create a strong foundation in their minds, thoughts, and academic
          learning techniques. This will be done using academic guidelines;
          however, we will use our own unique TLC methods which will keep us
          thinking, stimulated and on our toes. All whilst enjoying ourselves as
          we learn language naturally! + A picture Prices, participants and age
          example
        </div>
      </div>
      <Pricing></Pricing>
      <div className="py-12 flex justify-center">
        <JoinUs to="/courses"></JoinUs>
      </div>
    </div>
  );
}
