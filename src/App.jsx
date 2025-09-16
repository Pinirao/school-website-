import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Academics, {
  ProgramDetail,
  CurriculumDetail,
  FacultyDetail,
  AllFaculty,
  ResourceDetail,
} from './pages/Academics';
import Contact from './pages/Contact';
import MyAccount from './pages/MyAccount';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Grades from './pages/Grades';
import Logout from './pages/Logout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import ApplicationForm from './pages/ApplicationForm'; // Import the ApplicationForm component
import ProgramsDetail from './pages/ProgramsDetail';
import StandardsDetail from './pages/StandardsDetail';
import GalleryDetail from './pages/GalleryDetail';
import StemProgram from './pages/StemProgram';
import ArtsAcademy from './pages/ArtsAcademy';
import GlobalStudies from './pages/GlobalStudies';
import Athletics from './pages/Athletics';
import InnovativeLearning from './pages/InnovativeLearning';
import SchedulePage from './pages/SchedulePage';
import ScrollToTop from './components/ScrollToTop';
import CharacterDevelopment from './pages/CharacterDevelopment'; // Import the CharacterDevelopment component

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop /> {/* Ensure scrolling to the top on route change */}
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admissions"
            element={
              <ProtectedRoute>
                <Admissions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/application-form"
            element={
              <ProtectedRoute>
                <ApplicationForm /> {/* Replace with the actual component for the application form */}
              </ProtectedRoute>
            }
          />
          <Route
            path="/academics"
            element={
              <ProtectedRoute>
                <Academics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/academics/program/:id"
            element={
              <ProtectedRoute>
                <ProgramDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/academics/curriculum/:grade"
            element={
              <ProtectedRoute>
                <CurriculumDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/academics/faculty"
            element={
              <ProtectedRoute>
                <AllFaculty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/academics/faculty/:id"
            element={
              <ProtectedRoute>
                <FacultyDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/academics/resource/:resource"
            element={
              <ProtectedRoute>
                <ResourceDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-account"
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/grades"
            element={
              <ProtectedRoute>
                <Grades />
              </ProtectedRoute>
            }
          />
          <Route path="/programs" element={<ProgramsDetail />} />
          <Route path="/standards" element={<StandardsDetail />} />
          <Route path="/gallery" element={<GalleryDetail />} />
          <Route path="/programs/stem" element={<StemProgram />} />
          <Route path="/programs/arts" element={<ArtsAcademy />} />
          <Route path="/programs/athletics" element={<Athletics />} />
          <Route path="/programs/global-studies" element={<GlobalStudies />} />
          <Route
            path="/standards/academic-excellence"
            element={
              <ProtectedRoute>
                <StandardsDetail />
              </ProtectedRoute>
            }
          />        
          <Route
            path="/standards/innovative-learning"
            element={
              <ProtectedRoute>
                <InnovativeLearning />
              </ProtectedRoute>
            }
          />
          <Route path="/schedule-tour" element={<SchedulePage />} />
          <Route
            path="/character-development"
            element={
              <ProtectedRoute>
                <CharacterDevelopment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;