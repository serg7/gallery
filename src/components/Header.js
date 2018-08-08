import React from 'react'
import TopMenu from './Common/TopMenu/TopMenu'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='title'>
          <h1><Link to='/'>Борсук Юрий</Link></h1>
          <span>cайт художника</span>
        </div>

        <TopMenu />
      </div>
    )
  }
}