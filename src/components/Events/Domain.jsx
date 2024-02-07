import React from "react";
import DomainCard from "./DomainCardH";
import DomainCardP from "./DomainCardH";

function DomainH(){

    return(
        <>
        <div className="min-h-screen  flex flex-col"
              style={{backgroundImage: "url('../hackathon.png')", backgroundSize: "contain", backgroundPosition: "start", }}

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


d80000
00128c


function DomainP() {

    return (
      <>
        <div className="min-h-screen flex flex-col"
              style={{backgroundImage: "url('../Project.png')", backgroundSize: "cover", backgroundPosition: "center", }}

        >
          <div className="h-1/2 text-center p-10">
            <p className="md:text-7xl">INNOV8 2.0</p>
            <p className="text-4xl">Quantum Leaps to Infinite Possiblities</p>
          </div>
          <div className="text-5xl text-center ">Project</div>
          <div className="">
            <DomainCardP />
          </div>
        </div>
      </>
    );
  }

  function DomainD() {

    return (
      <>
        <div className="min-h-screen flex flex-col"
              style={{backgroundImage: "url('../Project.png')", backgroundSize: "cover", backgroundPosition: "center", }}

        >
          <div className="h-1/2 text-center p-10">
            <p className="md:text-7xl">INNOV8 2.0</p>
            <p className="text-4xl">Quantum Leaps to Infinite Possiblities</p>
          </div>
          <div className="text-5xl text-center ">Project Competition</div>
          
        </div>
      </>
    );
  }  

export {DomainH, DomainP, DomainD};