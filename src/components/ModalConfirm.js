import { Button, Modal } from '@mui/material';
import React from 'react';
import '../css/ModalConfirm.scss'
const ModalConfirm = ({open , handleClose , onDelete}) => {
    return (
        <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='modalConfirm'>
            <div className='modalConfirm-titleContainer'>
                <span className='modalConfirm__title'>Are you sure ?</span>
            </div>
            <div className='modalConfirm-content'>
                <p>This item will be delete from your bag.</p>
            </div>
            <div className='modalConfirm-btnContainer'>
                <Button fullWidth className='modalConfirm__btn' style={{color: 'red'}} onClick={handleClose}>Cancel</Button>
                <Button fullWidth className='modalConfirm__btn' onClick={() => {
                    onDelete();
                    handleClose();
                    }}>OK</Button>
            </div>
        </div>
      </Modal>
    );
};

export default ModalConfirm;