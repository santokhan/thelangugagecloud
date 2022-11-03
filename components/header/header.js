import Banner from "./banner/banner";
import Topbar from "./topbar/topbar";

export default function Header(props) {
  return (
    <header>
      <Topbar />
      <Banner />
    </header>
  );
}
