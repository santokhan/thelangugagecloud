/* eslint-disable @next/next/no-img-element */
import DarkButtonLink from "../../global/darkbuttonlink";

export default function Gallery() {
  return (
    <section className="overflow-hidden text-gray-700 bg-white pt-[4rem]">
      <div className="text-4xl tracking-tight font-bold text-gray-900 text-center">
        Gallary
      </div>
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2 xl:w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://www.thelanguagecloud-edu.com/image/English-French-Online-oreschool-primary-course-for-kids.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 xl:w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://www.thelanguagecloud-edu.com/image/one to one.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 xl:w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://www.thelanguagecloud-edu.com/image/Language camp 3.JPG"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 xl:w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://www.thelanguagecloud-edu.com/image/Language camps 1.JPG"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 xl:w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://www.thelanguagecloud-edu.com/image/Language camps 2.JPG"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 xl:w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://www.thelanguagecloud-edu.com/image/Language camps 4.JPG"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <DarkButtonLink name="See more" to="/gallary" />
      </div>
    </section>
  );
}
