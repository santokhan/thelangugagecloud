export default function BContainer(props) {
  return (
    <div className="w-full md:w-1/3 p-2">
      <div
        class={"flex flex-col items-center py-7 px-5 rounded-2xl" + props.css}
      >
        {props.children}
      </div>
    </div>
  );
}
