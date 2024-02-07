import FaqItem from './FaqCard';

const FaqSection = () => {
  return (
    <div className="max-w-full h-screen mx-2 sm:mx-8 ">
      <div className="bg-black text-white p-5 sm:p-10 shadow-sm ">
        <div className="">
          <h1 className="font-extrabold text-gray-100 text-4xl mb-3 ml-5">FAQ's</h1>
          <div className="h-1 bg-cyan-500 rounded-full w-1/6"></div>
        </div>
        <div className="mt-14 ml-4 sm:ml-24">
          <FaqItem
            question="How can I for my appointment?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, tenetur nemo corrupti porro unde consectetur officia. Eos, qui quia, voluptates enim, debitis consequatur quis repellat nisi hic cumque autem molestiae harum nulla rem ducimus laborum ipsam sunt quasi omnis. Architecto?"
          />
          <FaqItem
            question="What can I expect at my first consultation?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, tenetur nemo corrupti porro unde consectetur officia. Eos, qui quia, voluptates enim, debitis consequatur quis repellat nisi hic cumque autem molestiae harum nulla rem ducimus laborum ipsam sunt quasi omnis. Architecto?"
          />
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
