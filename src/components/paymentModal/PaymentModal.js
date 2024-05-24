import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import LoadingModal from "../ApiLoader";
import { GrFormClose } from "react-icons/gr";

function PaymentModal({ openModal, setOpenModal, paymentUrl, onClose }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Modal
        style={{
          zIndex: 9999,
        }}
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        {/* <Modal.Header>NowPay Payment</Modal.Header>
        <Modal.Body> */}
        <>
      {loading && <LoadingModal />}
      <div className="node_detail_section">
        <div className="node_detail_container">
          <div className="detail_header">
          <div></div>
            <div className="ml-6 center">
            
              <h3 className="mb-0">NowPay Payment</h3>
            </div>
            <div className="right">
              <span className="close" onClick={onClose}>
                <GrFormClose />
              </span>
            </div>
          </div>
          
          <div className="detail_footer">
            {/* <p>
              <span>Click here</span> to view installation steps
            </p> */}
            {/* <button
              className="detail_btn"
              // onClick={purchaseHandler}
              disabled={loading}
            >
              {loading ? "Purchasing..." : "Purchase"}
            </button> */}
            <div className="h-6">

            </div>
            <button
            className="detail_btn"
            onClick={() => {
              window.open(paymentUrl, "_blank");
              setOpenModal(false);
              onClose();
            }}
          >
            pay now
          </button>
          </div>
        </div>
      </div>
      {/* <PaymentModal openModal={openModal} setOpenModal={setOpenModal} paymentUrl={paymentUrl} paymentId={paymentId} onClose={onClose} /> */}
    </>
          {/* <button
            onClick={() => {
              window.open(paymentUrl, "_blank");
              setOpenModal(false);
              onClose();
            }}
          >
            pay now
          </button> */}
          {/* {
            paymentUrl ? (
              <iframe
                src={paymentUrl}
                style={{
                  width: '100%',
                  height: '500px'
                }}
              ></iframe>
            ) : (
              <p>Payment Url not found</p>
            )
          } */}
        {/* </Modal.Body> */}
        {/* <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default PaymentModal;
