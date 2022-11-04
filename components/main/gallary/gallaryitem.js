/* eslint-disable @next/next/no-img-element */
export default function GallaryItem(props) {
  return (
    <div className="flex flex-wrap w-1/3">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-lg"
          src={props.src}
        />
      </div>
    </div>
  );
}
