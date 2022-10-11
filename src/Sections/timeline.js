import React from "react";

export default function timeline() {
  return (
    <div className="flex flex-col w-full px-10 lg:px-20 bg-black justify-center py-6 lg:py-12">
      <h1 class="text-5xl font-normal leading-normal mt-0 mb-2 text-center text-white">
        Timeline
      </h1>
      <div className="w-full mx-auto lg:max-w-4xl">
        <div className="relative">
          <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
          <div className="space-y-12 lg:space-y-8 text-center">

            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pr-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-cyan-200">
                      <p className="font-extrabold">17 Dec 2022</p>
                      <p>Registration Commences</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-sky-300 border-2 border-sky-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">1</span>
                </div>
              </div>
            </div>


            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-end w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-cyan-200">
                      <p className="font-extrabold">30 Jan 2023</p>
                      <p>Registration Closes</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-sky-300 border-2 border-sky-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">2</span>
                </div>
              </div>
            </div>


            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pr-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-cyan-200">
                      <p className="font-extrabold">10 Feb 2023</p>
                      <p>Proposal Submission</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-sky-300 border-2 border-sky-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">3</span>
                </div>
              </div>
            </div>


            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-end w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-cyan-200">
                      <p className="font-extrabold">12 Feb 2023</p>
                      <p>Proposal Shortlisting</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-sky-300 border-2 border-sky-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">4</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pr-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-cyan-200">
                      <p className="font-extrabold">19 Feb 2023</p>
                      <p>Hack Day Electrothon 5.0</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-sky-300 border-2 border-sky-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">5</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
