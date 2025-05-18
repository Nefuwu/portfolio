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

      <div className={styles.blogContainer}>
        {/* Short description */}
        <p className={styles.description}>{post.description}</p>

        {/* Tech Stack */}
        {post.tech && (
          <div className={styles.techStack}>
            <strong>Tech Used:</strong> {post.tech}
          </div>
        )}
        <br></br>

        {/* Why I did it */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Why I Did It</h2>
          <p>{post.reason}</p>
        </div>

        {/* How I built it */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How I Built It</h2>
          <p>{post.process}</p>
        </div>

        {/* Challenges */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Challenges Faced</h2>
          <p>{post.challenges}</p>
        </div>

        {/* Lessons Learned */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <p>{post.lessons}</p>
        </div>
      </div>

      {/* Back button */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={styles.backButton}
      >
        ← Back to Blog
      </button>
    </div>
  );
}

export default BlogPost;
