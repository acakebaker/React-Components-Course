import React from 'react';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
        <h3>Warning!</h3>
        <p>Are you sure you want this?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          name='Alex' 
          time='Today at 1:00 PM' 
          text='Nice blog post!' 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          name='Sam' 
          time='Yesterday at 8:00 PM' 
          text='I love this blog so much!' 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          name='Dylan' 
          time='Yesterday at 11:00 AM' 
          text='You have a large cock Alex!!! I fucking love how big and juicy it is man!' 
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
