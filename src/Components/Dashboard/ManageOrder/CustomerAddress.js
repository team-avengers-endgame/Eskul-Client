import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Fab,
  ListItem,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const CustomerAddress = ({ order, handleUpdateStatus, handleDelete }) => {


  const handleChange = (event) => {
    const status = (event.target.value);
    handleUpdateStatus(status, order?._id);
  };

  const addressStyle = { display: "flex", justifyContent: "space-between" };
  return (
    <Box>
      <ListItem button divider></ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>Customer Name</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.cus_name}</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>Country</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.cus_country}</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>City</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.cus_city}</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>State</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.cus_state}</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>Post Code</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.cus_postcode}</Typography>
          </Grid>
        </Grid>
      </ListItem>

      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>Phone</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.cus_phone}</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>Email</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.cus_email}</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>Total Amount</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>
              ${order?.total_amount} {order?.currency}
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>Tran_id</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.tran_id}</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem button divider>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography style={addressStyle}>
              <span>Date</span>
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography>{order?.date}</Typography>
          </Grid>
        </Grid>
      </ListItem>

      <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
        {order?.status && (
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel

              id="demo-simple-select-autowidth-label">
              Status
            </InputLabel>

            <Select
              color='error'
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={order.status}
              onChange={handleChange}
              autoWidth
            >

              <MenuItem value={order?.status}>{order?.status}</MenuItem>
              <MenuItem value="Approved">Approved</MenuItem>
              <MenuItem value="Shipped">Shipped</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
            </Select>
          </FormControl>
        )}

        <Tooltip title={order?.status} arrow placement="top">
          <Fab
            onClick={() => handleDelete(order._id)}
            variant="extended"
            size="small"
            color="error"
            aria-label="add"
          >
            <DeleteIcon sx={{ mr: 1 }} />
            Delete
          </Fab>
        </Tooltip>
      </ListItem>
    </Box>
  );
};

export default CustomerAddress;
