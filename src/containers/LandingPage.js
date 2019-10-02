import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchBlocks } from '../actions/blockActions'
import List from '../components/list/List'
import Button from '../components/button/Button'
import Card from '../components/card/Card'

import './LandingPage.css'
import moment from 'moment'

const massageBlockData = block => {
  return {
    ...block,
    time: moment(block.time).format('MM-DD-YYYY | MM:HH:SS'),
    index: () => (
      <div style={{ color: 'var(--green)' }}>
        {block.index.toLocaleString()}
      </div>
    ),
    size: `${block.size} bytes`,
  }
}

const mapStateToProps = ({ blocks }) => ({
  filteredBlocks:
    (blocks.list &&
      blocks.list.length &&
      blocks.list.slice(0, 5).map(massageBlockData)) ||
    [],
  isLoading: blocks.isLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchBlocks: index => dispatch(fetchBlocks()),
})

const LandingPage = ({ fetchBlocks, filteredBlocks }) => {
  useEffect(() => {
    fetchBlocks()
  }, [])

  const columns = [
    { name: 'Height', accessor: 'index' },
    { name: 'Size', accessor: 'size' },
    { name: 'Hash', accessor: 'hash' },
    { name: 'Created On', accessor: 'time' },
  ]

  return (
    <div id="landing-page">
      <div id="call-to-action">
        <h1>NEO3 Download</h1>
        <div id="call-to-action-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div id="call-to-action-button-container">
            <Button>Download NEO 3.0 CLI</Button>
          </div>
        </div>
      </div>

      <h1> Statistics</h1>
      <div id="statistics-card-container">
        <Card value="25,036,425" detail="Total Transactions" />
        <Card value="25,036,425" detail="Total Transactions" />
        <Card value="25,036,425" detail="Total Transactions" />
        <Card value="25,036,425" detail="Total Transactions" />
      </div>

      <div class="header-and-link">
        <h1> Last 5 Blocks</h1>
        <a> View all blocks</a>
      </div>

      <List
        handleRowClick={row => console.log(row)}
        columns={columns}
        data={filteredBlocks}
      ></List>

      <h1> NEO3 Features</h1>

      <h1> Recent Articles</h1>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage)
