import React from 'react'

import preview from '../../images/temp-news-articles/neo3-preview1.png'
import neofsLocal from '../../images/temp-news-articles/neofs-local.png'
import neovm from '../../images/temp-news-articles/neovm-decoupling.png'
import oracles from '../../images/temp-news-articles/oracles-dbft.png'
import scopedWitnesses from '../../images/temp-news-articles/scoped-witnesses.png'
import neofs from '../../images/temp-news-articles/send-neofs.png'

import './NewsArticles.scss'

const articles = [
  {
    title: 'NGD releases NEO3 Preview1 build, launches first NEO3 TestNet',
    link:
      'https://neonewstoday.com/development/ngd-releases-neo3-preview1-build-launches-first-neo3-testnet/',
    image: preview,
    date: 'September 16th 20019',
  },

  {
    title: 'Scoped Witnesses: How to Securely Transfer Assets on NEO3',
    link:
      'https://medium.com/neo-smart-economy/scoped-witnesses-how-to-securely-transfer-assets-on-neo-3-6ac012221188',
    image: scopedWitnesses,
    date: 'September 16th 20019',
  },
  {
    title: 'On the importance of Oracles: NEO3 and dBFT',
    link:
      'https://medium.com/neo-smart-economy/on-the-importance-of-oracles-neo-3-0-and-dbft-17c37ee35f32',
    image: oracles,
    date: 'September 19th 20019',
  },
  {
    title: 'Behind PR 149: a bright future for NeoVM and NEO3 ',
    link:
      'https://medium.com/neo-smart-economy/behind-pr-149-a-bright-future-for-neovm-and-neo-3-3b779e8749c4',
    image: neovm,
    date: 'September 20th 20019',
  },
  {
    title:
      'NEO SPCC releases locally deployable NeoFS and SDK, plans October TestNet launch',
    link:
      'https://neonewstoday.com/development/neo-spcc-releases-locally-deployable-neofs-and-sdk-plans-october-testnet-launch/',
    image: neofsLocal,
    date: 'October 2nd 20019',
  },
  {
    title:
      'Send.NeoFS web service launched, allowing users to easily upload files to the NeoFS TestNet',
    link:
      'https://neonewstoday.com/development/send-neofs-web-service-launched-allowing-users-to-easily-upload-files-to-the-neofs-testnet/',
    image: neofs,
    date: 'October 13th 20019',
  },
]

export default class FeatureCards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="feature-card-container news-article-container">
          {articles.map(article => (
            <a
              key={article.title}
              className="feature-card news-article"
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="feature-card-title-container">
                <img src={article.image} alt="" />
                <span>{article.date}</span>
                <h1> {article.title}</h1>
              </div>
            </a>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
