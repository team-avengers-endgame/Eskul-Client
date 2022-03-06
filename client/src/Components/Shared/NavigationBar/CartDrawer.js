import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge, Button, IconButton} from "@mui/material";
import { CartContext } from "../../Context/CartContext";
import Cart from "../Cart/Cart";
import { ButtonStyle } from "../../../Hooks/useStyle";
import {useNavigate } from "react-router-dom";
export default function CartDrawer() {
  const [state, setState] = React.useState(false);
  const cartBooks = React.useContext(CartContext)[0];

  let totalQuantity = 0;

  for (const product of cartBooks) {
    if (!product.quantity) {
      product.quantity = 1;
    }

    totalQuantity = totalQuantity + product.quantity;
  }


  const toggleDrawer = (open) => (event) => {

    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  

  let navigate = useNavigate();
  const bookOrderReview=()=>{
   return navigate('/books/bookOrderReview')
  }

  const list = () => (
    <Box
      sx={{ width: { sm: 400, md: 500 } }}
      role="presentation"

    >
      <List sx={{ pt: 0 }}>
        <Cart>
         
            <Button onClick={bookOrderReview} sx={{ ...ButtonStyle, width: 1 }}>Review</Button>
         
        </Cart>
      </List>

    </Box>
  );

  return (
    <Box sx={{ display: "inline" }}>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer(true)}
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={totalQuantity || 0} color="error">
            <AddShoppingCartIcon sx={{ color: "#46aadd" }} />
          </Badge>
        </IconButton>

        <SwipeableDrawer
          anchor={'right'}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </Box>
  );
}
