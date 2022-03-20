import { Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from "react-google-maps"

function Map () {
  
  const [selected,setSelected] = useState([])
  useEffect(()=>{
    fetch("/mapData.json")
    .then(res=>res.json())
    .then(data=>setSelected(data))
  },[])
  return (
  
<GoogleMap 
  defaultZoom = {7} 
  defaultCenter = {{ lat: 23.459955402310467, lng: 91.1824880265728 }}

  >
    {selected.map((dt)=>(
      <Marker 
      key={dt.id}
      position = {{
        lat : dt.geometry.coordinates[0],
        lng : dt.geometry.coordinates[1]
      }}
      
      />

    
    ))}


  </GoogleMap>
  )
  
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
export default function OurMap() {
  
  return (
    <Container sx={{width:"100vw",height:"100vh",mb:{xm:30,sm:6,md:6}}}>
       <Typography
            sx={{ fontWeight: "500", fontSize: {xm:"15px",sm:"25px",md:"35px"},pb:2, color: "#3B4757",textAlign:"center" }}
            variant="h4"
            gutterBottom
            component="div"
          >
           Location of Our <span style={{ color: "#46AADC" }}>Transport Service</span> {" "} <br />
          Provided In Google Map
          </Typography>
     
      <WrappedMap  googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAo7YpydfLtQ60NLuitlPMBueuF-P7r9Wc`}
    loadingElement = {<div style={{height:"60%"}}/>} 
    containerElement = {<div style={{height:"80%"}}/>} 
    mapElement = {<div style={{height:"100%"}}/>} />
    </Container>
  )
}














