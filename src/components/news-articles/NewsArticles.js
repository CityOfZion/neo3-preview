import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import classNames from 'classnames'

import chevronRight from '../../images/carousel/chevron-right.svg'
import chevronLeft from '../../images/carousel/chevron-left.svg'
import { articles } from './articles'
import useWindowWidth from '../../hooks/useWindowWith'

import './NewsArticles.scss'

const classes = {
  itemWrapper: 'carousel-item-wrapper',
  itemsWrapper: 'carousel-wrapper',
}

export const NewsArticles = React.memo(({ numberOfCards }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const shouldBlur = i => {

    if (numberOfCards < 4) return false

    if (numberOfCards === 6) {
      if (i === activeItemIndex || i === activeItemIndex % articles.length) return true
      if (i === (activeItemIndex + 5) || i === (activeItemIndex + 5) % articles.length) return true
    }

    if (numberOfCards === 4) {
      const endingIndex = (activeItemIndex + numberOfCards) % articles.length
      let startingIndex = endingIndex + 1
      if (startingIndex >= articles.length) {
        startingIndex = 0
      }
      if (i === endingIndex) return true
      if (i === startingIndex) return true
    }

  }

  return (
    <div
      id="news-article-carousel-container"
      className="feature-card-container carousel-news-article-container"
    >
      <div className="carousel-button-and-header-container">
        <h1> Recent Articles</h1>
        <div className="carousel-button-container">
          <img
            src={chevronLeft}
            alt="chevron-left"
            onClick={() => setActiveItemIndex(activeItemIndex - 1)}
          />
          <img
            src={chevronRight}
            alt="chevron-right"
            onClick={() => setActiveItemIndex(activeItemIndex + 1)}
          />
        </div>
      </div>
      <ItemsCarousel
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={20}
        infiniteLoop
        classes={classes}
        chevronWidth={40}
        disableSwipe
        requestToChangeActive={() => undefined}
      >
        {articles.map((article, i) => {
          const classes = classNames({
            'feature-card news-article': true,
            'blur-card': shouldBlur(i),
          })
          return (
            <a
              key={article.title}
              className={classes}
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
          )
        })}
      </ItemsCarousel>
    </div>
  )
})

export default () => {
  const width = useWindowWidth()
  const CARD_WIDTH = 300
  let numberOfCards = Math.floor(width / CARD_WIDTH)

  if (width >= 1800) {
    if (numberOfCards > 6) numberOfCards = 6
  } else {
    if (numberOfCards > 4) numberOfCards = 4
  }

  return <NewsArticles numberOfCards={numberOfCards} />
}
