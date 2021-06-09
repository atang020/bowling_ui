import React from 'react';
import Modal from '@material-ui/core/Modal';
import styles from './SimpleModal.module.scss';

export default function SimpleModal({ open, handleClose, children }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={styles.modalContainer}>
        <div className={styles.closeIcon} onClick={handleClose}>X</div>
        {children}
      </div>
    </Modal>
  );
}
