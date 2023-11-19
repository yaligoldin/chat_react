import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddContactModal from "./AddContactModal";
import LogOutModal from "./LogOutModal";
import SelfInfo from "./SelfInfo";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

const ChatScreen = () => {
  const location = useLocation();
  const { name, picture } = location.state;
  const [chats, setChats] = useState([]); // your existing chats array
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  console.log({picture});
    return ( 
        <>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link href="chats.css" rel="stylesheet" />
        <div className="containerChat">
          <div className="leftSide">
            <SelfInfo name={name} picture={picture}/>
            <ChatList chats={chats} setChats={setChats} onChatClick={handleChatClick} selectedChat={selectedChat}/>
          </div>
          <div className="rightSide">
              <ChatBox selectedChat={selectedChat}/>
          </div>
        </div>
      </>
    );
}

export default ChatScreen;