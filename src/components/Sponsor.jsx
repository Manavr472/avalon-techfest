import React from "react";

const Sponsor = () => {
  return (
    <div>
      <div className=" bg-gradient-to-tl from-blue-300 via-violet-300 to-indigo-400 text-black">
        <div className=" px-6 py-10 mx-auto">
          <h1 className="text-3xl text-center font-semibold capitalize lg:text-8xl ">
            Sponsors
          </h1>
          <div className="grid gap-x-10 p-10 gap-y-14 grid-cols-2 md:grid-cols-3">
          <SponsorItem
                  logoSrc="../Logo/DevfolioLogo.png"
                />
                <SponsorItem
                  logoSrc="../Logo/ReplitLogo.png"
                />
                <SponsorItem
                  logoSrc="../Logo/solanaLogo.png"
                />
                <SponsorItem
                  logoSrc="../Logo/Filecoinlogo.png"
                />
                <SponsorItem
                  logoSrc="../Logo/Polygonlogo.png"
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
        className="object-cover w-56 rounded-full mr-4"
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
