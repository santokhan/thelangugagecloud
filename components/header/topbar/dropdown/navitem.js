export default function DNavItem(props) {
  return (
    <div className="px-5 py-2">
      <a className="uppercase group flex flex-col items-start" href={props.to}>
        <div>{props.name}</div>
        {/* <div className="h-[2px] bg-slate-800 w-0 group-hover:w-auto"></div> */}
      </a>
    </div>
  );
}
