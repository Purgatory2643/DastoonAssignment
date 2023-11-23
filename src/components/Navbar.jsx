import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
    return <>
        <nav class="bg-white border-gray-200 dark:bg-black">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="logo.png" class="h-16" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dashtoon</span>
                </a>
                <div class="block w-auto" id="navbar-default">
                    <ul class="font-medium flex p-2 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 dark:bg-black dark:border-gray-900">
                        <span class="block py-2 px-2 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white">Welcome to my Website!</span>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>;
}