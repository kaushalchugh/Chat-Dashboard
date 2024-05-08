import { useState } from "react";
const Chats = ({ chats, user, showCheckboxes, onCheck, showUnread, isRead, unreadCount, lastMessage, onClick }) => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const handleChatboxOpen = () => {
    setIsChatboxOpen(true);
    onClick();
  };

  return (
    <div>
        <hr className="h-px my-3 bg-blue-400" />
          <div className="flex flex-row mt-1" onClick={handleChatboxOpen}>

              <div>

                <div className="flex gap-2">
                  <input className="" 
                    type="checkbox" 
                    onChange={(e) => onCheck(e, user)} 
                    hidden={!showCheckboxes}
                  />
                  <img className="h-12 w-12 rounded-full object-cover" alt="profile" src={user?.pic}/>
                </div>

                {!showUnread && (
                  <div className={`h-2 w-2 rounded-full absolute mx-8 -my-2 ${user?.status === 'online'? 'bg-green-500' : 'bg-gray-500'}`} 
                    title={user?.status === 'online'? 'Online' : 'Offline'}
                  />
                )}

              </div>

              <div className="ml-4 text-md">

                <p>{user?.name}</p>

                {showUnread && !isRead && (
                  <div className="text-xs bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
                    {unreadCount}
                  </div>
                )}

                {showUnread && !isRead && (
                  <p className="text-black">
                    {lastMessage?.content}
                  </p>
                )}
                {showUnread && isRead && (
                  <p className="text-gray-500">
                    {lastMessage?.content}
                  </p>
                )}
                {!showUnread && (
                  <p className={`${user?.status === 'online'? 'text-green-500' : 'text-gray-500'} mt-1 font-semibold`}>
                    {user?.status === 'online'? 'Online' : 'Offline'}
                  </p>
                )}
                <hr className="h-px bg-blue-400"/>

              </div>
          </div>

    </div>
  );
};

export default Chats;