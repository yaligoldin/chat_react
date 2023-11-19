import React, { useState } from "react";

const ChatBox = ({selectedChat}) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      const message = { content: newMessage, time: currentTime };
      setMessages([...messages, message]);
      setNewMessage('');
      selectedChat.messages = [...selectedChat.messages, message];
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

    return (
        <>
        <div className="header">
        {selectedChat ? (
              <div className="imgText">
                <div className="userimg">
                <img src={selectedChat.picture} className="cover" />
                </div>
                <h4>
                  {selectedChat.contact}
                </h4>
              </div> ) : null }
            </div>
            <div className="chatBox">
              {selectedChat && selectedChat.messages.map((message, index) => (
                <div class="message my_message">
                <p key={index}>{message.content}<br/><span>{message.time}</span></p>
                </div>
              ))}
        </div>
        {selectedChat ? (
          <div className="chatbox_input">
            <input
              type="text"
              placeholder="Send a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="btn btn-success"
              style={{ marginRight: '2%', borderRadius: 12 }}
              onClick={handleSendMessage}
            >
              <i className="bi bi-send" />
            </button>
            </div>) : null}
        </>
    );
}
 
export default ChatBox;