import DomainCardP from "./DomainCardP";

function DomainP() {

    return (
      <>
        <div className="min-h-screen flex flex-col"
              style={{backgroundImage: "url('https://i.ibb.co/HVh8DxC/Untitled-design-5.png')", backgroundSize: "cover", backgroundPosition: "center", }}

        >
          <div className="h-1/2 font-Rozha text-center p-2 md:p-10">
            <p className="my-10 text-5xl md:text-8xl">Project Competition</p>
          </div>
          <div className="text-5xl font-sans pt-10 text-center ">Project Domains</div>
          <div className="flex h-full items-end">
            <DomainCardP />
          </div>
        </div>
      </>
    );
  }

export default DomainP;