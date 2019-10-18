import React from 'react'
import { isEmpty } from 'lodash-es'

import Card from '../card/Card'
import withStatsData from '../../hoc/withStatsData'

import './StatsCards.scss'

const StatsCards = ({ stats }) => {
  if (!isEmpty(stats)) {
    const { addresses, contracts, height, transactions } = stats
    const formatNumber = num => num.toLocaleString()
    return (
      <React.Fragment>
        <div id="statistics-card-container" className="stats-as-row">
          <Card value={formatNumber(addresses)} detail="Total Addresses" />
          <Card value={formatNumber(height)} detail="Blocks Produced" />
          <Card
            value={formatNumber(transactions)}
            detail="Total Transactions"
          />
          <Card value={formatNumber(contracts)} detail="Total Contracts" />
        </div>

        <div id="statistics-card-container" className="stats-as-columns">
          <div className="column">
            <Card value={formatNumber(addresses)} detail="Total Addresses" />
            <Card value={formatNumber(height)} detail="Blocks Produced" />
          </div>
          <div className="column">
            <Card
              value={formatNumber(transactions)}
              detail="Total Transactions"
            />
            <Card value={formatNumber(contracts)} detail="Total Contracts" />
          </div>
        </div>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <div id="statistics-card-container" className="stats-as-row">
        <Card value="" detail="" />
        <Card value="" detail="" />
        <Card value="" detail="" />
        <Card value="" detail="" />
      </div>
      <div id="statistics-card-container" className="stats-as-columns">
        <div className="column">
          <Card value="" detail="" />
          <Card value="" detail="" />
        </div>{' '}
        <div className="column">
          <Card value="" detail="" />
          <Card value="" detail="" />
        </div>
      </div>
    </React.Fragment>
  )
}

const WithStats = withStatsData(StatsCards)

export default WithStats
