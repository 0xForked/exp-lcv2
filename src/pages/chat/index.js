import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openUserFilter, setOpenUserFilter] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="flex flex-row">
              <div className="border-2 border-gray-200 rounded-l-lg w-1/3 h-[calc(80vh)] p-4">
                {/* TITLE */}
                <div className="flex flex-row items-center">
                  <h4 className="font-bold">Chat</h4>

                  <div className="ml-auto">
                    <button
                      className="flex items-center font-medium text-gray-500 text-sm"
                      onClick={() => setOpenUserFilter(!openUserFilter)}>
                      Active
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {openUserFilter && (
                    <div className="dropdown inline-block relative">
                      <ul className="dropdown-menu absolute right-0 text-gray-700 pt-6">
                        <li className="">
                          <a
                            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap flex items-center"
                            href="#">
                            Active
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-2 text-green-700"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="bg-gray-100 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap"
                            href="#">
                            Queue
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap"
                            href="#">
                            Archive
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/*  ! TODO: FILTER (ACTIVE, QUEUE, ARCHIVE) & SEARCH */}

                <div className="flex flex-row mt-4 p-2 border-2 rounded-lg border-blue-200 bg-blue-50">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#93ECE8" />
                    <path
                      d="M24 27C27.3137 27 30 24.3137 30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21C18 24.3137 20.6863 27 24 27Z"
                      stroke="#21B6AE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M14.9062 32.2499C15.8278 30.6534 17.1533 29.3277 18.7496 28.406C20.3459 27.4843 22.1567 26.999 24 26.999C25.8433 26.999 27.6541 27.4843 29.2504 28.406C30.8467 29.3277 32.1722 30.6534 33.0938 32.2499"
                      stroke="#21B6AE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col px-3">
                    <p className="font-semibold text-xs">Laurence</p>
                    <p className="text-xs text-gray-500">I want to discuss with the doct..</p>
                  </div>
                  <p className="text-xs text-gray-400">10:10</p>
                </div>

                <div className="flex flex-row mt-2 p-2 border-2 rounded-lg border-gray-200">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#93ECE8" />
                    <path
                      d="M24 27C27.3137 27 30 24.3137 30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21C18 24.3137 20.6863 27 24 27Z"
                      stroke="#21B6AE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M14.9062 32.2499C15.8278 30.6534 17.1533 29.3277 18.7496 28.406C20.3459 27.4843 22.1567 26.999 24 26.999C25.8433 26.999 27.6541 27.4843 29.2504 28.406C30.8467 29.3277 32.1722 30.6534 33.0938 32.2499"
                      stroke="#21B6AE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col px-3">
                    <p className="font-semibold text-xs">Laurence</p>
                    <p className="text-xs text-gray-500">I want to discuss with the doct..</p>
                  </div>
                  <p className="text-xs text-gray-400">10:10</p>
                </div>
              </div>
              <div className="border-2 border-gray-200 bg-gray-50 rounded-r-lg w-full h-[calc(80vh)] p-6 flex flex-col">
                {/* CURRENT SELECTED CUSTOMER CHAT */}
                <div className="flex flex-row items-center h-16">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#93ECE8" />
                    <path
                      d="M24 27C27.3137 27 30 24.3137 30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21C18 24.3137 20.6863 27 24 27Z"
                      stroke="#21B6AE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M14.9062 32.2499C15.8278 30.6534 17.1533 29.3277 18.7496 28.406C20.3459 27.4843 22.1567 26.999 24 26.999C25.8433 26.999 27.6541 27.4843 29.2504 28.406C30.8467 29.3277 32.1722 30.6534 33.0938 32.2499"
                      stroke="#21B6AE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col px-3">
                    <p className="font-semibold text-xs">Laurence</p>
                    <p className="text-xs text-gray-500">Last online 10 minutes ago</p>
                  </div>
                  <div className="ml-auto">
                    <svg
                      width="6"
                      height="16"
                      viewBox="0 0 6 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3ZM6 14C6 15.6569 4.65685 17 3 17C1.34315 17 0 15.6569 0 14C0 12.3431 1.34315 11 3 11C4.65685 11 6 12.3431 6 14ZM3 28C4.65685 28 6 26.6569 6 25C6 23.3431 4.65685 22 3 22C1.34315 22 0 23.3431 0 25C0 26.6569 1.34315 28 3 28Z"
                        fill="#BEC4C8"
                      />
                    </svg>
                  </div>
                </div>

                {/* CURRENT CONVERSATION MESSAGES */}
                <div className="h-full my-4 max-h-screen overflow-y-auto">
                  <div className="bg-white border-2 border-gray-200 rounded-r-lg rounded-bl-lg w-fit p-2 text-sm">
                    Hello World
                  </div>

                  <div className="bg-cyan-400 mt-2 border-2 border-gray-200 rounded-l-lg rounded-br-lg w-fit p-2 text-sm ml-auto">
                    From Chat Screen
                  </div>
                </div>

                {/* FORM */}
                <div className="h-16">
                  <form>
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                      Search
                    </label>
                    <div className="relative">
                      <button
                        type="submit"
                        className="text-white absolute left-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <input
                        type="search"
                        id="default-search"
                        className="block p-4 pl-14 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write a message . . ."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 rotate-90"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Chat;
