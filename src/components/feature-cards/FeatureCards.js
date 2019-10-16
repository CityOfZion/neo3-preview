import React from 'react'

import dbft2 from '../../images/features/dbft2.svg'
import id from '../../images/features/id.svg'
import smartContract from '../../images/features/smart-contract.svg'
import vm from '../../images/features/vm.svg'

import './FeatureCards.scss'
import Button from '../button/Button'

const features = [
  {
    title: 'dBFT2.0',
    description:
      'A consensus algorithm with high stability, high TPS and single block finality.',
    image: dbft2,
  },
  {
    title: 'NeoVM',
    description: 'A lightweight, cross-platform and scalable virtual machine.',
    image: vm,
  },
  {
    title: 'SmartContract',
    description:
      'A smart contract system with support for multiple languages, cross-platform compatibility and parallel execution.',
    image: smartContract,
  },
  {
    title: 'NeoID',
    description:
      'Returns data sovereignty back to the user, transforms "trust or not" into "how much trust", allows users to customize trust evaluation models flexibly.',
    image: id,
  },
]

export default () => {
  return (
    <div id="feature-card-container">
      {features.map(feature => (
        <div className="feature-card">
          <div className="feature-card-title-container">
            <img src={feature.image} alt="" />
            <h1> {feature.title}</h1>
          </div>
          <p>{feature.description}</p>
          <Button secondary>Learn More</Button>
        </div>
      ))}
    </div>
  )
}
