
import { Layout } from '../Layout/Layout.js';
import './Survey.css';

function Survey(){
    return(
        <Layout>
            <div className="section-content">
                {/* User Heading */}
                <div className="page">
                    <div className="User-container">
                        <div className="row-div row-col-div">
                            <div className="user-icon-div">
                            </div>
                            <div className="col-12-div">
                                <p variant="h1" className="user-heading"> Survey</p>
                            </div>
                        </div>
                    </div>
                </div> 

                {/* User content */}
                <div className="page page-user">
                    <div className="row-div row-col-div">
                        <div className="col-12-div" style={{paddingLeft:'0px'}}>
                            Survey
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    );
}

export default Survey;

// import { Fragment, useEffect, useState } from 'react'; 
// import { Grid, Typography,  Tooltip, TextField, InputAdornment,Divider, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination} from "@mui/material"; 
// import axios from 'axios'; 
// import Swal from 'sweetalert2'; 
// import { Layout } from '../Layout/Layout.js';
// import AddIcon from '@mui/icons-material/Add'; 
// import Button from '@mui/material/Button';
// import EditIcon from '@mui/icons-material/Edit';
// import TaskIcon from '@mui/icons-material/Task';
// import DeleteIcon from '@mui/icons-material/Delete'; 
// import SearchIcon from '@mui/icons-material/Search';
// // import AddEdit from './addEdit.js';
// import './Survey.css'; 
// // import { DataGrid } from '@mui/x-data-grid'; 
// // import './Item.css'; 

// export const Survey = () => { 
//     const [open, setOpen] = useState(false);    
//     const [editRow, setEditRow] = useState('');    
//     const [filteredRows, setFilteredRows] = useState([]); 
//     const [rows, setRows] = useState([]); 
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(10);
 
//     useEffect(() => { 
//         getSections(); 
//     }, []) 

//     useEffect(() => { 
//         setFilteredRows(rows); 
//     }, [rows]);  
 
//     const getSections = async () => { 
//         const response = await axios.get("http://localhost:3005/sections"); 
//         if(response && response.data && response.data.success){ 
//             setRows(response.data.data)
//         } 
//     } 
     
//     const handleAddDialog = () => { 
//         setOpen(true); 
//     }; 

//     const handleEditDialog = (row) => { 
//         setEditRow(row);
//         setOpen(true); 
//     }; 
    
//     const handleDeleteClick = (params) => { 
//         const selectedRowId = params.row.id;
//         Swal.fire({ 
//             title: "Are you sure?", 
//             text: "You won't be able to revert this!", 
//             icon: "warning", 
//             showCancelButton: true, 
//             cancelButtonColor: "swal-button", 
//             confirmButtonColor: " submit-button swal-button", 
//             confirmButtonText: "Yes, delete it!", 
//             customClass: { 
//                 popup: 'swal2-popup', 
//                 confirmButton: ' submit-button swal-button-right', 
//                 cancelButton: ' swal-button-left' 
//             } 
//         }).then(async (result) => { 
//             if (result.isConfirmed) { 
//                 try { 
//                     const response = await axios.delete(process.env.REACT_APP_API_BASE_URL + 'section/' + selectedRowId); 
//                     if (response.data.success) { 
//                         Swal.fire({ 
//                             title: "Deleted!", 
//                             text: "Your Section has been deleted.", 
//                             icon: "success", 
//                             customClass: { 
//                                 popup: 'swal2-popup', 
//                                 confirmButton: 'submit-button', 
//                             } 
//                         }); 
//                         const updatedRows = rows.filter(row => row.id !== selectedRowId); 
//                         setRows(updatedRows); 
//                     } else { 
//                         Swal.fire({ 
//                             title: "Error!", 
//                             text: "Failed to delete item.", 
//                             icon: "error", 
//                             customClass: { 
//                                 popup: 'swal2-popup', 
//                                 confirmButton: 'submit-button', 
//                             } 
//                         }); 
//                     } 
//                 } catch (error) { 
//                     console.log("Error deleting item:", error); 
//                     Swal.fire({ 
//                         title: "Error!", 
//                         text: "Failed to delete item.", 
//                         icon: "error", 
//                         customClass: { 
//                             popup: 'swal2-popup', 
//                             confirmButton: 'submit-button', 
//                         } 
//                     }); 
//                 } 
//             } 
//         }); 
//     }; 

