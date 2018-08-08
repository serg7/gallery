import React from 'react'
import PropTypes from 'prop-types'
// import {
//     Card, 
//     CardImg,
//     CardText, 
//     CardBody,
//     CardTitle, CardSubtitle
//   } from 'reactstrap'
import { Link } from 'react-router-dom'


export const Tile = (props) => {
    return (
      <div className="grid tile" key={props.key}>
        <Link to={`/image/${props.image}`} >
          <figure className="effect-selena">
            <img src={`/images/mini/${props.image}.jpg`} />
            <figcaption>
                <div>
                    {/* <h2>Nice <span>Lily</span></h2> */}
                    <p>Lily likes to play with crayons and pencils</p>
                </div>
                <a href="#">View more</a>
            </figcaption>			
          </figure>
        </Link>
      </div>
    )
} 

Tile.propTypes = {
  id: PropTypes.number,
  key: PropTypes.number,
  image: PropTypes.number
}

export default Tile