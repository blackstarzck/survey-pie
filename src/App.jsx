import { Routes, Route } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/survey/:surveyId" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />} />
        </Route>
        <Route path="/complete" element={<CompletionPage />} />
      </Routes>
    </div>
  );
};

export default App;
