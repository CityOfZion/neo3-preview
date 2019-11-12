import React from 'react'

import './Manifest.scss'
import ExpandingPanel from '../expanding-panel/ExpandingPanel'
import { TX_STATE_TYPE_MAPPINGS } from '../../constants'

export const Parameter = ({ parameter }) => (
  <React.Fragment>
    <span className="param-paren">(</span>
    <div
      className="method-parameters"
      style={{
        background: TX_STATE_TYPE_MAPPINGS[parameter.type].color,
      }}
    >
      <span
        className="parameter-name"
        style={{
          border: `solid 1px ${TX_STATE_TYPE_MAPPINGS[parameter.type].color}`,
        }}
      >
        {' '}
        {parameter.name} :
      </span>
      <span>{parameter.type} </span>
    </div>{' '}
    <span className="param-paren">)</span>
  </React.Fragment>
)

export const ManifestRowContents = ({ method }) => (
  <div className="manifest-method-row-container">
    <span>{method.name} </span>
    {!!method.parameters.length &&
      method.parameters.map((parameter, i) => (
        <Parameter parameter={parameter} key={i} />
      ))}
    <span className="method-seperator">:</span>
    <p
      style={{
        background: TX_STATE_TYPE_MAPPINGS[method.returnType].color,
      }}
    >
      {method.returnType}
    </p>
  </div>
)

const Manifest = ({ manifest }) => {
  return (
    <div className="manifest-container">
      <ExpandingPanel title={manifest.abi.entryPoint.name} open={false}>
        <div className="notification-panel methods-panel">
          {/* {manifest.abi.methods.map((method, i) => ( */}
          <ManifestRowContents method={manifest.abi.entryPoint} />
          {/* ))} */}
        </div>
      </ExpandingPanel>
      <ExpandingPanel title="Methods" open={false}>
        <div className="notification-panel methods-panel">
          {manifest.abi.methods.map((method, i) => (
            <ManifestRowContents method={method} key={i} />
          ))}
        </div>
      </ExpandingPanel>
      {!!manifest.abi.events.length && (
        <ExpandingPanel title="Events" open={false}>
          <div className="notification-panel methods-panel">
            {manifest.abi.events.map((method, i) => (
              <ManifestRowContents method={method} key={i} />
            ))}
          </div>
        </ExpandingPanel>
      )}
    </div>
  )
}

export default Manifest
