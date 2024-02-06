import LazyLoad from "react-lazyload";

export default function MarqueeComponent() {
  const containerStyle =
    "p-5 bg-gradient-r from-black via-orange-950 to-black flex justify-center items-center m-2 h-[700px]"; // Tailwind CSS classes for the container
  const imgStyle =
    " h-[550px] p-1 rounded-xl transition-all duration-75 hover:scale-[1.03] w-fit"; // Tailwind CSS classes for the image

  const imageSources = [
    "https://i.ibb.co/Xj29dhx/image-6.jpg",
    "https://i.ibb.co/gSYfzTf/image-16.jpg",
    "https://i.ibb.co/CsHzffb/image-30.jpg",
    
    // Add more image sources here
  ];

  return (
    <div
      id="glimpse-section"
      className="flex flex-col"
      style={{
        backgroundImage: `url("../src/assets/glow-lines.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex text-center justify-center items-center p-1 text-2xl md:text-7xl text-white">
        Glimpse at Avalon 2023
      </div>
      <Marquee className="overflow-hidden" style={{ height: "600px" }} pauseOnHover="True" speed="250" delay="0.1">
        {imageSources.map((src, index) => (
          <LazyLoad height={600} once key={index}>
            <div className={containerStyle}>
              <img className={imgStyle} src={src} alt={`image-${index}`} border="0" />
            </div>
          </LazyLoad>
        ))}
      </Marquee>
    </div>
  );
}