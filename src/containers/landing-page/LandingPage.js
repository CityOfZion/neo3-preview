import React from 'react'

import List from '../../components/list/List'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import withBlockData from '../../hoc/withBlockData'

import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    const columns = [
      { name: 'Height', accessor: 'index' },
      { name: 'Size', accessor: 'size' },
      { name: 'Hash', accessor: 'hash' },
      { name: 'Created On', accessor: 'time' },
    ]

    const { filteredBlocks, isLoading } = this.props

    return (
      <div id="landing-page">
        <div id="call-to-action">
          <h1>NEO3 Download</h1>
          <div id="call-to-action-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum placerat arcu a felis porta, a fringilla augue blandit.
              Proin maximus at libero sit amet.
            </p>
            <div id="call-to-action-button-container">
              <Button secondary>Get Started</Button>
              <span> or skip the tutorial</span>
              <Button>Download Now</Button>
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

        <div className="header-and-link">
          <h1> Last 5 Blocks</h1>
          <a> View all blocks</a>
        </div>

        <List
          handleRowClick={row =>
            // NOTE: this is beause querying the API by block hash is currently not working
            this.props.history.push(
              `/blocks/${
                this.props.blocks.find(block => block.hash === row.hash).height
              }`,
            )
          }
          columns={columns}
          data={filteredBlocks}
        ></List>

        <h1> NEO3 Features</h1>

        <h1> Recent Articles</h1>
      </div>
    )
  }
}

const LandingPageWithBlockData = withBlockData(LandingPage)

export default LandingPageWithBlockData
