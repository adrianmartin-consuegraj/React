import React from 'react'
import './Item.css'

const Item = (props) => {

    //* you gotta link the onClick method with the props, also the name attribute, so you can pass them to the Parent Component 'ItemDisplay'
    return (
        <>
            <div className='item-style'>
                {props.editable ? 
                <input type="text" 
                onKeyPress={(e) => props.onKeyPress(e, props.index)}
                defaultValue={props.item.name} /> : 
                <p onDoubleClick={props.onDoubleClick}> <b>Name: </b> {props.item.name}</p>
                }
                <p> <b> Calories: </b> {props.item.calories} </p>
                <button name={props.item.name} onClick={props.onClick}>Remove me!</button>
            </div>
            
        </>
    )
}

export default Item