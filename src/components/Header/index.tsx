import Link from "next/link";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 w-full">
      <div className="mx-auto max-w-screen-2xl p-2 md:p-4 2xl:p-6">
        <div className="flex flex-col gap-4 md:gap-6 2xl:gap-7.5">
          <div className="flex flex-grow items-center justify-between rounded-xl border border-stroke bg-white px-7.5 py-3 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
              <button
                aria-controls="sidebar"
                onClick={(e) => {
                  e.stopPropagation();
                  props.setSidebarOpen(!props.sidebarOpen);
                }}
                className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
              >
                <span className="relative block h-5.5 w-5.5 cursor-pointer">
                  <span className="du-block absolute right-0 h-full w-full">
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && "!w-full delay-300"
                      }`}
                    ></span>
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && "delay-400 !w-full"
                      }`}
                    ></span>
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && "!w-full delay-500"
                      }`}
                    ></span>
                  </span>
                  <span className="absolute right-0 h-full w-full rotate-45">
                    <span
                      className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && "!h-0 !delay-[0]"
                      }`}
                    ></span>
                    <span
                      className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                        !props.sidebarOpen && "!h-0 !delay-200"
                      }`}
                    ></span>
                  </span>
                </span>
              </button>

              <Link className="block flex-shrink-0 lg:hidden" href="/">
                <Image
                  width={32}
                  height={32}
                  src={"/images/logo/elogo.png"}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="hidden sm:block">
              <form action="https://formbold.com/s/unique_form_id" method="POST">
                <div className="shadow-md relative search__input border-[1px] border-meta-2 border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[10px]">
                  <button className="absolute left-2 top-1/2 -translate-y-1/2">
                    <svg
                      className="fill-meta-11 hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                        fill=""
                      />
                    </svg>
                  </button>

                  <input
                    type="text"
                    placeholder="Search"
                    className="text-meta-11 w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
                  />
                </div>
              </form>
            </div>

            <div className="flex items-center gap-3 2xsm:gap-10">
              <ul className="flex items-center gap-2 2xsm:gap-5">
                <DropdownMessage />
                <DropdownNotification />
              </ul>
              <DropdownUser />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
