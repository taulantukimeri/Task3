import React from 'react'
import "./Popup.css"
import PopupRow from './PopupRow'

function Popup(props) {

  const innerPopup = [
    {
      name:'Font Color',
      color:'#444444'
    },

    {
      name:'Background Color',
      color:'#FFFFFF'
    },

    {
      name:'Button Color',
      color:'#2072EF'
    },

    {
      name:'Button Border Color',
      color:'#2072EF'
    },

    {
      name:'Buttons Mouseover Color',
      color:'#0053D1'
    }
    

  ]
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
    <div className='theme'>
      <div className='heading'>
      <h3>Theme Color</h3>
      <h5 className='change-theme'>Change Theme </h5>
      </div>
      {innerPopup.map((row,) => (
        
      <PopupRow  
        name={row.name}
        color={row.color}
      />
      ))}

  </div>
        <div className='buttons'>
        
        <button onClick={() => props.setTrigger(false)}>Cancel</button>
        <button className='save'>Save</button>
        </div>
        {props.children}
      </div>
    </div>
    
  ) : '';
}

export default Popup
