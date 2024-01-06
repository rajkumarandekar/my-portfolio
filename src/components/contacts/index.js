import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

import "./index.css";

const Contacts = () => {
  return (
    <>
      <div className="icons-con" id="contacts">
        <RiInstagramFill className="insta" />
        <FaLinkedin className="insta" />
        <TbMailFilled className="mail" />
      </div>
      <div className="copy-con">
        <h1 className="copyright">Copyright © 2024. All rights reserved</h1>
      </div>
    </>
  );
};
export default Contacts;
