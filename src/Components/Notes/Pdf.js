import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { nodesData } from './NotesData/NotseData';
import { ButtonStyle } from '../../Hooks/useStyle';
import LoadingPage from '../Shared/LoadingPage/LoadingPage';
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

    const notePdf = nodesData.filter(pdf => pdf?.name === name)
    const singlePdf = notePdf[0]


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
                    PDF {singlePdf?.name}
                </DialogTitle>
                {
                    !singlePdf?.pdf?<LoadingPage/>:
                    <DialogContent dividers={scroll === "paper"}>
                    <Document file={singlePdf?.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height="600" pageNumber={pageNumber} />
                    </Document>
                    <Typography> Page {pageNumber} of {numPages}</Typography>
                    {pageNumber > 1 &&
                        <Button sx={{ ...ButtonStyle }} size='small' onClick={changePageBack}>Previous Page</Button>
                    }
                    {
                        pageNumber < numPages &&
                        <Button sx={{ ...ButtonStyle }} size='small' onClick={changePageNext}>Next Page</Button>
                    }

                </DialogContent>
                }
                <DialogActions>
                    <Button sx={{ ...ButtonStyle }} onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Pdf;