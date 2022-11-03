export default function Subscribe() {
  return (
    <form method="post" id="revue-form" name="revue-form">
      <div className="flex flex-col gap-3 mb-3">
        <div className="relative w-full mr-3 revue-form-group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            className="w-[300px] revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
            placeholder="Your email address..."
            type="email"
            required
          />
        </div>
        <div className="revue-form-actions">
          <button
            type="submit"
            className="cursor-pointer text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
}
