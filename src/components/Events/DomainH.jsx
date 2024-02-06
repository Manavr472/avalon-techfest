import React from "react";
import DomainCard from "./DomainCardH";

export default function DomainH(){

    return(
        <>
        <div className="min-h-screen bg-blue-900 flex flex-col">
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