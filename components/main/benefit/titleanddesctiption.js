export default function TitleAndDescrition(props) {
  return (
    <div className="text-center flex flex-col gap-2 ">
      <div className="font-semibold text-xl">{props.title}</div>
      <div className="text-[#555]">{props.des}</div>
    </div>
  );
}
