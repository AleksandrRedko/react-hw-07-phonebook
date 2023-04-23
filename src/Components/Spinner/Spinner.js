import { Bars } from "react-loader-spinner";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Spinner = () => {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: " rgba(0, 0, 0, 0.2)",
        zIndex: 1200,
      }}
    >
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>,
    modalRoot
  );
};

export default Spinner;
