import React from 'react';
import { AvatarGenerator } from 'random-avatar-generator';

const CommentDetail = ({ name, time, text }) => {
  const generator = new AvatarGenerator();

  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={generator.generateRandomAvatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>{name}</a>
        <div className='metadata'>
          <span className='date'>{time}</span>
        </div>
        <div className='text'>{text}</div>
      </div>
    </div>
  )
}

export default CommentDetail;
