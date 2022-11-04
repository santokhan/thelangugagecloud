import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Courses from "../components/main/courses/courses";
import Topbar from "../components/header/topbar/topbar";
import English from "../components/main/courses/english/english";
export default function Home() {
  return (
    <div>
      <Topbar></Topbar>
      <main>
        <English></English>
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
