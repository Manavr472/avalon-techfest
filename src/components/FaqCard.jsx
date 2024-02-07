import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition">
      <div
        className="accordion-header cursor-pointer transition-all duration-200   flex space-x-5 px-5 items-center h-16"
        onClick={toggleAccordion}
      >
        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"} text-red-700`}></i>
        <h2 className="text-white font-semibold">{question}</h2>
      </div>
      <div
        className={`accordion-content px-5 pt-0 overflow-hidden max-h-0 space-y-4 mr-4 text-sm ${isOpen ? 'max-h-[300px] p-3' : ''}`}
      >
        <div className="flex flex-row ml-8 py-4">
          <div className="flex w-1 bg-gradient-to-t from-red-600 via-orange-500 to-red-400"></div>
          <div className="flex-1">
            <p className="pl-2 sm:pl-4 text-justify">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
