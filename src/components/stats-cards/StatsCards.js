import React from 'react'
import { isEmpty } from 'lodash-es'

import Card from '../card/Card'
import withStatsData from '../../hoc/withStatsData'

const StatsCards = ({ stats }) => {
  if (!isEmpty(stats)) {
    const { addresses, contracts, height, transactions } = stats
    const formatNumber = num => num.toLocaleString()
    return (
      <div id="statistics-card-container">
        <Card value={formatNumber(addresses)} detail="Total Addresses" />
        <Card value={formatNumber(height)} detail="Blocks Produced" />
        <Card value={formatNumber(transactions)} detail="Total Transactions" />
        <Card value={formatNumber(contracts)} detail="Contracts Deployed" />
      </div>
    )
  }
  return (
    <div id="statistics-card-container">
      <Card value="" detail="" />
      <Card value="" detail="" />
      <Card value="" detail="" />
      <Card value="" detail="" />
    </div>
  )
}

const WithStats = withStatsData(StatsCards)

export default WithStats
