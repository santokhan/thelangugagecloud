import JoinUs from "../../../global/joinus";
import Pricing from "../../pricing/pricing";
import CourseTitle from "../title";
export default function ActItOut(props) {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="text-center mb-8 lg:mb-12">
        <CourseTitle>Act It Out</CourseTitle>
        <img
          className="w-full my-5 rounded-2xl"
          src="https://www.thelanguagecloud-edu.com/image/Language camps 1.JPG"
          alt="dummy"
        />
        <div className="mb-5 font-light text-gray-500 sm:text-xl">
          English/French Act it out! Are you looking for a unique after-school
          or summer program for your children? Welcome to Act It Out club! Now
          you can join our most dramatic souls as we explore what it means to
          truly express ourselves. Here we use engaging games and exciting role
          play to boost your children’s confidence, help them develop social
          skills, leadership, articulate communication and learn how to work
          effectively in a team! We want to warn you! You’ll see a DRAMATIC
          difference in your child! We love authenticity and boundless
          creativity! All the space is for your children to explore their
          imagination, grow their performance skills, make new friends, and of
          course, expand their knowledge of the English/French language! We
          cannot wait to have your children add their sparkle to our show! “Over
          the course of the term, we will work together to create something of a
          drama masterpiece, the process will help us learn how to focus,
          prepare as well develop our confidence as we naturally find ourselves
          performing in front of our peers, friends and family on stage without
          a second thought.” + Prices and so on
        </div>
      </div>
      <Pricing></Pricing>
      <div className="py-12 flex justify-center">
        <JoinUs to="/pricing"></JoinUs>
      </div>
    </div>
  );
}
