const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const SSLCommerzPayment = require("sslcommerz-lts");
const Order = require("../models/orderModel");

require("dotenv").config();
// all order products get ==============================================
router.get("/allOrder", async (req, res) => {
  const products = await Order.find({});
  res.send(products);
});
// Delete manage all product ----------
router.delete("/manageAllOrderDelete/:id", async (req, res) => {
  const result = await Order.findByIdAndDelete(req.params.id);
  res.send(result);
});
// my order delete ----------
router.delete("/myOrderDelete/:id", async (req, res) => {
  const result = await Order.findByIdAndDelete(req.params.id);
  res.send(result);
});
// order Product ==================================================
router.post("/addToCartProduct", async (req, res) => {
  const product = req.body;
  const result = await Order.create(product);
  res.json(result);
});
// email get my Order==============================================
router.get("/myOrder/:email", async (req, res) => {
  const email = req.params.email;
  const query = { cus_email: email };
  const myOrder = await Order.find(query);
  res.send(myOrder);
});
// approve api-------------------
router.patch("/statusUpdate/:id", async (req, res) => {
  const status = req.body.status;
  const result = await Order.findByIdAndUpdate(req.params.id, { status });
  res.send(result);
});
//sslcommerz init
router.post("/init", async (req, res) => {
  const data = {
    total_amount: req.body.total_amount,
    currency: req.body.currency,
    tran_id: uuidv4(),
    success_url: "http://localhost:8000/api/success",
    fail_url: "http://localhost:8000/api/fail",
    cancel_url: "http://localhost:8000/api/cancel",
    ipn_url: "http://localhost:8000/api/ipn",
    shipping_method: "Courier",
    product_name: "req.body.product_name",
    product_category: "Electronic",
    product_profile: "req.body.product_profile",
    cus_name: req.body.cus_name,
    cus_email: req.body.cus_email,
    date: req.body.date,
    status: req.body.status,
    cartBooks: req.body.cartBooks,
    product_image: "https://i.ibb.co/t8Xfymf/logo-277198595eafeb31fb5a.png",
    cus_add1: req.body.cus_add1,
    cus_add2: "Dhaka",
    cus_city: req.body.cus_city,
    cus_state: req.body.cus_state,
    cus_postcode: req.body.cus_postcode,
    cus_country: req.body.cus_country,
    cus_phone: req.body.cus_phone,
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
    multi_card_name: "mastercard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
  };
  const order = await Order.create(data);

  const sslcommer = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASS,
    false
  ); //true for live default false for sandbox
  sslcommer.init(data).then((data) => {
    //process the response that got from sslcommerz
    //https://developer.sslcommerz.com/doc/v4/#returned-parameters

    if (data.GatewayPageURL) {
      res.json(data.GatewayPageURL);
    } else {
      return res.status(400).json({
        message: "Payment session failed",
      });
    }
  });
});

router.post("/success", async (req, res) => {
  const result = await Order.updateOne(
    { tran_id: req.body.tran_id },
    {
      $set: {
        val_id: req.body.val_id,
      },
    }
  );
  res.status(200).redirect(`http://localhost:3000/success/${req.body.tran_id}`);
});
router.post("/fail", async (req, res) => {
  const result = await Order.deleteOne({
    tran_id: req.body.tran_id,
  });
  res.status(400).redirect("http://localhost:3000");
});
router.post("/cancel", async (req, res) => {
  const result = await Order.deleteOne({
    tran_id: req.body.tran_id,
  });
  res.status(300).redirect("http://localhost:3000");
});
router.post("/ipn", (req, res) => {
  res.send(req.body);
});

router.get("/order/:tran_id", async (req, res) => {
  const id = req.params.tran_id;
  const result = await Order.findOne({ tran_id: id });
  res.json(result);
});
module.exports = router;
