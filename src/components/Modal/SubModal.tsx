import { FC, useEffect } from "react";
import Image1 from "/public/images/display/image1.png";
import Modal from "react-modal";
import Image from "next/image";

const customStyles: any = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0,0, 0.8)",
  },
  content: {
    position: "absolute",
    top: "20px",
    left: "40px",
    right: "40px",
    bottom: "0px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};

interface SubModalProps {
  modalIsOpen: boolean;
  afterOpenModal?: () => void;
  setIsOpen: (isOpen: boolean) => void;
  openModal: () => void;
  subtitle?: any;
}

const SubModal: FC<SubModalProps> = ({ modalIsOpen, setIsOpen, openModal }) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    document.body.parentElement!.style.overflow = "hidden";
  }
  function closeModal() {
    document.body.parentElement!.style.overflow = "auto";
    setIsOpen(false);
  }

  useEffect(() => {
    Modal.setAppElement("#modals");
  }, []);
  return (
    <div className={modalIsOpen ? "h-screen w-screen overflow-hidden" : ""}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="containers ">
          <div className="relative group ">
            <div
              onClick={() => console.log("Console opened!")}
              className=" absolute transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-black opacity-20 z-50 top-0 left-0 right-0 bottom-7"
            ></div>
            <button className="bg-header transition-all duration-300 ease-in-out group-hover:opacity-100  opacity-0 py-2 px-10 text-white font-bold text-xs z-[1000] top-3 left-3  rounded-full absolute">
              Select
            </button>
            <Image className="rounded-md" src={Image1} alt="submodal image" />
            <h3 className="text-black text-base font-bold ">Image </h3>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SubModal;
