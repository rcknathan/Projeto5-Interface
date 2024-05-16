import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import ProjectsSection from './Components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProjectsSection />
    </div>
  );
}

export default App;
