import { useState } from 'react'
import Item from './Item'
import './ItemDisplay.css'
import useList from './useList'

// first create the list of items
const initList = [
    { name: "tomato", calories: 20 },
    { name: "rice", calories: 30 },
    { name: "candy", calories: 100 }
]

const ItemDisplay = () => {

    // then initialize the list
    const itemList = useList(initList)

    //! this is for adding the feature of editing the component name 
    const [editable, setEditable] = useState(false)

    //! this arrow function is to make the component editable
    const makeEditaleHandle = () => {
        setEditable(true)
    }


    // methods of the Hook 'useList'
    const removeItemHandle = (e) => {
        itemList.removeItem(e.target.name)
    }

    const keyPressHandle = (e, index) => {
        if(e.key === "Enter"){
            setEditable(!editable)
            itemList.saveItem(index, e.target.value)
        }
    }

    const removeAllItemsWithCondition = () => {
        itemList.removeAllItemsWithCondition()
    }


    return (
        <>
            <h3>■ Lists</h3>
            <div className='item-size'>
                {itemList.items.map( (i, k) => {
                    return (
                        // we need to provide a key for eac 'Item' component in order to make them unique
                        //! if you don't give them an unique key there will be an error if you delete a component and create a new one:
                        //! imagine deleting key 3 and then createing another component new: this new component will have the key 3 so its value is going to be already stored from the other component
                        <Item 
                        key={`${k}${i.name}${i.calories}`} 
                        item={i} 
                        onClick={removeItemHandle}
                        editable={editable}
                        onDoubleClick={makeEditaleHandle}
                        onKeyPress={keyPressHandle}
                        index={k}
                        />
                        //* ↑ you have to add the arrow function 'removeItemHandle' in the onClick attribute so now when you go to the Child Component 'Item' 
                        //*you can create and button with an attribute which references at the arrow function here created: the one called 'removeItemHandler'. Why? Simply because the Child Component inherits the 'onClick' attribute by 'props'
                    )
                    })
                }
            </div>
                <p> → Click here to remove all items with more than 50 calories in them! </p>
                <button className="remove-botton" onClick={removeAllItemsWithCondition}>Remove unhealthy items</button>
        </>
    )
}

export default ItemDisplay