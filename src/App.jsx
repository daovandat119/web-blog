import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import TopPicks from './pages/TopPicks';
import BlogTopPicks from './pages/BlogTopPicks';
import Topics from './pages/Topics';
import BlogTopics  from './pages/BlogTopics';
import ArticleCategory from './components/ArticleCategory';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/top-picks" element={<TopPicks />} />
              <Route path="/bog-top-picks" element={<BlogTopPicks />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/blog-topics" element={<BlogTopics />} />
              <Route path="/article-category" element={<ArticleCategory />} />
            </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
