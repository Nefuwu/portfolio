import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BlogStyles.module.css';
import { posts } from '../data/blogData';

function Blog() {
  const [sortOrder, setSortOrder] = useState('newest');
  const navigate = useNavigate();

  const sortedPosts = posts.slice().sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Blog</h1>

      {/* ✅ Back to Portfolio button */}
      <button
        type="button"
        onClick={() => navigate('/')}
        className={styles.backButton}
      >
        ← Back to Portfolio
      </button>

      {/* Sort dropdown */}
      <div className={styles.sortContainer}>
        <label
          htmlFor="sort"
          className={styles.sortLabel}
        >
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {sortedPosts.map((post) => (
        <div
          key={post.id}
          className={styles.postCard}
        >
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.date}>{post.date}</p>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <Link
            to={`/blog/${post.slug}`}
            className={styles.readMore}
          >
            → Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
