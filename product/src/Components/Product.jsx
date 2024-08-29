import React from 'react'
import "../App.css"
function Product({product}) {
    const {id,image,category,title,price} = product
    
  return (
    <div>
        <div className='root'>
            <div>
                <div className='item'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Product