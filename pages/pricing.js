import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Topbar from "../components/header/topbar/topbar";

export default function Pricing(
  props = {
    starter: 29,
    company: 99,
    enterprise: 499,
  }
) {
  return (
    <div className="bg-white">
      <Topbar></Topbar>
      <main className="py-[8rem]">
        <div className="overflow-x-auto relative shadow-m sm:rounded-lg mx-auto max-w-7xl">
          <table className="w-full text-sm text-gray-700 text-center border">
            <thead className="text-sm text-gray-700 uppercase bg-sky-50 text-center font-semibold">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Course Name
                </th>
                <th scope="col" colspan="3" className="py-3 px-6">
                  Number of sessions
                </th>
                <th scope="col" className="py-3 px-6">
                  Available Teaching Formats
                </th>
                <th scope="col" colspan="3" className="py-3 px-6 bg-red-400">
                  Price/Per Session
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center font-medium">
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  Individual online
                </td>
                <td className="py-4 px-6 border">Online</td>
                <td className="py-4 px-6 border">Hybrid</td>
              </tr>
              <tr className="bg-sky-50 border" role="row-1">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  ENGLISH COURSES
                  <br />
                  (Preschool-Primary school children)
                  <br />
                  Levels: A1-A2, B1-B2.
                </th>
                <td className="py-4 px-6 border">12 sessions (45 min)</td>
                <td className="py-4 px-6 border">24 sessions (45 min)</td>
                <td className="py-4 px-6 border">24 sessions (45 min)</td>
                <td className="py-4 px-6 border">
                  <div className="whitespace-nowrap">- Individual online</div>
                  <div>- Online</div>
                  <div>- Hybrid</div>
                </td>
                <td className="py-4 px-6 border">
                  <b>30 EUR</b> / session
                </td>
                <td className="py-4 px-6 border">
                  <b>120 EUR</b> (12 sessions)
                  <b>230 EUR</b> (24 sessions)
                  <b>350 EUR</b> (36 sessions)
                </td>
                <td className="py-4 px-6 border">
                  <b>155 EUR</b> (12 sessions)
                  <b>300 EUR</b> (24 sessions)
                  <b>455 EUR</b> (36 sessions)
                </td>
              </tr>
              <tr className="bg-white border" role="row-2">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  FRENCH COURSES
                  <br />
                  (Preschool-Primary school children)
                  <br />
                  Levels: A1-A2, B1-B2.
                </th>
                <td className="py-4 px-6 border">12 sessions (90 min)</td>
                <td className="py-4 px-6 border">24 sessions (90 min)</td>
                <td className="py-4 px-6 border">24 sessions (90 min)</td>
                <td className="py-4 px-6 border">
                  <div className="whitespace-nowrap">- Individual online</div>
                  <div>- Online</div>
                  <div>- Hybrid</div>
                </td>
                <td className="py-4 px-6 border">
                  <b>30 EUR</b> / session
                </td>
                <td className="py-4 px-6 border">
                  <b>240 EUR</b> (12 sessions <b>470 EUR</b> (24 sessions){" "}
                  <b>720 EUR</b> (36 sessions)
                </td>
                <td className="py-4 px-6 border">
                  <b>275 EUR</b> (12 sessions)<b>540 EUR</b> (24 sessions)
                  <b>815 EUR</b> (36 sessions)
                </td>
              </tr>
              <tr className="bg-sky-50 border" role="row-3">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  FRENCH COURSES
                  <br />
                  (Preschool-Primary school children)
                  <br />
                  Levels: A1-A2, B1-B2.
                </th>
                <td className="py-4 px-6 border">12 sessions (45 min)</td>
                <td className="py-4 px-6 border">24 sessions (45 min)</td>
                <td className="py-4 px-6 border">24 sessions (45 min)</td>
                <td className="py-4 px-6 border">
                  <div className="whitespace-nowrap">- Individual online</div>
                  <div>- Online</div>
                  <div>- Hybrid</div>
                </td>
                <td className="py-4 px-6 border">
                  <b>30 EUR</b> / session
                </td>
                <td className="py-4 px-6 border">
                  <b>120 EUR</b> (12 sessions) 2<b>30 EUR</b> (24 sessions) 350
                  EUR (36 sessions)
                </td>
                <td className="py-4 px-6 border">
                  <b>155 EUR</b> (12 sessions)<b>300 EUR</b>(24 sessions){" "}
                  <b>455 EUR</b> (36 sessions)
                </td>
              </tr>

              <tr className="bg-white border">
                <td colspan="8" className="text-center py-4">
                  Activities taking place at the Language Cloud studio (Kražių
                  g. 25, Vilnius)
                </td>
              </tr>

              <tr className="bg-sky-50 border">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Sunday International Camp (Mixed levels)
                </th>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">
                  50 EUR (full day) 35 EUR (half day)
                </td>
              </tr>
              <tr className="bg-white border">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Slam poetry club (Intermediate - Advanced)
                </th>
                <td className="py-4 px-6 border">12 sessions (90 min)</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">288 EUR /12 sessions</td>
              </tr>
              <tr className="bg-sky-50 border">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Debate club (Intermediate - Advanced)
                </th>
                <td className="py-4 px-6 border">12 sessions (90 min)</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">288 EUR /12 sessions</td>
              </tr>
              <tr className="bg-white border">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Act it Out! (Intermediate - Advanced)
                </th>
                <td className="py-4 px-6 border">12 sessions (90 min)</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">-</td>
                <td className="py-4 px-6 border">288 EUR /12 sessions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
