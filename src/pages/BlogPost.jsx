import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/blogData';
import styles from './BlogStyles.module.css';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>404 - Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <div className={styles.postContent}>
        <p>{post.content}</p>
      </div>

      {/* ✅ Back button */}
      <button
        onClick={() => navigate(-1)}
        className={styles.backButton}
      >
        ← Back to Blog
      </button>
    </div>
  );
}

export default BlogPost;
