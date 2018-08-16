import React from 'react'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router-dom'

const masonryOptions = {
    transitionDuration: 1000
}

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Content extends React.Component {
    render() {
        const pics = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34
        ]

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
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        )
    }
}

export default Content