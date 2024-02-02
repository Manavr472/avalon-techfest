import React from "react";

const Sponsor = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold capitalize lg:text-8xl text-white">
            Sponsors
          </h1>

          <div className="flex flex-col gap-8 mt-8 md:mt-16">
            {/* Platinum Sponsors */}
            <div className="border border-slate-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-slate-200 mb-4">
                Platinum Sponsors
              </h2>
              <div className="flex text-slate-200 flex-col gap-4">
                <SponsorItem
                  logoSrc="/platinum-logo-1.png"
                  info="Info or amount for platinum sponsor 1"
                />
                <SponsorItem
                  logoSrc="/platinum-logo-2.png"
                  info="Info or amount for platinum sponsor 2"
                />
                <SponsorItem
                  logoSrc="/platinum-logo-3.png"
                  info="Info or amount for platinum sponsor 3"
                />
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="border border-yellow-600 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
                Gold Sponsors
              </h2>
              <div className="flex text-yellow-600 flex-col gap-4">
                <SponsorItem
                  logoSrc="/gold-logo-1.png"
                  info="Info or amount for gold sponsor 1"
                />
                <SponsorItem
                  logoSrc="/gold-logo-2.png"
                  info="Info or amount for gold sponsor 2"
                />
                <SponsorItem
                  logoSrc="/gold-logo-3.png"
                  info="Info or amount for gold sponsor 3"
                />
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="border border-gray-400 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">
                Silver Sponsors
              </h2>
              <div className="flex flex-col text-gray-400 gap-4">
                <SponsorItem
                  logoSrc="/silver-logo-1.png"
                  info="Info or amount for silver sponsor 1"
                />
                <SponsorItem
                  logoSrc="/silver-logo-2.png"
                  info="Info or amount for silver sponsor 2"
                />
                <SponsorItem
                  logoSrc="/silver-logo-3.png"
                  info="Info or amount for silver sponsor 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for sponsor items
const SponsorItem = ({ logoSrc, info }) => {
  return (
    <div className="flex hover:scale-95 text-inherit items-center">s
      <img
        className="object-cover w-32 h-32 rounded-full mr-4"
        src={logoSrc}
        alt="Sponsor Logo"
      />
      <div className="text-xl text-inherit font-semibold ">
        {info}
      </div>
    </div>
  );
};

export default Sponsor;
