export default function CourseTitle(props) {
  return (
    <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-900">
      {props.children}
    </h2>
  );
}
