// ChatButton.tsx
import React, { useState } from "react";
import Chat from "./Chat";
import aboutUsImage from "app/api/chat/component/Skärmavbild.png"; 

const ChatButton: React.FC = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const handleChatStart = () => {
    setChatStarted(true);
  };

  const handleAboutUsClick = () => {
    setIsAboutUsOpen(true);
  };

  const handleCloseAboutUs = () => {
    setIsAboutUsOpen(false);
  };

  return (
    <div className="flex flex-col items-center  min-h-screen">
      {!chatStarted && (
        <div className="mb-8 flex  flex-col items-center justify-center">
          {/* Your rounded logo with a background shadow */}
          <div className="shadow-xl bg-white rounded-full w-40 h-40 flex items-center justify-center my-20">
            <h1 className="text-dark font-bold text-3xl">LegalAId</h1>
          </div>

          {/* Start chat button */}
          <div>
            <button
              onClick={handleChatStart}
              className="mt-4 text-white px-8 py-2 rounded-xl text-2xl uppercase"
              style={{
                background: "#523AC7",
              }}
            >
              Start Chat
            </button>
          </div>

          {/* About us link */}
          <a href="#" onClick={handleAboutUsClick} className=" text-gray-500 mt-10 underline ">
            About us
          </a>

          {/* About us pop-up */}
          {isAboutUsOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-md">
                <img src={aboutUsImage.src} alt="About Us" className="w-1/2 h-1/2" />
                <button onClick={handleCloseAboutUs} className="mt-2 text-purple-800">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {chatStarted && <Chat />}
    </div>
  );
};

export default ChatButton;
