import React from 'react'

function Home({images}) {
  return (
    <div className='root'>
        {
            images.map((img)=>{
                return(
                    <div key={img.id} className='items'>
                        <img src={img.src.medium} alt="" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home