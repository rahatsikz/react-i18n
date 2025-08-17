import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursePage";
import { DEFAULT_LOCALE } from "./constant";
import { LanguageProvider } from "./language-provider";
import { GeoRedirect } from "./geo-redirect";

function App() {
  return (
    <Router>
      <GeoRedirect />
      <Routes>
        {/* Redirect / to default locale */}
        <Route
          path='/'
          element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />}
        />

        {/* Wrap all language-prefixed routes */}
        <Route
          path='/:lang/*'
          element={
            <LanguageProvider>
              <div className='min-h-screen bg-background'>
                <Header />
                <main>
                  <Routes>
                    <Route path='' element={<HomePage />} />
                    <Route path='courses' element={<CoursesPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='signup' element={<SignupPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='contact' element={<ContactPage />} />
                    {/* Fallback for unknown paths */}
                    <Route
                      path='*'
                      element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />}
                    />
                  </Routes>
                </main>
                <Footer />
              </div>
            </LanguageProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