//     const handleFilter = (event) => { 
//         const searchQuery = event.target.value.toLowerCase(); 
//         const filteredData = rows.filter(row => 
//             row.name.toLowerCase().includes(searchQuery)
//         ); 
//         setFilteredRows(filteredData); 
//     }; 

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };  
 
//     const columns = [ 
//         { field: 'id', headerName: 'ID', width: 220 , headerClassName: 'bold-header'}, 
//         { field: 'name', headerName: 'Name', width: 220 , headerClassName: 'bold-header'},
//         { field: 'action', headerName: 'Action', width: 220 , headerClassName: 'bold-header', 
//             renderCell: (params) => (  
//                 <Fragment> 
//                     <Tooltip title="Edit" placement='left'arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }}> 
//                         <EditIcon  onClick={() => handleEditDialog(params.row)}/>
//                     </Tooltip> 
//                     <Tooltip title="Delete" placement='right' arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }}>
//                         <Grid className='edit-delete-grid bg-color-delete'>
//                             <DeleteIcon className='edit-delete-icon'  onClick={() => handleDeleteClick(params)}/>
//                         </Grid>
//                     </Tooltip>
//                 </Fragment> 
//             ) 
//         }, 
//     ]; 

//     return( 
//         <Layout>
//             <Grid className='section-content'> 
//                 {/* Process Heading */} 
//                 <Grid className="page"> 
//                     <Grid className="User-container"> 
//                         <Grid className="row-grid row-col-grid padding-add"> 
//                             {/* <Grid className="user-icon-grid"> 
//                                 <TaskIcon className='item-icon'/> 
//                             </Grid>  */}
//                             <Grid className="col-12-grid"> 
//                                 <Typography variant="h1" className="user-heading"> Section</Typography> 
//                                 <Grid style={{paddingRight:'12px', zIndex:'1px'}} > 
//                                     {/* <AddEdit  
//                                         open={open}  
//                                         setOpen={setOpen}
//                                         editRow={editRow}
//                                         setEditRow={setEditRow}
//                                         getSections={getSections}
//                                     />  */}
//                                 </Grid> 
//                             </Grid>
//                             <Grid> 
//                                 <Button variant="elevated" 
//                                 startIcon={<AddIcon className="addIcon"/>}   
//                                 className="addEditCancelBtn addItemBtn"  onClick={() => handleAddDialog()}> 
//                                 ADD SECTION
//                                 </Button> 
//                             </Grid>  
//                         </Grid> 
//                     </Grid> 
//                 </Grid>  
//                 <Divider className='divider'/>
 
//                 {/* Process content */} 
//                 <Grid className="page page-user" > 
//                     <Grid className="row-grid row-col-grid"> 
//                         <Grid className="column-table"> 
//                             <Grid className="users-info-table"> 
//                                 <Grid className='search-add-grid' > 
//                                     <Grid className="search-grid"> 
//                                         <Grid className="search-icon-grid"> 
//                                             <TextField 
//                                                 id="input-with-icon-textfield" 
//                                                 className='border-radius' 
//                                                 type="search" 
//                                                 // variant="filled" 
//                                                 placeholder='Search Here..' 
//                                                 fullWidth={true} 
//                                                 InputProps={{ 
//                                                 startAdornment: ( 
//                                                     <InputAdornment position="start"> 
//                                                     <SearchIcon className='search-icon'/> 
//                                                     </InputAdornment> 
//                                                 ), style: { fontFamily: 'Montserrat'}  
//                                                 }} 
//                                                 size='small' 
//                                                 // style={{paddingTop:'10px'}}
                           
