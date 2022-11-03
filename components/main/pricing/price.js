export default function Dummy(props) {
  return (
    <div className="flex justify-start items-baseline my-8">
      <span className="mr-2 text-5xl font-semibold">${props.price}</span>
      <span className="text-gray-500">/month</span>
    </div>
  );
}
