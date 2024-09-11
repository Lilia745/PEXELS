import React from 'react'
import Loader from './Loader'

function Home({ images, loader, setSaved, saved }) {
    const saveImg = (img) => {
        let flag = true
        if (saved !== null && saved.length > 0) {
            for (let i = 0; i < saved.length; i++) {
                if (saved[i].id === img.id) {
                    flag = false
                    alert('image alredy saved')
                    break
                }

            }
        }
         if (flag) {
            setSaved([...saved, img])
            alert('Image saved')
        }
    }
    return (
            <div id='top' className='box'>
                {
                    loader ? (<Loader />) : (
                        <div className='root'>
                            {
                                images.map((img) => {
                                    return (
                                        <div key={img.id} className='items' onClick={() => saveImg(img)}>
                                            <img src={img.src.medium} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }

                {images.length !== 0 && (
                    <button className='button' href="#top">
                        <a href="#top">Back To Top</a>
                    </button>
                )}
            </div>
    )
}

export default Home