//                                                 onChange={handleFilter} 
//                                                 // style={{ width: '200%' }} 
//                                                 /> 
//                                         </Grid> 
//                                     </Grid> 
//                                 </Grid> 
//                             </Grid> 
//                             <Paper sx={{ width: '100%', overflow: 'hidden' }} className='customDataGrid table-styles table-collapse'>
//                                 <TableContainer sx={{ minHeight: '50px' }} >
//                                     <Table stickyHeader size="small" aria-label="a dense table sticky table">
//                                         <TableHead>
//                                             <TableRow>
//                                             {columns.map((column, index) => (
//                                                 <TableCell
//                                                 key={index}
//                                                 sx={{ backgroundColor: '#efefef', fontFamily:'Montserrat', fontSize: '12px', height:'40px', fontWeight:'bold' }}
//                                                 // key={index} 
//                                                 align={column.align}
//                                                 style={{ minWidth: column.minWidth}}
//                                                 >
//                                                     {column.headerName}
//                                                 </TableCell>
//                                             ))}
//                                             </TableRow>
//                                         </TableHead>
//                                         <TableBody>
//                                             {filteredRows.length === 0 ? (
//                                                 <TableRow>
//                                                     <TableCell colSpan={columns.length} align="center" 
//                                                         sx={{fontFamily:'Montserrat', fontSize: '12px'  }}>
//                                                         No rows 
//                                                     </TableCell>
//                                                 </TableRow>
//                                             ) : (
//                                                 filteredRows
//                                                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                                                 .map((row, index) => {
//                                                     const rowClass = index % 2 === 0 ? "alternateRowOdd" : "alternateRow";
//                                                     return (
//                                                     <TableRow hover role="checkbox" tabIndex={-1} key={row.id} className={rowClass}>
//                                                         {columns.map((column, index) => {
//                                                         const value = row[column.field];
//                                                         return (
//                                                             <TableCell key={index} align={column.align} 
//                                                             sx={{fontFamily:'Montserrat', fontSize: '12px'  }}>
//                                                             {column.format && typeof value === 'number'
//                                                                 ? column.format(value)
//                                                                 : column.field === 'action'
//                                                                     ? 
//                                                                     <TableCell style={{display: 'flex',justifyContent:'center'}} id="action-tablecell">
//                                                                         <Fragment>
//                                                                             <Tooltip title="Edit" placement='left'arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }} >
//                                                                                 <Grid className='edit-delete-grid bg-color-black cursor-pointer'>
//                                                                                     <EditIcon className='edit-delete-icon' onClick={() => handleEditDialog(row)}/>
//                                                                                 </Grid>
//                                                                             </Tooltip>
//                                                                             <Tooltip title="Delete" placement='right' arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }}>
//                                                                                 <Grid className='edit-delete-grid bg-color-delete cursor-pointer'>
//                                                                                     <DeleteIcon className='edit-delete-icon' onClick={() => handleDeleteClick({ row })}/>
//                                                                                 </Grid>
//                                                                             </Tooltip>
//                                                                         </Fragment>
//                                                                     </TableCell>
//                                                                     : value
//                                                             }
//                                                             </TableCell>
//                                                         );
//                                                         })}
//                                                     </TableRow>
//                                                     );
//                                             }) )}
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                                 <TablePagination
//                                     rowsPerPageOptions={[10, 25, 100]}
//                                     component="div"
//                                     count={rows.length}
//                                     rowsPerPage={rowsPerPage}
//                                     page={page}
//                                     onPageChange={handleChangePage}
//                                     onRowsPerPageChange={handleChangeRowsPerPage}
//                                 />
//                             </Paper>
//                         </Grid> 
//                      </Grid> 
//                 </Grid> 
//                 {/* <AddEdit  
//                     open={open}  
//                     setOpen={setOpen}
//                     editRow={editRow}
//                     setEditRow={setEditRow}
//                     getSections={getSections}
//                 />  */}
//                 </Grid> 
//         </Layout>
//     ); 
// }
