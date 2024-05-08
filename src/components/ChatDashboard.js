import { useState } from "react";
import { MainComponents,Chatbox, SideDrawer } from "./index";
import mockData from "../data/mockData";

const ChatDashboard = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    const handleSendMessage = (message) => {
        // Implement your message sending logic here
        console.log('Sending message:', message);
      };

    return (
        <div className="flex w-full h-screen bg-gray-100">
            <SideDrawer 
                chats={mockData.chats} 
                user={mockData.user}
                selectedChatProp={selectedChat}
                setSelectedChatProp={setSelectedChat}
            />
            <div className="w-3/4">
                {selectedChat ? (
                    <Chatbox 
                        chat={selectedChat}
                        user={mockData.user}
                        onClose={() => setSelectedChat(null)}
                        onSendMessage={handleSendMessage}
                    />
                ) : (
                    <MainComponents/>
                )}
            </div>
        </div>
    );
};

export default ChatDashboard;