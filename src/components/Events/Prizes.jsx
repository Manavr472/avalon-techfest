import React from "react";

const Prizes = () => {
    return (
        <>
            <div className="h-screen "
            style={{backgroundImage: "url('../Prize.jpg')", backgroundSize: "cover", backgroundPosition: "center", }}
            >
                <div className=" h-screen flex flex-col justify-center items-center bg-opacity-20 bg-black ">
                <img src="prize-pool-image.jpg" alt="Prize Pool" />
                <h2 className="text-center text-5xl">1 Lac+!!!</h2>
                <p>All participants get swags and more!</p>
                </div>
            </div>
        </>
    )
}

export default Prizes;