import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import UpdateIcon from '@mui/icons-material/Update';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './AdminDash.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function AdminDash() {

  const [itemCode, setItemCode] = useState()
  const [itemCategory, setItemCategory] = useState()
  const [itemName, setItemName] = useState()
  const [itemPrice, setItemPrice] = useState()
  const [qtyOnHand, setQtyOnHand] = useState()


  const [items, setItems] = useState([])

  useEffect(() => {
    fetchDataFromServer();
  }, [])

  const fetchDataFromServer = () => {
    // Your code to fetch data from the server goes here
    axios.get('http://localhost:3500/api/v1/getItem')
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3500/api/v1/item", { itemCode,itemCategory, itemName, itemPrice, qtyOnHand })
      .then(res => {
        setItems([...items, res.data]);
        console.log(items)
        fetchDataFromServer();
        alert("Saved");

      })
      .catch(err => {
        console.log(err)
        alert("Failed");
      })
  }

  const handleDeleteItem = (id) => {
    axios.delete('http://localhost:3500/api/v1/deleteItem/'+id)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }



  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  
  return (
    <>
      <Box className='feildT'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      onSubmit={handleItemSubmit}>
        <TextField id="outlined-basic" label="Id" variant="outlined" onChange={(e) => setItemCode(e.target.value)}/>
        <TextField id="outlined-basic" label="Category" variant="outlined"onChange={(e) => setItemCategory(e.target.value)}/>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setItemName(e.target.value)}/>
        <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(e) => setItemPrice(e.target.value)}/>
        <TextField id="outlined-basic" label="Qty" variant="outlined" onChange={(e) => setQtyOnHand(e.target.value)}/>
        <Button variant="contained" type='submit' className='saveBtn' color='success' endIcon={<SaveIcon />}>
          Save
        </Button>
      </Box>

    

      <TableContainer className='tContainer' component={Paper} style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Table className='tSx' aria-label="customized table">
          <TableHead className='tHead' >
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Qty</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className='tBody' >
            {items.map((item) => (
              <StyledTableRow key={item}>
                <StyledTableCell component="th" scope="row">
                  {item.itemCode}
                </StyledTableCell>
                <StyledTableCell align="right">{item.itemCategory}</StyledTableCell>
                <StyledTableCell align="right">{item.itemName}</StyledTableCell>
                <StyledTableCell align="right">{item.itemPrice}</StyledTableCell>
                <StyledTableCell align="right">{item.qtyOnHand}</StyledTableCell>
                <StyledTableCell align="right">
                  <Link to={`/itemUpdate/${item._id}`}>
                  <Button variant="contained" color='info' endIcon={<UpdateIcon />}>
                    Update
                  </Button>
                  </Link>
                  <Button variant="contained" onClick={(e) => handleDeleteItem(item._id)} color='error' startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}