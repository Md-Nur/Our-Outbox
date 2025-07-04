import { MdFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { databases } from "../utils/appwrite";

const ChatContainer = () => {
  const userAuth = {
    id:1,
    avatar: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
  }
  const [messages, setMessage] = useState<any[]>();
  const [error, setError] = useState<any[]>();
  useEffect(() => {
    databases
      .listDocuments("ouroutbox", "65aa47712b5f71c4be0c")
      .then((data: any) => {
        return data.documents;
      })
      .then((data) => setMessage(data))
      .catch((error: any) => {
        setError(error);
      });
  }, []);
  console.log(messages, error);
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="chat-container w-full max-w-xl">
      {messages?.map((message) => (
        <div className="chat chat-start" key={message.$id}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            {message.username} |
            <time className="text-xs opacity-50">
              | {message.$createdAt.split("T")[1].split(".")[0]}
            </time>
          </div>
          <div className="chat-bubble">{message.body}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      ))}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble flex gap-1 items-center">
          <FaRegFileAlt className="w-7 h-7" />
          <span>Navbar.pdf</span>
          <MdFileDownload className="w-7 h-7" />
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
};

export default ChatContainer;
