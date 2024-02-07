import React from "react";
import DomainCard from "./DomainCardH";

export default function DomainH(){

    return(
        <>
        <div className="min-h-screen font-Impact flex flex-col"
          style={{backgroundImage: "url('https://i.ibb.co/9wBr1rQ/14.png%22')", backgroundSize: "cover", backgroundPosition: "center", }}
        >
            <div className="h-1/2 text-center p-10">
                <p className="md:text-7xl text-6xl my-2">INNOV8 2.0</p>
                <p className="text-3xl md:text-4xl my-6">Quantum Leaps to Infinite Possiblities</p>
            </div>
            <div className="text-5xl text-center my-10">Domains</div>
            <div className="">
                <DomainCard />
                
            </div>

        </div>
        </>
    )
}