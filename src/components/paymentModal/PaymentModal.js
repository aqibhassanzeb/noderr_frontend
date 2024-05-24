import React from "react";
import { Button, Modal } from "flowbite-react";

function PaymentModal({ openModal, setOpenModal, paymentUrl, onClose }) {
  return (
    <>
      <Modal
        style={{
          zIndex: 9999,
        }}
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>NowPay Payment</Modal.Header>
        <Modal.Body>
          <Button
            onClick={() => {
              window.open(paymentUrl, "_blank");
              setOpenModal(false);
              onClose();
            }}
          >
            pay now
          </Button>
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
        </Modal.Body>
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
