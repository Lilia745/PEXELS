    import React, { useContext }  from 'react'
    import { ProductContext } from '../Contexts/ProductContext'
import Product from '../Components/Product'
    
    function Home() {
        const {products} = useContext(ProductContext)
        
        const filteredProducts = products.filter((item)=>{
            return(
                item.category === "men's clothing" || item.category === "women's clothing"
            )
        })
        
      return (
        <div>
           <section>
            <div>
                <div>
                {
                    filteredProducts.map((product)=>{
                     return(
                        <Product product={product} key={product.id}/>
                     )
                    })
                }
                </div>
            </div>
           </section>
        </div>
      )
    }
    
    export default Home