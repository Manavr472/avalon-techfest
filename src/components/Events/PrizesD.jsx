import react from 'react';


export default function PrizesD () {
    return (
      <>
        <div
          className="h-screen "
          style={{
            backgroundImage: "url('https://i.ibb.co/rZ3Mj94/13.png%22')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" h-screen flex flex-col justify-center items-center bg-opacity-20 bg-black ">
            <img
              src="../icons/Prizes2.png"
              alt="Prize Pool"
              className='w-80'
            />
            <p>All participants get swags, Certificates and more!</p>
          </div>
        </div>
      </>
    );
  };