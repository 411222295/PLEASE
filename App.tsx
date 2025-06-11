import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import { ApplicationProvider } from './contexts/ApplicationContext';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ApplicationListPage } from './pages/ApplicationListPage';
import { ResumeAnalysisPage } from './pages/ResumeAnalysisPage';
import { JobRecommendationPage } from './pages/JobRecommendationPage';
import { MockInterviewPage } from './pages/MockInterviewPage';
import { useAuth } from './contexts/AuthContext';

// Pages
import HomePage from './pages/HomePage';
import CompanyRegisterPage from './pages/CompanyRegisterPage';
import CompanyChatPage from './pages/CompanyChatPage';
import CompanyResultsPage from './pages/CompanyResultsPage';
import CandidateViewPage from './pages/CandidateViewPage';
import ChatWithCandidatePage from './pages/ChatWithCandidatePage';
import StudentRegisterPage from './pages/StudentRegisterPage';
import ResumeCompletionPage from './pages/ResumeCompletionPage';
import CareerObjectivesPage from './pages/CareerObjectivesPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import StudentAnalysisPage from './pages/StudentAnalysisPage';
import UploadResumePage from './pages/UploadResumePage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import TalentMatchingPage from './pages/TalentMatchingPage';
import UploadPage from './pages/UploadPage';
import ResultPage from './pages/ResultPage';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>加载中...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ToastProvider>
          <ApplicationProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Layout>
                      <ApplicationListPage />
                    </Layout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/resume"
                element={
                  <PrivateRoute>
                    <Layout>
                      <ResumeAnalysisPage />
                    </Layout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/jobs"
                element={
                  <PrivateRoute>
                    <Layout>
                      <JobRecommendationPage />
                    </Layout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/interview"
                element={
                  <PrivateRoute>
                    <Layout>
                      <MockInterviewPage />
                    </Layout>
                  </PrivateRoute>
                }
              />
            </Routes>
          </ApplicationProvider>
        </ToastProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;