import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
    const containerStyle = 'p-5 bg-gradient-r from-black via-orange-950 to-black flex justify-center items-center m-2 h-[700px]'; // Tailwind CSS classes for the container
    const imgStyle = ' h-[550px] p-1 rounded-xl transition-all duration-75 hover:scale-[1.03] w-fit'; // Tailwind CSS classes for the image
    return (
        <div id="glimpse-section"
        className="flex flex-col"
        style={{
            backgroundImage: `url("../src/assets/glow-lines.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
        }}
        >
        <div className="flex text-center justify-center items-center py-8 my-2 text-2xl md:text-7xl text-white">Glimpse at Avalon 2023</div>
        <Marquee  className=" overflow-hidden" style={{ height: '600px',
    }} pauseOnHover="True" speed="250" delay="0.1" >

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/Xj29dhx/image-6.jpg" alt="image-6" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/gSYfzTf/image-16.jpg" alt="image-16" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/CsHzffb/image-30.jpg" alt="image-30" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/vJr33SQ/image-32.jpg" alt="image-32" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/9gQpmFp/image-27.jpg" alt="image-27" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/qszgW2k/image-28.jpg" alt="image-28" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/3MVfsWd/image-26.jpg" alt="image-26" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/tLnR3jT/image-25.jpg" alt="image-25" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/G7Y7VwR/image-23.jpg" alt="image-23" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/mBvNLp0/image-24.jpg" alt="image-24" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/JFG7jDs/image-20.jpg" alt="image-20" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/MBNrbbr/image-21.jpg" alt="image-21" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/LJWBqfP/image-22.jpg" alt="image-22" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/ZYMkGjH/image-17.jpg" alt="image-17" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/nrh2FNG/image-18.jpg" alt="image-18" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/PhjDNvz/image-19.jpg" alt="image-19" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/LzLgSS1/image-15.jpg" alt="image-15" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/7QTWBK4/image-14.jpg" alt="image-14" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/mvRRL92/image-13.jpg" alt="image-13" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/mRJX0Kk/image-12.jpg" alt="image-12" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/6tq8KfS/image-9.jpg" alt="image-9" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/x19vQC4/image-7.jpg" alt="image-7" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/0DSqBKj/image-1.jpg" alt="image-1" border="0"/>
    </div>

    <div className={containerStyle}>
      <img className={imgStyle} src="https://i.ibb.co/HThn5zT/image-5.jpg" alt="image-5" border="0"/>
    </div>
   </Marquee>
        </div>
    )

}