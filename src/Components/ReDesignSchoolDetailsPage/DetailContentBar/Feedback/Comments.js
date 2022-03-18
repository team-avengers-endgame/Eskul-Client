import React, { useEffect, useState } from 'react';
import {getComments as getCommentsApi} from './api'
import Comment from './Comment';
const Comments = ({CurrentUserId}) => {
    const [backendComments,setBackendComments] = useState([])
    const rootComments = backendComments.filter(backendComment=>
        backendComment.parentId === null
    )
    const getReplies = commendId =>{
     return   backendComments.filter(backendComment=>backendComment.parentId===commendId).sort((a,b)=>new Date (a.createdAt).getTime()-new Date (b.createdAt).getTime())
    }
    useEffect(()=>{
        getCommentsApi()
        .then(data=>{
            setBackendComments(data)
        })
    },[])
    return (
        <div>
           <h1>Comment Title</h1>
           <div>
           {rootComments.map(rootComment=>(
               <Comment key={rootComment.id} comment = {rootComment} replies = {getReplies(rootComment.id)} />
           ))}
           </div>
        </div>
    );
};

export default Comments;