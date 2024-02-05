import React from "react";
import DomainCard from "./DomainCard";

export default function DomainH(){

    return(
        <>
        <div className="min-h-screen bg-blue-500 flex flex-col">
            <div className="h-1/2 text-center p-10">
                <p className="text-7xl">INNOV8 2.0</p>
            </div>
            <div className=""></div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <DomainCard/>
                <DomainCard/>
                <DomainCard/>
                <DomainCard/>

            </div>
        </div>
        </>
    )
}