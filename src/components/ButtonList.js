import React from 'react';
import Button from './Button';
import {v4 as uuid} from 'uuid';

const ButtonList = () => {

  const buttons = ['All','Fitness','Investing','Gaming','Comedy','Music','Football','Cricket','Motivation','News','POP Music','HIP HOP']

  return (
    <div className='mx-6'>
      {buttons.map(name=><Button key ={uuid()} name={name}/>)}
    </div>
  )
}

export default ButtonList