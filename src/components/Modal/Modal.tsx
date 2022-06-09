import { FC } from "react";
import Modal from "react-modal";
import Image from "next/image";

interface ModalsProps {
  modalIsOpen: boolean;
  openSubModal?: () => void;
  setIsOpen: (isOpen: boolean) => void;
  openModal: () => void;
  customStyles: any;
  subtitle?: any;
}
const Modals: FC<ModalsProps> = ({
  setIsOpen,
  customStyles,
  modalIsOpen,
  openModal,
  openSubModal,
}) => {
  let subtitle: any = {
    style: {
      color: "",
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    document.body.parentElement!.style.overflow = "hidden";
  }
  function closeModal() {
    document.body.parentElement!.style.overflow = "auto";
    setIsOpen(false);
  }

  return (
    <div className={modalIsOpen ? "h-screen w-screen overflow-hidden" : ""}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="containers grid grid-cols-3 gap-4">
          {Array.from(Array(10).keys()).map((idx) => (
            <div className="relative group " key={idx}>
              <div
                onClick={openSubModal}
                className=" absolute transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-black opacity-20 z-50 top-0 left-0 right-0 bottom-7"
              ></div>
              <button className="bg-header transition-all duration-300 ease-in-out group-hover:opacity-100  opacity-0 py-2 px-10 text-white font-bold text-xs z-[1000] top-3 left-3  rounded-full absolute">
                Select
              </button>
              <Image
                className="rounded-md"
                src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                width={400}
                height={300}
                alt="modal image"
              />

              <h3 className="text-black text-base font-bold ">Image {idx}</h3>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Modals;
