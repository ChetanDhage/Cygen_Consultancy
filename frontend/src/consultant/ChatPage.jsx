import React, { useState } from "react";
import { FaSearch, FaPaperPlane } from "react-icons/fa";

const ChatPage = () => {
  const users = [
    { id: 1, name: "Michael Chen", lastMsg: "Let's discuss the strategy", online: true },
    { id: 2, name: "Sarah Johnson", lastMsg: "Can we reschedule?", online: false },
    { id: 3, name: "David Wilson", lastMsg: "Got the proposal, thanks!", online: true },
    { id: 4, name: "Emma Rodriguez", lastMsg: "See you tomorrow!", online: false },
    { id: 5, name: "James Anderson", lastMsg: "I’ll send the file soon", online: true },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    { from: "me", text: "Hey Michael! How are you?" },
    { from: "them", text: "I’m good, thanks! Working on the project now." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { from: "me", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <main className="h-screen overflow-scroll flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-700">Chats</h2>
          <div className="mt-2 flex items-center bg-gray-100 p-2 rounded-lg">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between ${
                selectedUser.id === user.id ? "bg-gray-100" : ""
              }`}
            >
              <div>
                <h3 className="font-medium text-gray-700">{user.name}</h3>
                <p className="text-xs text-gray-500 truncate w-40">{user.lastMsg}</p>
              </div>
              {user.online && (
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <section className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white flex items-center justify-between">
          <h2 className="font-semibold text-gray-700">{selectedUser.name}</h2>
          {selectedUser.online ? (
            <span className="text-green-500 text-sm">Online</span>
          ) : (
            <span className="text-gray-400 text-sm">Offline</span>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.from === "me"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800"
                }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="px-4 pb-10 pt-4 border-t bg-white flex items-center ">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-3 bg-primary text-white rounded-lg hover:bg-primary"
          >
            <FaPaperPlane />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ChatPage;