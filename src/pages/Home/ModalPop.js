import React from 'react';
import { Modal, Button } from 'react-bootstrap';
function ModalPop({ show, handleClose, showfamilyMember, UpdateHandler }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{showfamilyMember?.role}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='h5'>
          <span className='fw-bold'>Name: </span>
          {showfamilyMember?.name}
        </p>
        <p>
          <span className='fw-bold'>Age: </span>
          {showfamilyMember?.age}
        </p>
        <p>
          <span className='fw-bold'>Sex: </span> {showfamilyMember?.sex}
        </p>
        <p className='h5 fw-bold'>Details:</p>
        <p>{showfamilyMember?.details}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='secondary'
          onClick={handleClose}
        >
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() =>
            UpdateHandler(
              showfamilyMember?.id,
              showfamilyMember?.role,
              showfamilyMember?.name,
              showfamilyMember?.sex,
              showfamilyMember?.age,
              showfamilyMember?.details,
            )
          }
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPop;
