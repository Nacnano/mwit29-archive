function Footer() {
  return (
    <footer className="bg-white rounded-t-lg shadow px-6 py-5">
      <div className="flex justify-center">
        <ul className="flex text-lg text-gray-500">
          <li>
            <a href="NOTED" className="mx-4 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="NOTED" className="mx-4 hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="NOTED" className="mx-4 hover:underline">
              Code
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-2 w-80 rounded border-gray-300 mx-auto" />
      <span className="block text-md text-gray-500 text-center">
        Designed and Developed by{" "}
        <a href="NOTED" className="hover:underline text-blue-500">
          Nacnano
        </a>
      </span>
    </footer>
  );
}

export default Footer;
