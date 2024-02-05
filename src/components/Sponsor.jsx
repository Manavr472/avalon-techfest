import React from "react";

const Sponsor = () => {
  return (
    <div>
      <div className="bg-blue-200 text-black">
        <div className=" px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold capitalize lg:text-8xl ">
            Sponsors
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3">
          <SponsorItem
                  logoSrc="/silver-logo-1.png"
                  info="Info or amount for silver sponsor 1"
                />
                <SponsorItem
                  logoSrc="/silver-logo-1.png"
                  info="Info or amount for silver sponsor 1"
                />
                <SponsorItem
                  logoSrc="/silver-logo-1.png"
                  info="Info or amount for silver sponsor 1"
                />
                <SponsorItem
                  logoSrc="/silver-logo-1.png"
                  info="Info or amount for silver sponsor 1"
                />

          </div>

            </div>
          </div>
        </div>
  );
};

// Reusable component for sponsor items
const SponsorItem = ({ logoSrc, info }) => {
  return (
    <div className="flex hover:scale-95 text-inherit items-center">
      <img
        className="object-cover w-32 h-32 rounded-full mr-4"
        src={logoSrc}
        alt="Logo"
      />
      <div className="text-xl text-inherit font-semibold ">
        {info}
      </div>
    </div>
  );
};

export default Sponsor;
