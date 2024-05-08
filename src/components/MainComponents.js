import { main } from '../assets/index';

const MainComponents = () => { 
  return ( 
    
    <div className="flex flex-col items-center justify-center">

      <div className="mb-4"> 
        <img src={main} alt="img" className="w-[656px] h-[492px] top-[167px] pt-[43.75px] pr-[26.98px] pb-[35.55px] pl-[26.12px]" />
      </div> 

      <button className="rounded-lg bg-[#0C7FE8] hover:bg-blue-600 text-white px-6 py-2" > 
        Start Conversation 
      </button> 

    </div> 

  ); 
};

export default MainComponents;