import { useState } from 'react'

const useList = (init) => {

    // then initialize the list
    const [items, setItems] = useState(init)

  return ({
    items,
    removeItem(item){
         // first, we need to create a constant called 'filterItems' where we are gonna store all the data
        // then we need to use the list 'items' in order to filter that list: after that we store the data in the constant that we've created call 'filterItems'
        const filterItems = items.filter(i => i.name !== item)
        setItems(filterItems)
    },
    saveItem(index, newValue){
        const copyItems = [...items]
        copyItems[index].name = newValue
        setItems(copyItems)
    },
    removeAllItemsWithCondition() {
        // first, we need to create a constant called 'filterItems' where we are gonna store all the data
        // then we need to use the list in order to filter that list: after that we store the data in the constant that we've created call 'filterItems'
        const filterItems = items.filter(i => i.calories < 50)
        setItems(filterItems)
    }

  }
  )
}

export default useList