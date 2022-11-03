export default function DarkButtonLink(props) {
  return (
    <a
      href={props.to}
      className="text-white whitespace-nowrap capitalize bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5"
    >
      {props.name}
    </a>
  );
}
