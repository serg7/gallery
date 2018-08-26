import React from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { items } from '../../../images'

class Image extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoIndex: 0,
            isOpen: false,
        }
    }

    render() {
        const { params } = this.props.match
        const item = items[params.id - 1]
        const images = item.images.map((item) => {
            return item.original
        })
        const { photoIndex, isOpen } = this.state

        //debugger // eslint-disable-line

        if (!item) return null

        return (
            <div className="content">
                <div className='content-left'>
                    <img src={`/images/fullsize/${params.id}.jpg`} onClick={() => this.setState({ isOpen: true })} />
                    <div>

                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length,
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}
                    </div>

                </div>
                <div className='content-right'>
                    <div className='top'>
                        <h2>{item.title}</h2>
                        <h5>Описание:</h5>
                        <div className='description'>
                            <div className='keywords'>
                                Тема:
                                <span className='value'>{item.description.subject}</span>
                            </div>
                            <hr />

                            <div className='keywords'>
                                Стиль:
                                <span className='value'>{item.description.styles}</span>
                            </div>
                            <hr />

                            <div className='keywords'>
                                Материалы:
                                <span className='value'>{item.description.mediums}</span>
                            </div>
                            <hr />

                            <div className='keywords'>
                                Год:
                                <span className='value'>{item.year}</span>
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
}

Image.propTypes = {
    id: PropTypes.number,
    match: PropTypes.object
}

export default Image