import React from 'react'

function PopupRow({name, color}) {
  return (

      <div className='font-color'>
        <p>{name}</p>
        <div className='right-side'>
        <p>{color}</p>
        <span className='spani' style={{backgroundColor: color}}></span>
        </div>
      </div>
  );
}

export default PopupRow
