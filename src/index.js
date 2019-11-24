import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from './approvalCard';

function App(){
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    imageSrc = {faker.image.avatar()} 
                    author = "sam" 
                    timeAgo = "Today at 4:45PM" 
                    comment = "looks interesting!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    imageSrc = {faker.image.avatar()} 
                    author = "jane" 
                    timeAgo = "Today at 5:45PM" 
                    comment = "looks beautifull!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    imageSrc = {faker.image.avatar()} 
                    author = "julia" 
                    timeAgo = "Yesterday at 6:45PM" 
                    comment = "looks great!" 
                />
            </ApprovalCard>
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('#root'));