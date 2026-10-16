import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { BLOG_CARDS } from '../../data/blogData';
import { ChevronLeft, ChevronRight, Clock, TrendingDown, ArrowUpRight, BookOpen } from 'lucide-react';

export const BlogCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive calculation for cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, BLOG_CARDS.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <section
      className="section blog-section"
      id="resources"
      aria-label="Cloud Cost Management Insights & Guides"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Container>
        <div className="carousel-top-bar">
          <SectionHeader
            eyebrow="Cloud Cost Management"
            title="Insights & Playbooks for Multi-Cloud FinOps"
          />

          {/* Carousel Navigation Controls */}
          <div className="carousel-controls" aria-label="Carousel navigation">
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous article"
              title="Previous article"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="carousel-counter" aria-live="polite">
              {currentIndex + 1} / {maxIndex + 1}
            </span>

            <button
              type="button"
              className="carousel-nav-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next article"
              title="Next article"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="carousel-window" ref={trackRef}>
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {BLOG_CARDS.map((blog) => (
              <div
                key={blog.id}
                className="carousel-slide"
                style={{
                  flex: `0 0 ${100 / cardsPerView}%`,
                  maxWidth: `${100 / cardsPerView}%`,
                }}
              >
                <article
                  className="blog-card"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <meta itemProp="publisher" content="Eorix" />

                  {/* Card Header: Category & Read Time */}
                  <div className="blog-card-meta">
                    <span className="blog-category" itemProp="articleSection">
                      <BookOpen size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {blog.category}
                    </span>
                    <span className="blog-read-time">
                      <Clock size={12} />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="blog-card-title" itemProp="headline">
                    {blog.title}
                  </h3>

                  <p className="blog-card-excerpt" itemProp="description">
                    {blog.excerpt}
                  </p>

                  {/* Highlight Metric Pill */}
                  {blog.metricsHighlight && (
                    <div className="blog-metric-tag">
                      <TrendingDown size={13} color="var(--good)" />
                      <span>{blog.metricsHighlight}</span>
                    </div>
                  )}

                  {/* Card Footer: Date & Link */}
                  <div className="blog-card-footer">
                    <time
                      dateTime={blog.publishDate}
                      itemProp="datePublished"
                      className="blog-date"
                    >
                      {blog.formattedDate}
                    </time>

                    <a
                      href="mailto:infrabyanubhav@gamil.com?subject=Inquiry regarding FinOps Playbook"
                      className="blog-read-link"
                      aria-label={`Read guide: ${blog.title}`}
                    >
                      <span>Read Playbook</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="carousel-dots" role="tablist" aria-label="Slide indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={currentIndex === idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
