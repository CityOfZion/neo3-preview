import React from 'react'

import dbft2 from '../../images/features/dbft2.svg'
import id from '../../images/features/id.svg'
import smartContract from '../../images/features/smart-contract.svg'
import vm from '../../images/features/vm.svg'
import Modal from 'react-modal'
import modalClose from '../../images/modal-close.svg'

import './FeatureCards.scss'
import Button from '../button/Button'

const features = [
  {
    title: 'dBFT2.0',
    description:
      'A consensus algorithm with high stability, high TPS and single block finality.',
    image: dbft2,
    detailedDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ipsum sit amet ligula tristique viverra. Integer et lectus nunc. In hac habitasse platea dictumst. Cras eu gravida massa. Morbi sit amet vestibulum magna. Phasellus mattis massa id facilisis fringilla. Proin venenatis tincidunt massa et porttitor. Integer erat nulla, egestas id rhoncus cursus, vehicula non tellus. Etiam sit amet interdum arcu. Vivamus varius pellentesque dolor, eget tristique nunc. ',
  },
  {
    title: 'NeoVM',
    description: 'A lightweight, cross-platform and scalable virtual machine.',
    image: vm,
    detailedDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ipsum sit amet ligula tristique viverra. Integer et lectus nunc. In hac habitasse platea dictumst. Cras eu gravida massa. Morbi sit amet vestibulum magna. Phasellus mattis massa id facilisis fringilla. Proin venenatis tincidunt massa et porttitor. Integer erat nulla, egestas id rhoncus cursus, vehicula non tellus. Etiam sit amet interdum arcu. Vivamus varius pellentesque dolor, eget tristique nunc. ',
  },
  {
    title: 'SmartContract',
    description:
      'A smart contract system with support for multiple languages, cross-platform compatibility and parallel execution.',
    image: smartContract,
    detailedDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ipsum sit amet ligula tristique viverra. Integer et lectus nunc. In hac habitasse platea dictumst. Cras eu gravida massa. Morbi sit amet vestibulum magna. Phasellus mattis massa id facilisis fringilla. Proin venenatis tincidunt massa et porttitor. Integer erat nulla, egestas id rhoncus cursus, vehicula non tellus. Etiam sit amet interdum arcu. Vivamus varius pellentesque dolor, eget tristique nunc. ',
  },
  {
    title: 'NeoID',
    description:
      'Returns data sovereignty back to the user, transforms "trust or not" into "how much trust", allows users to customize trust evaluation models flexibly.',
    image: id,
    detailedDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ipsum sit amet ligula tristique viverra. Integer et lectus nunc. In hac habitasse platea dictumst. Cras eu gravida massa. Morbi sit amet vestibulum magna. Phasellus mattis massa id facilisis fringilla. Proin venenatis tincidunt massa et porttitor. Integer erat nulla, egestas id rhoncus cursus, vehicula non tellus. Etiam sit amet interdum arcu. Vivamus varius pellentesque dolor, eget tristique nunc. ',
  },
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    opacity: 1,
    border: 'none',
    background: '#1F1F4B',
    width: '50vw',
    minWidth: '275px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: { backgroundColor: 'rgba(0, 0, 51, .80)' },
}

export default class FeatureCards extends React.Component {
  state = {
    featureModalOpen: false,
    selectedFeatureTitle: null,
  }

  closeModal = () => {
    this.setState({ featureModalOpen: false })
  }

  render() {
    const { selectedFeatureTitle } = this.state
    const selectedFeature = features.find(
      feature => feature.title === selectedFeatureTitle,
    )
    console.log({ selectedFeature })
    return (
      <React.Fragment>
        {selectedFeature && (
          <Modal
            isOpen={this.state.featureModalOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
          >
            <div className="feature-modal-container">
              <img
                id="close-modal-button"
                src={modalClose}
                alt="close"
                onClick={this.closeModal}
              />
              <div className="feature-card-title-container">
                <img src={selectedFeature.image} alt="" />
                <h1> {selectedFeature.title}</h1>
                <p>{selectedFeature.detailedDescription}</p>
              </div>
            </div>
          </Modal>
        )}
        <div id="feature-card-container">
          {features.map(feature => (
            <div key={feature.title} className="feature-card">
              <div className="feature-card-title-container">
                <img src={feature.image} alt="" />
                <h1> {feature.title}</h1>
              </div>
              <p>{feature.description}</p>
              <Button
                secondary
                onClick={() =>
                  this.setState({
                    featureModalOpen: true,
                    selectedFeatureTitle: feature.title,
                  })
                }
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
