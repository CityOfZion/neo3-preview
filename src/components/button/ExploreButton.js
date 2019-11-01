import React from 'react'
import Button from './Button'

import chevronDown from '../../images/chevron-down.svg'
import chevronUp from '../../images/chevron-up.svg'

import './ExploreButton.scss'

export default ({ handleOpen }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Button
      onClick={() => {
        setIsOpen(!isOpen)
        handleOpen(!isOpen)
      }}
      classes={{
        'explore-button': true,
      }}
    >
      {isOpen ? (
        <div>
          Close <img src={chevronUp} alt="Close" />
        </div>
      ) : (
        <div>
          Explore <img src={chevronDown} alt="Explore" />
        </div>
      )}
    </Button>
  )
}
