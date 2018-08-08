import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Content from './components/Content'
import Gallery from './components/Page/Gallery'
import About from './components/Page/About'
import Contacts from './components/Page/Contacts'
import Image from './components/Common/Image/Image'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className='page'>
            <Header />
            <Route exact path='/' component={Content} />  
            <Route exact path='/gallery/:type' component={Gallery} />
            <Route exact path='/image/:id' component={Image} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contacts' component={Contacts} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
