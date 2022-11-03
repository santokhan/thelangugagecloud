import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Camp from "../components/main/camp/camp";
import Topbar from "../components/header/topbar/topbar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <main>
        <Camp></Camp>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
