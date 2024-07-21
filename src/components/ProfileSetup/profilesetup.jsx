
const ProfileSetup = () => {

  return (
    <div className="justify-center items-center ml-[500px] mt-10 mb-[100px]">
      <div className="max-w-md w-full space-y-8 p-10 bg-slate-100 rounded-xl shadow-lg z-10 dark:bg-slate-800">
        <div className="grid gap-8 grid-cols-1">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto dark:text-white">Profile Setup</h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div className="mt-5">
              <form>
                <div className="md:space-y-2 mb-3">
                  <label className="text-xs font-semibold text-gray-600 py-2 dark:text-gray-300">
                    User<abbr className="hidden" title="required">*</abbr>
                  </label>
                  <div className="flex items-center py-6">
                    <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                    </div>
                    <label className="cursor-pointer">
                      <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-blue-400 hover:bg-blue-500 hover:shadow-lg">
                        Upload
                      </span>
                      <input type="file" className="hidden"/>
                    </label>
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                      First Name <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="eg.John"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 dark:bg-gray-700 dark:text-white"
                      required
                      type="text"
                      name="companyName"
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                      Second Name <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="eg.Doe"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 dark:bg-gray-700 dark:text-white"
                      required
                      type="name"
                      name="companyMail"
                    />
                  </div>
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">LinkdIn Profile URL</label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center text-xl rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <input
                      type="url"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow dark:bg-gray-700 dark:text-white"
                      placeholder="https://"
                      name="companyWebsite"
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">GitHub Profile URL</label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center text-xl rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <input
                      type="url"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow dark:bg-gray-700 dark:text-white"
                      placeholder="https://"
                      name="companyWebsite"
                    />
                  </div>
                  </div>
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">Portfolio</label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center text-xl rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <input
                      type="url"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow dark:bg-gray-700 dark:text-white"
                      placeholder="https://"
                      name="companyWebsite"
                    />
                  </div>
                  </div>
                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                      Role<abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
                      required
                      name="location"
                    >
                      <option value="">Student</option>
                      <option value="">Mentor</option>

                    </select>
                  </div> 
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                      Works For<abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full dark:bg-gray-700 dark:text-white"
                      required
                      name="location"
                    >
                      <option value="">Frontend</option>
                      <option value="">Backend </option>
                      <option value="">Mern Dev</option>
                      <option value="">Android</option>
                      <option value="">ML/AI</option>
                    </select>
                  </div>
                </div>
                <div className="text-xs">
                <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">
                      Upload Your Resume<abbr title="required">*</abbr>
                    </label>
                </div>
                <div className="flex w-full text-xs">    
                  <input
                  className="border ml-2 w-[230px]  bg-white"
                  type="file"
                   />
                <button
                    type="submit"
                    className="w-[80px] mb-2 ml-3 md:mb-0 bg-blue-400 px-1 py-1 text-xs font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-blue-500"
                  >
                    Upload
                  </button>
                  </div>
               </div>
                <div className="flex-auto w-full mt-3 mb-1 text-xs space-y-2">
                  <label className="font-semibold text-gray-600 py-2 dark:text-gray-300">Your Bio</label>
                  <textarea
                    required
                    name="description"
                    className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your description"
                  ></textarea>
                </div>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button
                    type="submit"
                    className="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-blue-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;