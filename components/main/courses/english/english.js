import JoinUs from "../../../global/joinus";
import Pricing from "../../pricing/pricing";
import CourseTitle from "../title";
export default function English(props) {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="text-center mb-8 lg:mb-12">
        <CourseTitle>English Language Course</CourseTitle>
        <img
          className="my-5 rounded-2xl"
          src="https://www.thelanguagecloud-edu.com/image/Online English 2ndary.jpg"
          alt="dummy"
        />
        <div className="mb-5 font-light text-gray-500 sm:text-xl">
          Hello and welcome! Are you looking for ways to help your child
          rediscover their passion for English? Or perhaps give them the
          opportunity to go beyond what their current educational environment
          allows? You are in the right place! English is the language of
          science, aviation, computers, diplomacy and tourism. Last but not
          least, it is the language of international communication and therefore
          a way of a better future! We believe your child deserves every chance
          in life! We have created an incredible programme to help your child
          discover and enhance their English language skills in the most
          efficient way. Our curriculum is built around a variety of
          educational, entertaining, and creative activities. This course will
          not only teach how to master nuances of English grammar, but also use
          this language in a variety of different approaches, building knowledge
          in a more refined and structured way. We will take it all the way back
          to basics and work our way up; to lay a solid basis for our minds,
          thoughts, and academic learning strategies. While following academic
          standards, we will employ our own special TLC techniques that will
          keep us on our toes and thinking. All whilst enjoying ourselves as we
          learn language naturally! + a picture + prices
        </div>
      </div>
      <Pricing></Pricing>
      <div className="py-12 flex justify-center">
        <JoinUs to="/courses"></JoinUs>
      </div>
    </div>
  );
}
