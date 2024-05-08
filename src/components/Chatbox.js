import { useState } from 'react';
import { choose_icon, close, emoji_icon, file_icon, image_icon, more_icon, search_black, send_icon, video_icon } from '../assets';

const Chatbox = ({ chat, user, onClose, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(chat?.messages || []);
  const [showMenu, setShowMenu] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessageObject = {
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(),
      sender: user.name,
    };
    setMessages([...messages, newMessageObject]);
    onSendMessage(newMessageObject);
    setNewMessage('');
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-white w-full h-screen m-0 p-1 top-0 relative">
      <div className="m-1">
        <div className="m-2 p-2 border border-gray-200">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div>
                <img src={chat?.users[0]?.pic} alt="profile" className="h-12 w-12 rounded-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg text-bold text-black">
                  {chat?.users[0]?.name}
                </h2>
                <div className="flex flex-row gap-1">
                  <div className={`h-1 w-1 my-2 rounded-full ${user.status === 'online' ? 'bg-green-500' : 'bg-gray-500'}`} />
                  <p className="text-sm">{user.status === 'online' ? 'Active Now' : 'Offline'}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 mr-1">
              <button className="">
                <img className="w-4 h-4" alt="search-icon" src={search_black} />
              </button>
              <button className="" onClick={() => setShowMenu(!showMenu)}>
                <img className="w-5 h-5" alt="more" src={more_icon} />
              </button>
              <button className="" onClick={onClose}>
                <img className="w-5 h-5" alt="close" src={close} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center">
          <img src={chat?.users[1]?.pic} alt="profile" className="h-12 w-12 rounded-full object-cover" />
          <h2 className="text-lg text-bold text-black">
            {chat?.users[1]?.name}
          </h2>
        </div>
        <div className="flex mt-6">
          <hr className="w-2/5 h-px mx-2 bg-gray-400 border-0" />
          <p className="w-1/5 h-2 -my-3 text-gray-500 text-md text-center">
            {new Date(chat?.startTime).toLocaleString()}
          </p>
          <hr className="w-2/5 h-px mx-2 bg-gray-400 border-0" />
        </div>
      </div>

      <div className="flex-grow p-4 overflow-y-auto space-y-2">
        {messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === user.name
                  ? 'justify-end'
                  : 'justify-start'
              }`}
            >
              <div className="flex items-end">
                {message.sender !== user.name && (
                  <img
                    src={chat?.users[1]?.pic}
                    alt="profile"
                    className="h-8 w-8 rounded-full mr-2"
                  />
                )}
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.sender === user.name
                      ? 'bg-gray-300 text-gray-700'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {message.sender !== user.name && (
                      <span className="font-semibold text-sm">
                        {message.sender}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.sender === user.name && (
                  <img
                    src={chat?.users[0]?.pic}
                    alt="profile"
                    className="h-8 w-8 rounded-full ml-2"
                  />
                )}
              </div>
            </div>
          ))}
      </div>

      {showMenu && (
        <div className="m-2 p-2 absolute bottom-14 left-[1/6] transform -translate-x-1/2 flex flex-col items-center bg-gray-100 border border-gray-200 rounded-md">
          <button type='button' className="w-full text-left text-sm text-blue-400 hover:text-blue-500 hover:bg-slate-200 p-2">
            <img className="h-5 w-5 inline-block" alt="img-icon" src={image_icon}/>Images
          </button> 
          <button type='button' className="w-full text-left text-sm text-blue-400 hover:text-blue-500 hover:bg-slate-200 p-2">
            <img className="h-5 w-5 inline-block" alt="video-icon" src={video_icon}/>Videos
          </button> 
          <button type='button' className="w-full text-left text-sm text-blue-400 hover:text-blue-500 hover:bg-slate-200 p-2">
            <img className="h-5 w-5 inline-block" alt="file-icon" src={file_icon}/>Files
          </button> 
        </div>
      )}

      <form onSubmit={handleSendMessage} className="absolute bottom-0 left-0 right-0 m-2 p-4 border border-gray-200 rounded">
        <div className="w-full flex flex-row gap-1 items-end">
          <button type='button'>
            <img className="w-5 h-5" alt="emoji-con" src={emoji_icon} />
          </button>
          <button type='button' onClick={handleMenu} >
            <img className="w-5 h-5" alt="choose-icon" src={choose_icon}/>
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="p-2 ">
            <img className="w-6 h-6" alt="send-icon" src={send_icon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbox;
