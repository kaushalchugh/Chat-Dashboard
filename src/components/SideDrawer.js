import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { add_message, more_icon, search_icon } from '../assets/index';
import { Chats } from "./index";

const SideDrawer = ({ chats, user , selectedChatProp, setSelectedChatProp }) => { 
  const [search, setSearch] = useState(''); 
  const [searchResult, setSearchResult] = useState([]); 
  const [showMenu, setShowMenu] = useState(false); 
  const [showCheckboxes, setShowCheckboxes] = useState(false); 
  const [selectedUsers, setSelectedUsers] = useState([]); 
  const [showChats, setShowChats] = useState(true); 
  const [showUnread, setShowUnread] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  const handleSearch = () => { 
    if (!search) { 
      alert('Please enter something in search'); 
      return; 
    }
    
  let filteredData = chats.filter((chat) =>
      chat.users[0].name.toLowerCase().includes(search.toLowerCase())
    );

    if (showUnread) {
      filteredData = filteredData.filter((chat) =>!chat.isRead);
    }
    
    setSearchResult(filteredData);
  };

  const renderChats = () => { 
    if (search) { 
      return searchResult.map((chat) => { 
        const unreadCount = chat.users.reduce((count, user) => { 
          if (!user.isRead) { 
            return count + 1; 
          } 
          return count; 
        }, 0); 
          const lastMessage = chat.latestMessage; 
          return ( 
          <Chats 
            key={chat?._id} 
            user={chat?.users[0]} 
            showCheckboxes={showCheckboxes} 
            onCheck={(e, user) => handleCheck(e, user)} 
            showUnread={showUnread} isRead={chat.isRead} 
            unreadCount={unreadCount} 
            lastMessage={lastMessage} 
            onClick={() => handleChatClick(chat)} 
          /> 
          ); 
        }); 
      } 
      else { 
        return chats.map((chat) => { 
          const unreadCount = chat.users.reduce((count, user) => { 
            if (!user.isRead) { 
              return count + 1; 
            } 
              return count; }, 0); 
              const lastMessage = chat.latestMessage; 
              return ( 
              <Chats 
                key={chat?._id} 
                user={chat?.users[0]} 
                showCheckboxes={showCheckboxes} 
                onCheck={(e, user) => handleCheck(e, user)} 
                showUnread={showUnread} 
                isRead={chat.isRead} 
                unreadCount={unreadCount} 
                lastMessage={lastMessage} 
                onClick={() => handleChatClick(chat)} 
               /> 
               ); 
              }); 
            } 
          };

  const handleMenu = () => { 
    setShowMenu(!showMenu); 
  };
  
  const handleCheck = (e, user) => { 
    if (e.target.checked) { 
      setSelectedUsers([...selectedUsers, user]); 
    }else { 
      setSelectedUsers(selectedUsers.filter((u) => u._id!== user._id));  
    } 
  };

const handleSelectChats = () => { 
  setShowCheckboxes(!showCheckboxes); 
};

const handleShowChats = () => { 
  setShowChats(!showChats); 
  setShowUnread(false); 
};

const handleShowUnread = () => { 
  setShowUnread(!showUnread); 
  setShowChats(false);
 };

const handleChatClick = (chat) => { 
  setSelectedChatProp(chat);
};


return ( 
  <div className="flex flex-col p-3 w-1/4">
    <div className="flex height-[32px] top-6 left-6 w-full"> 
      <span className="text-black text-xl font-bold w-11/12 gap-20"> 
        Messages 
      </span> 
      <button className="w-1/12" onClick={handleMenu}> 
        <img className="w-6 h-6" alt="more-icon" src={more_icon}/>
      </button>

      <div className="absolute my-6 mx-48 bg-gray-100"> 
        <button className="w-full text-left text-md hover:text-blue-500 hover:bg-slate-200 p-3" onClick={handleSelectChats} hidden={!showMenu}>
          Select Chats
        </button> 
        <button className="w-full text-left text-md hover:text-blue-500 hover:bg-slate-200 p-3" onClick={logoutHandler} hidden={!showMenu}>
          Logout
        </button>
      </div> 
    </div> 
    <div className="flex w-full mt-3 mb-3">
      <div className="w-11/12 gap-28"> 
        <img className="absolute w-5 h-5 my-2 mx-20" alt="search-icon" src={search_icon}/> 
        <input className="w-full h-9 rounded-lg bg-blue-200 outline-none text-blue-500 font-semibold text-center placeholder:text-center placeholder:text-blue-500 placeholder:font-semibold" 
          type="text" 
          placeholder="Search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="w-1/12">
        <button onClick={handleSearch}>
          <img className="w-7 h-7" alt="add-message" src={add_message} />
        </button>
      </div>
    </div>
    <div className="">
      <button className={`text-center text-black text-lg border border-gray bg-white rounded-md w-1/2 ${showChats ? 'border-blue-500' : ''}`} onClick={handleShowChats}>All</button>
      <button className={`text-center text-black text-lg border border-gray bg-gray-100 rounded-md w-1/2 ${showUnread ? 'border-blue-500' :''}`} onClick={handleShowUnread}>Unread</button>
    </div>
    {renderChats()}
  </div>
  );
}

export default SideDrawer;