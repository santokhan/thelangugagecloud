import Benefit from "./benefit/benefit";
import Camp from "./camp/camp";
import Clubs from "./clubs/clubs";
import Founder from "./founder/founder";
import Pricing from "./pricing/pricing";
import Courses from "./courses/courses";
import Gallery from "./gallary/gallary";
export default function Main(props) {
  return (
    <main>
      {/* <Benefit></Benefit> */}
      <Founder></Founder>
      <Courses></Courses>
      {/* <Clubs></Clubs> */}
      {/* <Camp></Camp> */}
      <Gallery></Gallery>
    </main>
  );
}
