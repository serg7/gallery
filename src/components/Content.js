import React from 'react'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router-dom'

const masonryOptions = {
    transitionDuration: 1000
}

//const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Content extends React.Component {
    render() {
        const pics = [...Array(10).keys()].slice(1)

        //debugger // eslint-disable-line

        const childElements = pics.map((element) => {
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