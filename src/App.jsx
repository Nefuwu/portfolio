import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/blog/:slug"
          element={<BlogPost />}
        />{' '}
        {/* ✅ dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
