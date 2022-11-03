export default function NavItem(props) {
  return (
    <div className="px-5">
      <a className="uppercase group" href={props.to}>
        <div>{props.name}</div>
        <div className="h-[2px] bg-slate-800 w-0 group-hover:w-full rounded"></div>
      </a>
    </div>
  );
}
