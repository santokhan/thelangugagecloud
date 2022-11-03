import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Clubs from "../components/main/clubs/clubs";
import Topbar from "../components/header/topbar/topbar";
export default function Home() {
  return (
    <div>
      <Topbar />
      <main>
        <Clubs></Clubs>
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
