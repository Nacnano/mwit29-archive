function Footer() {
  return (
    <footer className="sticky bg-white rounded-t-lg shadow px-6 py-3 w-full">
      <div className="flex justify-center">
        <ul className="flex text-lg text-gray-500">
          <li>
            <a href="NOTED" className="mx-4 block rounded hover:text-blue-700">
              About
            </a>
          </li>
          <li>
            <a href="NOTED" className="mx-4 block rounded hover:text-blue-700">
              Contact
            </a>
          </li>
          <li>
            <a href="NOTED" className="mx-4 block rounded hover:text-blue-700">
              Code
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-2 w-80 rounded border-gray-300 mx-auto" />
      <span className="block text-md text-gray-500 text-center">
        Designed and Developed by{' '}
        <a href="NOTED" className="rounded hover:text-blue-900 text-blue-500">
          Nacnano
        </a>
      </span>
    </footer>
  )
}

export default Footer
