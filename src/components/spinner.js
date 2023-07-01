import React, { Component } from 'react'
import Loading from './loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img  className='my-3' src={Loading} alt="Loading" width={'50px'}/>
      </div>
    )
  }
}
