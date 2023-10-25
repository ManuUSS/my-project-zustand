

export const Footer = () => {
  return (
    <footer className="w-[calc(100%-16rem)] float-right bg-white dark:bg-gray-900 px-2">
        <div className="mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <p className="inline">Manuel Ulate Sancho</p>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
