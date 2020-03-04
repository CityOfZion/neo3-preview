import React from 'react'

import List from '../../components/list/List'
import Button from '../../components/button/Button'
import withBlockData from '../../hoc/withBlockData'
import { Link } from 'react-router-dom'
import './LandingPage.scss'
import FeatureCards from '../../components/feature-cards/FeatureCards'
import NewsArticles from '../../components/news-articles/NewsArticles'
import StatsCards from '../../components/stats-cards/StatsCards'
import { blockListStub } from '../../utils/blockListStub'

class LandingPage extends React.Component {
  state = {
    downloadLink: 'https://github.com/neo-project/neo-cli',
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api.github.com/repos/neo-project/neo-cli/releases',
    )

    const json = await response.json()

    if (json && Array.isArray(json)) {
      let fileExtension

      const LINUX_EXTENSION = 'neo-cli-linux-x64.zip'
      const MAC_EXTENSION = 'neo-cli-osx-x64.zip'
      const WINDOWS_EXTENSION = 'neo-cli-win-x64.zip'

      if (window.navigator.userAgent.includes('Windows'))
        fileExtension = WINDOWS_EXTENSION
      if (window.navigator.userAgent.includes('Mac'))
        fileExtension = MAC_EXTENSION
      if (window.navigator.userAgent.includes('Linux'))
        fileExtension = LINUX_EXTENSION

      const release = json.find(release => release.name.includes('Neo CLI v3'))

      const asset = release.assets.find(asset =>
        asset.browser_download_url.includes(fileExtension),
      )

      this.setState({
        downloadLink: asset.browser_download_url,
      })
    }
  }

  render() {
    const { filteredBlocks, isLoading, columns } = this.props
    const { downloadLink } = this.state

    return (
      <div id="landing-page">
        <div id="call-to-action">
          <h1>Start building on Neo3</h1>
          <div id="call-to-action-content">
            <p>
              Be amongst the first to start developing on Neo3 and explore its
              new features and optimizations. Preview releases are available
              now.
            </p>
            <div id="call-to-action-button-container">
              <Link to="/getting-started/">
                <Button secondary>Get Started</Button>
              </Link>
              <span> or skip the tutorial</span>

              <a href={downloadLink}>
                <Button>Download Now</Button>
              </a>
            </div>
          </div>
        </div>

        <h1> Statistics</h1>
        <StatsCards />
        <div className="header-and-link last-5-blocks-header">
          <h1> Last 5 Blocks</h1>
          <div
            className="link"
            onClick={() => this.props.history.push('/blocks')}
          >
            View all blocks
          </div>
        </div>

        <div id="lading-page-block-list-container">
          <List
            rowId="height"
            handleRowClick={row => this.props.history.push(`/block/${row.id}`)}
            columns={columns}
            data={isLoading ? blockListStub : filteredBlocks}
            isLoading={isLoading}
          ></List>
        </div>

        <FeatureCards />

        <NewsArticles />
      </div>
    )
  }
}

const LandingPageWithBlockData = withBlockData(LandingPage)

export default LandingPageWithBlockData
