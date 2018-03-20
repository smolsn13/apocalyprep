import React from 'react';

export const Home = props => {
  return (
    <div className='row'>
      <div className='row'>
        <div className='col s12'>
          <video id="background-video" loop autoPlay>
            <source src='img/starrySky.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
      <div className='row'>
        <form className='col s12' action=''>
          <div className='row'>
            <div className='col s3'></div>
            <div className='input-field col s4'>
              <input placeholder='Enter your city' id='city' type='text' className='validate formInput' />
            </div>
            <div className='input-field col s2'>
              <input placeholder='State' id='state' type='text' className='validate formInput' />
            </div>
            <div className='col s3'></div>
          </div>
          <div className='row'>
            <div className='col s5'></div>
              <i className="material-icons md-48">navigate_next</i>
            <div className='col s5'></div>
          </div>
        </form>
      </div>
    </div>
  )
}
