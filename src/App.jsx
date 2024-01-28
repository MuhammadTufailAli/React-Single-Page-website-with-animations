import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import LandingPage from './screens/LandingPage';
import AppHeader from './components/AppHeader';
import 'semantic-ui-css/semantic.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <AppHeader /> */}
        {/* <div>
        <Menu fixed='top' inverted>
          <Routes>
            <Route path='/' element={<Navigate to='/' replace />} />
          </Routes>
        </Menu>
        <Container style={{ marginTop: '2em' }}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        </Container>
      </div> */}
      </Routes>
    </Router>
  );
}

export default App;
