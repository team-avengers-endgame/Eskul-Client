import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../../Hooks/Api";
const Description = () => {
    const [description,setDescription] = useState([])
    const { id } = useParams();
    useEffect(() => {
        fetch(`${api}/schools/${id}`)
          .then((res) => res.json())
          .then((data) => setDescription(data.data.data));
          
      }, [id]);
    return (
        <div>
             <Typography sx={{color:"#0c4b65",fontWeight:700,fontSize:"30px",lineHeight:3,letterSpacing:1}} variant="h5" gutterBottom component="div">
       Description
      </Typography>
           <Typography sx={{textAlign:"justify",mb:6,fontSize: "16px",lineHeight: 2,letterSpacing:1,color:"#0c4b65"}} variant="body1" gutterBottom>
           Our school's mission is to learn leadership, the common core, and relationships for life. Our mission is to provide a safe, disciplined learning environment that empowers all students to develop their full potential. We feel strongly about helping to build leaders that have the ability to succeed in whatever endeavor they undertake. Winning is not always the measure of success. Our students understand the "Win, win" philosophy and use it in their daily life. Common standards keeps us focused on learning appropriate content and preparing our students to graduate. Last but just as importantly, setting examples for our students of meaningful and lasting relationships will go with them throughout their lifetime.
      </Typography>
           <Typography sx={{textAlign:"justify",mb:6,fontSize: "16px",lineHeight: 2,letterSpacing:1,color:"#0c4b65"}} variant="body1" gutterBottom>
        Alternative name of our school is <span style={{ color:"#0c4b65",fontWeight:"bold", letterSpacing: "1px", }}>{description?.schoolName}</span>  which is 
            located at {description?.location}, Bangladesh, a small town. Its institute code{" "}
            <span style={{ color:"#0c4b65",fontWeight:"bold", letterSpacing: "1px", }}>(EIIN)</span>{" "}
            is{" "}
            <span style={{ color:"#0c4b65",fontWeight:"bold", letterSpacing: "1px", }}>
              {description?.EIIN}
            </span>{" "}
            It was established on{" "}
            <span style={{ color:"#0c4b65",fontWeight:"bold", letterSpacing: "1px", }}>
              {description?.founderDate}
            </span>
            .Its co-education type is{" "}
            <span style={{ color:"#0c4b65",fontWeight:"bold", letterSpacing: "1px", }}>
              {description?.schoolType}
            </span>
            . The location of the school is{" "}
            <span style={{ color:"#0c4b65",fontWeight:"bold", letterSpacing: "1px",}}>
              {description?.location}
            </span>
      </Typography>
      <Typography sx={{textAlign:"justify",mb:10,fontSize: "16px",lineHeight: 2,letterSpacing:1,color:"#0c4b65",fontWeight:400}} variant="body1" gutterBottom>
      While adopting our own unique mission stated in the introduction, we embrace the district mission of providing a safe, disciplined learning environment that empowers all students to develop their full potential. We strongly agree with and uphold the district's belief statement: "In a consistently safe and healthy environment, all students can become responsible, respectful, and resourceful. We believe students learn best when actively engaged in the learning process. Education is a collaborative partnership involving school, family, and community." At Berry Elementary School, we strive to build lasting relationships among students and staff that encourage open discussion and provide activities that develop our students' strengths.
      </Typography>
        </div>
    );
};

export default Description;