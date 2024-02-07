import React from "react";

const Sponsor = () => {
  return (
    <>
      <div className=" min-h-screen justify-around items- flex flex-col bg-gradient-to-bl from-purple-900 via-blue-900 to-black text-white">
          <h1 className="text-3xl text-center font-SquadaOne font-semibold capitalize lg:text-8xl ">
            Sponsors
          </h1>
        <div className="flex justify-center w-full items-center">
          <div className="grid  gap-10 md:gap-20 place-items-center grid-cols-2 md:grid-cols-3">
          <SponsorItem
                  logoSrc="../Logo/DevfolioLogo.png" info="DEVFOLIO LOGO"
                />
                <SponsorItem
                  logoSrc="../Logo/PolygonLogo.png" info="POLYGON LOGO"
                />
                <SponsorItem
                  logoSrc="../Logo/ethindiaLogo.png" info="ETHINDIA LOGO"
                />
                <SponsorItem
                  logoSrc="../Logo/solanaLogo.png" info="SOLANA LOGO"
                />
                <SponsorItem
                  logoSrc="../Logo/Filecoinlogo.png" info="FILECOIN LOGO"
                />
                <SponsorItem
                  logoSrc="../Logo/ReplitLogo.png" info="REPLIT LOGO"
                />
                <SponsorItem
                  logoSrc="../Logo/VerbWireLogo.png" info="VERBWIRE LOGO"
                />
                <SponsorItem
                  logoSrc="../Logo/DigitalOceanLogo.png" info="DIGITAL OCEAN LOGO"
                />


          </div>

            </div>
          </div>
        </>
  );
};

// Reusable component for sponsor items
const SponsorItem = ({ logoSrc, info }) => {
  return (
    <div className="flex hover:scale-95 text-inherit items-center">
      <img
        className="object-cover w-40 md:w-64  mr-4"
        src={logoSrc}
        alt={info}
      />
    </div>
  );
};

export default Sponsor;
