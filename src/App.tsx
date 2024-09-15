import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './components/pages/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        // ... other routes ...
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;