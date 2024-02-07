import React from "react";
import DomainCard from "./DomainCardH";

export default function DomainH(){

    return(
        <>
        <div className="min-h-screen font-Anton flex flex-col"
          style={{backgroundImage: "url('../hackathon.png')", backgroundSize: "cover", backgroundPosition: "center", }}
        >
            <div className="h-1/2 text-center p-10">
                <p className="md:text-7xl">INNOV8 2.0</p>
                <p className="text-4xl">Quantum Leaps to Infinite Possiblities</p>
            </div>
            <div className="text-5xl text-center ">Domains</div>
            <div className="">
                <DomainCard />
                
            </div>

        </div>
        </>
    )
}