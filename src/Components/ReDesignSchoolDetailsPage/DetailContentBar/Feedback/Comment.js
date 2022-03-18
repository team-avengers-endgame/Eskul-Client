import React from 'react';

const Comment = ({comment,replies}) => {
    return (
        <div>
            <div><img style={{width:"100px",height:"100px"}} src="https://i.ibb.co/0s0DTQM/handsome-confident-smiling-man-with-hands-crossed-chest.jpg" alt="" /></div>
            <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{comment?.createdAt}</div>
          <div>{comment?.body}</div>
          {replies.length > 0 && (
              <div className="replies">
                  {replies.map((reply) => {
                      <Comment comment = {reply} key ={reply.id} replies = {[]}/>
                  })}
              </div>
          )}
        </div>
        </div>
        </div>
    );
};

export default Comment;