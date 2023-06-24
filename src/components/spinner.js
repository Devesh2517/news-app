import React, { Component } from 'react'
import Loading from './loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="Loading" />
      </div>
    )
  }
}
