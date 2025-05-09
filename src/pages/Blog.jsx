import styles from './BlogStyles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { posts } from '../data/blogData';

function Blog() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* ✅ Back button */}
      <button
        onClick={() => navigate('/')}
        className={styles.backButton}
      >
        ← Back to Home
      </button>
      <h1 className={styles.title}>My Blog</h1>

      {posts.map((post) => (
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
