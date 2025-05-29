import { PlusIcon, HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

export const NavBar: React.FC = () => {
    return (
        <header className="bg-background transition-colors">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex flex-1 items-center gap-x-3">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Helping Hands</span>
                        <Image
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=rose&shade=600"
                            alt="Helping Hands logo"
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                            priority
                        />
                    </a>
                    <h1 className="text-2xl font-semibold text-primary">
                        Helping Hands
                    </h1>
                </div>

                <div className="flex items-center gap-x-6">
                                        <a
                        href="#"
                        className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                    >
                        <HomeIcon className="h-6 w-6" />
                    </a>
                    <button
                        className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                    >
                        
                            <PlusIcon className="h-6 w-6" />
                    </button>
                    <ThemeSwitcher />
                
                </div>
            </nav>
        </header>
    );
};
