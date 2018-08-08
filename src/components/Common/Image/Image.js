import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'

import { items } from '../../../images'

const Image = ({ match }) => {
    const { params } = match
    const item = items[params.id - 1]

    //debugger // eslint-disable-line

    if (!item) return null
    
    return (
        <div className="content">
            <div className='content-left'>
                 {/* <img src={`/images/fullsize/${params.id}.jpg`} /> */}

              <ImageGallery 
                items={item.images}
                showPlayButton={false}
                showBullets={false}
                disableArrowKeys={true}
                showNav={false}
                //onClick={}
               />
            </div>
            <div className='content-right'>
                <div className='top'>
                    <h2>Donec ullamcorper porta {params.id}</h2>
                    <h5>Description</h5>
                    <div className='description'>
                        <div className='keywords'>
                          Keywords: 
                            <span className='value'>
                                {item.description.keywords}
                            </span>
                        </div>
                        <hr />

                        <div className='keywords'>
                            Subject: 
                            <span className='value'>{item.description.subject}</span>
                        </div>
                        <hr />

                        <div className='keywords'>
                            Styles: 
                            <span className='value'>{item.description.styles}</span>
                        </div>
                        <hr />

                        <div className='keywords'>
                            Mediums: 
                            <span className='value'>{item.description.mediums}</span>
                        </div>
                        <hr />

                        <div className='keywords'>
                            Material:
                            <span className='value'>{item.description.material}</span>
                        </div>
                        <hr />

                        <div className='keywords'>
                            Size: 
                            <span className='value'>{item.description.size}</span>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <button>Купить</button>
                </div>
            </div>

        </div>
    )
}

Image.propTypes = {
    id: PropTypes.number,
    match: PropTypes.object
}

export default Image