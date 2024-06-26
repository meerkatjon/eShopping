import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import { baseUrl } from '../../url'

const NewCollections = () => {
  const [new_collection, setNewCollection] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/newcollections`)
      .then((res) => res.json())
      .then((data) => setNewCollection(data))
  }, [])
  return (
    <div className='newcollections'>
      <h1 id="newColl">New Collections</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
            old_price={item.old_price} />
        })}
      </div>

    </div>
  )
}


export default NewCollections