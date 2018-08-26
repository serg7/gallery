import React from 'react'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router-dom'

import { items } from '../images'

const masonryOptions = {
    transitionDuration: 1000
}

//const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Content extends React.Component {
    render() {
        //const pics = [...Array(10).keys()].slice(1)

        const childElements = items.map((item, key) => {
            //debugger
            return (
                <div className="grid tile" key={key}>
                    <Link to={`/image/${item.id}`} >
                        <figure className="effect-selena">
                            <img src={`/images/mini/${item.id}.jpg`} />
                            <figcaption>
                                <div>
                                    <p>{item.title}</p>
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
                onImagesLoaded={this.handleImagesLoaded}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            //imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        )
    }
}

export default Content