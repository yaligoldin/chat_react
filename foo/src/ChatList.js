import { useState } from 'react';
import AddContactModal from './AddContactModal';
function ChatList({chats, setChats, onChatClick, selectedChat }) {
  const [showModal, setShowModal] = useState(false);
  const [maxId, setMaxId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredChats = chats.filter(
    (chat) => chat.contact.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const profilePictures = [
    '/ProfilePics/Yuval.jpg',
    '/ProfilePics/Liza.jpg',
    '/ProfilePics/Max.jpg',
    '/ProfilePics/Natalie.jpg',
    '/ProfilePics/thomas.jpg',
    '/ProfilePics/Gal.jpg',
    '/ProfilePics/Yonatan.jpg',
    '/ProfilePics/Moya.jpg',
    '/ProfilePics/Noya.jpg',
    '/ProfilePics/Changa.jpg',
    '/ProfilePics/Sahar.jpg',
  ];

  const handleAddContact = (contact, setContact) => {
    const randomIndex = Math.floor(Math.random() * profilePictures.length);
    const randomPicture = profilePictures[randomIndex];
    
    const newChat = {
      contact: contact,
      picture: randomPicture,
      messages: [],
      id: maxId,
    };
    setMaxId(maxId+1);
    setChats([...chats, newChat]);
    setContact('');
    closeModal();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <>
    <div className="search_chat">
        <div>
        <input
            type="text"
            placeholder="Search a chat..."
            value={searchQuery}
            onChange={handleSearch}
          />
        <i className="bi bi-search" />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={openModal}
        >
          {" "}
          <i className="bi bi-person-add whiteLogo" />{" "}
        </button>
    </div>
    <AddContactModal showModal={showModal} closeModal={closeModal} handleAddContact={handleAddContact} />
      <div className='chat_list'>
        <div>
        <ul>
            {filteredChats.map((chat) => (
              <li key={chat} onClick={() => onChatClick(chat)}>
                  <div className={`block ${selectedChat === chat ? 'active' : ''}`}>
                  <div className="imgbx">
                    <img src={chat.picture} className="cover" alt="Profile" />
                  </div>
                  <div className="details">
                    <div className="listHead">
                      <h4>{chat.contact}</h4>
                      <p className="time">
                        {chat.messages.length > 0 && (
                          <span>{chat.messages[chat.messages.length - 1].time}</span>
                        )}
                      </p>
                    </div>
                    <div className="message_p">
                      {chat.messages.length > 0 && (
                        <p>{chat.messages[chat.messages.length - 1].content}</p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
    </>
  );
}

export default ChatList;
