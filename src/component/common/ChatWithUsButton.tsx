import { useState } from "react";

const ChatWithUsButton: React.FC = () => {
  const [show] = useState(true);

  return (
    show && (
      <div className="fixed bottom-8 right-8 z-50">
        {/* Animated Ping Circles */}
        <div className="relative w-[70px] h-[70px] flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full bg-blue-400 opacity-75 animate-ping" />
          <div className="absolute w-[50px] h-[50px] rounded-full bg-blue-400 opacity-75 animate-ping delay-200" />
          <div className="absolute w-[30px] h-[30px] rounded-full bg-blue-500 opacity-80 animate-ping delay-500" />

          {/* Button */}
          <button className="relative z-10 flex items-center gap-2 px-5 py-3 rounded-full bg-[#02ec97] text-[#191818] text-[16px] font-semibold shadow-lg transform animate-zoom hover:scale-105 transition duration-300 cursor-pointer">
            <span className="text-[20px]">💬</span>
          </button>
        </div>
      </div>
    )
  );
};

export default ChatWithUsButton;
