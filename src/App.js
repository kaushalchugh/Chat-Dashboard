import { Routes, Route } from 'react-router-dom';
import ChatDashboard from './components/ChatDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<ChatDashboard />} />
    </Routes>
    </div>
  );
}

export default App;
