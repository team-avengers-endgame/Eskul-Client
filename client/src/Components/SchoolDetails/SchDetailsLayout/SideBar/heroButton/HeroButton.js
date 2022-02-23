// import React from 'react';

// const HeroButton = () => {

//     }
//     return (
//         <div>
//
//         </div>
//     );
// };

// export default HeroButton;

import { Button } from "@mui/material";
import React from "react";

const HeroButton = () => {
  return (
    <div>
      <Button
        sx={{
          mt: {
            xs: 8,
            sm: 8,
            md: 20,
          },
          fontWeight: "bold",
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(120deg, #42679B 0%, #B904F2 100%)",
          borderRadius: "20px 20px 20px 20px",
          lineHeight: "18px",
          fill: "#FFFFFF",
          color: "#FFFFFF",
          fontFamily: "Sans-serif",
          fontSize: "15px",
          textTransform: "capitalize",
          letterSpacing: "0px",
          borderStyle: "solid",
          borderWidth: "1px 1px 1px 1px",
          borderColor: "#01479B",
          width: "100%",
          display: "inline-block",
          padding: "12px 24px",
          textAlign: "center",
          transition: "all 0.5",
          cursor: "pointer",
        }}
      >
        Donate Old Books
      </Button>
    </div>
  );
};

export default HeroButton;
