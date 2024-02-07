import DomainCardP from "./DomainCardP";

function DomainP() {

    return (
      <>
        <div className="min-h-screen flex flex-col"
              style={{backgroundImage: "url('../Project.png')", backgroundSize: "cover", backgroundPosition: "center", }}

        >
          <div className="h-1/2 font-SquadaOne text-center p-10">
            <p className="mb-10 md:text-7xl">Project Competition</p>
            <p className="text-4xl">Quantum Leaps to Infinite Possiblities</p>
          </div>
          <div className="text-5xl font-sans text-center ">Project Domains</div>
          <div className="">
            <DomainCardP />
          </div>
        </div>
      </>
    );
  }

export default DomainP;