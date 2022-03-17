import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Pdf1 from './PDF/sample.pdf';
const Pdf = ({ handleClose, open, scroll, name }) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }





    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);




    return (
        <div>
            <Dialog
                open={open}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    PDF
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                    <Document file={Pdf1} onLoadSuccess={console.log(onDocumentLoadSuccess)}>
                        <Page height="600" pageNumber={pageNumber} />
                    </Document>
                    <p> Page {pageNumber} of {numPages}</p>
                    {pageNumber > 1 &&
                        <button onClick={changePageBack}>Previous Page</button>
                    }
                    {
                        pageNumber < numPages &&
                        <button onClick={changePageNext}>Next Page</button>
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Pdf;