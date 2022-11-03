export default function GetStarted(props) {
  return (
    <div className="flex mb-8">
      <a
        href={props.to || "#"}
        className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg px-5 py-3 text-center"
      >
        Get started
      </a>
    </div>
  );
}
