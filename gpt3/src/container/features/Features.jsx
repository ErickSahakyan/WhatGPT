import React from 'react'
import './features.css'

const featuresData = [
  {
    title: '',
    text: ''
  },
  {
    title: '',
    text: ''
  },
  {
    title: '',
    text: ''
  },
  {
    title: '',
    text: ''
  },
]


const Features = () => {
  return (
	<div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'></h1>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Features/>
        ))}
      </div>
  </div>
  )
}

export default Features