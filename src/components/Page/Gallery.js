import React from 'react'
import Masonry from 'react-masonry-component'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { types } from '../../images'    // eslint-disable-line no-unused-vars


const masonryOptions = {
  transitionDuration: 1000
}

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const Gallery = (props) => {
  const { match: { params: { type } }} = props // eslint-disable-line no-unused-vars

  debugger //eslint-disable-line

    const childElements = types[type].map((element) => {

       return (
            <div className="grid tile" key={element}>
                <Link to={`/image/${element}`} >
                    <figure className="effect-selena">
                        <img src={`/images/mini/${element}.jpg`} />
                        <figcaption>
                            <div>
                            {/* <h2>Nice <span>Lily</span></h2> */}
                                <p>Lily likes to play with crayons and pencils</p>
                            </div>
                        </figcaption>			
                 </figure>
                </Link>
            </div>
        )
    })
        
    return (
      <Masonry
          className={'content'} // default ''
          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
          {childElements}
      </Masonry>
  )
}

Gallery.propTypes = {
  match: PropTypes.object
}

export default Gallery