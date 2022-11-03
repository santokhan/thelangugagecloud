export default function FNavItem(props) {
  return (
    <li className="mb-4">
      <a href={props.to} className="hover:underline">
        {props.children}
      </a>
    </li>
  );
}
