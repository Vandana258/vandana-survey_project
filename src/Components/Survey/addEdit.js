import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, IconButton, AppBar, Slide} from "@mui/material";
import Swal from 'sweetalert2';
import axios from 'axios';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal';
import './Survey.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

function AddEdit({ open, setOpen, editRow, setEditRow, getSections, ...rest }) {

  const initialValues = { 
    name: editRow.name,
  };

  const handleAddSection = async (values) => { 
    try { 
        const response = await axios.post("http://localhost:3005/sections" + values); 

        if (response.data.success) { 
            Swal.fire({ 
                icon: 'success', 
                title: 'Success!', 
                text:  response.data.message, 
                customClass: { 
                    popup:'swal2-popup', 
                    confirmButton: 'addEditCancelBtn addItemBtn', 
                } 
            }); 
            console.log("Section Added successfully!"); 
            getSections(); 
        } 
        else { 
            Swal.fire({ 
                title: "Failed to add Process!", 
                text: response.data.message, 
                icon: "error", 
                customClass: { 
                    popup: 'swal2-popup', 
                    confirmButton: 'addEditCancelBtn addItemBtn', 
                } 
            }); 
            console.log("Add Section Failed:", response.data.message); 
        } 
    } catch (error) { 
        Swal.fire({ 
            title: "Error!", 
            text: "Failed to add Section.", 
            icon: "error", 
            customClass: { 
                popup: 'swal2-popup', 
                confirmButton: 'addEditCancelBtn addItemBtn', 
            } 
        }); 
        console.error("Error:", error); 
    } 
    setOpen(false); 
  }; 

  const handleUpdateSection = async (id, values) => { 
    try { 
      const response = await axios.put("http://localhost:3005/sections" + editRow.id +  values); 

      if (response.data.success){ 
          Swal.fire({ 
              icon: 'success', 
              title: 'Success!', 
              text: response.data.message, 
              customClass: { 
                  popup:'swal2-popup',
                  confirmButton: 'addEditCancelBtn addItemBtn submit-button', 
                  icon: 'custom-icon-class', 
                } 
          }); 
          console.log("Section updated successfully!"); 
          getSections(); 
      } else { 
          Swal.fire({ 
              title: "Failed to update Section!", 
              text: response.data.message, 
              icon: "error", 
              customClass: { 
                  popup: 'swal2-popup', 
                  confirmButton: 'addEditCancelBtn addItemBtn ', 
              } 
          }); 
          console.log("Failed to update Section:", response.data.message); 
      } 
    } catch (error) { 
        Swal.fire({ 
            title: "Error!", 
            text: "Failed to update Section.", 
            icon: "error", 
            customClass: { 
                popup: 'swal2-popup', 
                confirmButton: 'addEditCancelBtn addItemBtn', 
            } 
        }); 
        console.log("Error updating Section:", error); 
    } 
    setOpen(false);
    setEditRow(""); 
  };

  const handleSubmit = async(values, { resetForm }) => { 
    if (editRow && editRow !== '') { 
        await handleUpdateSection(editRow.id, values); 
    } else { 
        await handleAddSection(values);
    } 
    resetForm();
    setOpen(false);
    // setEditRow();  // Reset the editRow state 
  }; 

  const handleCloseDialog = () => { 
    setOpen(false); 
    setEditRow("");
  };

  return (
    <>
      <Modal
        show={open}
        onHide={handleCloseDialog}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Modal.Header  closeButton style={{marginTop:'-5px'}}>
          <Modal.Title style={{ fontSize: '20px' }}>
              {editRow && editRow.name ? 'Edit' : 'Add'} Section
          </Modal.Title>
          {/* <Modal.Title style={{fontSize:'20px '}}>{editRow !== null ? 'Edit' : 'Add'} Process</Modal.Title> */}
        </Modal.Header>
        <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
         >
          {({ errors, touched, handleChange, handleBlur, values }) => (
             <Form>
             <Modal.Body>
               <Grid dividers>
                <TextField
                    label="Name"
                    // type="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    margin="normal"
                    size="small"
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    InputProps={{ style: { fontFamily: 'Montserrat', fontSize: '14px'}}}
                  />
               </Grid>
             </Modal.Body>
             <Modal.Footer>
               <Grid className='dis-flex-flex-end'>
                 <Button variant="elevated" className="cancel-button" style={{marginRight:'8px'}} onClick={handleCloseDialog}>Cancel</Button>
                 <Button variant="elevated" type="submit" className="addEditCancelBtn addItemBtn submit-button button-29">{editRow !== null ? 'Save' : 'Submit'}</Button>
               </Grid>
             </Modal.Footer>
           </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default AddEdit;