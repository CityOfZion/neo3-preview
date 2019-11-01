import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'

import chevronRight from '../../images/carousel/chevron-right.svg'
import chevronLeft from '../../images/carousel/chevron-left.svg'
import { articles } from './articles'
import useWindowWidth from '../../hooks/useWindowWith'

import './NewsArticles.scss'

const classes = {
  itemWrapper: 'carousel-item-wrapper',
}

export const NewsArticles = React.memo(({ numberOfCards }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  return (
    <React.Fragment>
      <div className="feature-card-container carousel-news-article-container">
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
        <ItemsCarousel
          activeItemIndex={activeItemIndex}
          numberOfCards={numberOfCards}
          gutter={20}
          infiniteLoop
          classes={classes}
          chevronWidth={40}
          disableSwipe
        >
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
        </ItemsCarousel>
      </div>
    </React.Fragment>
  )
})

export default () => {
  const width = useWindowWidth()
  const CARD_WIDTH = 310
  let numberOfCards = Math.floor(width / CARD_WIDTH)

  if (numberOfCards > 4) numberOfCards = 4

  return <NewsArticles numberOfCards={numberOfCards} />
}
