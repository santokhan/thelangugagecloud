import JoinUs from "../../global/joinus";

export default function About(props) {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
            About
          </h2>
          <div className="mb-5 font-light text-gray-500 sm:text-xl">
            The Language Cloud has designed a fantastic programme based on a
            range of academic, fun, and creative activities that allow your
            child to explore and develop the English of French language in the
            most effective way. Throughout our language courses, we will learn
            how grammar works, as well as how to use it in a variety of
            different approaches, building our knowledge in a more refined and
            structured way. We will take it all the way back to basics and work
            our way up; to create a strong foundation in our minds, thoughts,
            and academic learning techniques. This will be done using academic
            guidelines; however, we will use our own unique TLC methods which
            will keep us thinking, stimulated and on our toes. All whilst
            enjoying ourselves as we learn language naturally.
          </div>
        </div>
        <div></div>
        <div className="py-12 flex justify-center">
          <JoinUs to="/about"></JoinUs>
        </div>
      </div>
    </section>
  );
}
