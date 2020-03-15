import React from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
} from '@material-ui/core'

const Modal = props => {
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogContent dividers={true}>
                {props.content}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;