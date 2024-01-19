import { FiPaperclip } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";
import { LuFiles } from "react-icons/lu";

const ChatInputs = () => {
  return (
    <div className="join w-full max-w-xl">
      <div className="dropdown dropdown-top join-item">
        <div tabIndex={0} role="button" className="btn btn-accent join-item">
          <FiPaperclip className="h-5 w-5" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu space-y-1 rounded-box w-52"
        >
          <li className="">
            <label htmlFor="pv" className="btn btn-accent pt-4 w-24">
              <input
                type="file"
                placeholder="khela hobe"
                className="w-full max-w-xs hidden"
                id="pv"
                // name="photosAndVideos"
                accept="image/*"
              />
              <IoMdPhotos /> Photos
            </label>
          </li>
          <li className="">
            <label htmlFor="file" className="btn btn-accent pt-4 w-24">
              <input
                type="file"
                placeholder="khela hobe"
                className="w-full max-w-xs hidden"
                id="file"
                // name="photosAndVideos"
              />
              <LuFiles />
              Files
            </label>
          </li>
        </ul>
      </div>
      <input
        type="text"
        placeholder="Message"
        className="input input-bordered input-accent w-full focus:outline-none join-item"
      />
      <button className="btn btn-accent join-item">
        <IoIosSend className="w-7 h-7" />
      </button>
    </div>
  );
};

export default ChatInputs;
