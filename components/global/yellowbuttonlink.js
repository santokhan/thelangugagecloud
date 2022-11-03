export default function YellowButtonLink(props) {
  return (
    <a
      href={props.to}
      className="focus:outline-none text-gray-900 bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5"
    >
      {props.name}
    </a>
  );
}
