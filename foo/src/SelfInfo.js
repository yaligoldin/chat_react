import { useState } from "react";
import AddContactModal from "./AddContactModal";
import LogOutModal from "./LogOutModal";

const SelfInfo = ({name, picture}) => {
    const [showModalLog, setShowModalLog] = useState(false);
    console.log({picture});

    const openModalLog = () => {
        setShowModalLog(true);
    };

    const closeModalLog = () => {
        setShowModalLog(false);
    };
    return (
        <div className="header">
              <div className="userimg">
                <img src={picture} className="cover" />
              </div>
              <span style={{ fontSize: "x-large", marginLeft: 10 }}>
                {name}
              </span>
              <button
                type="button"
                style={{ marginLeft: "auto" }}
                className="btn btn-danger"
                onClick={openModalLog}
              >
                {" "}
                <i className="bi bi-box-arrow-right whiteLogo" />
              </button>
              <LogOutModal showModal={showModalLog} closeModal={closeModalLog} />
        </div>
    );
}
 
export default SelfInfo;