import { Routes, Route } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';
import styled from 'styled-components';

const App = () => {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
          <Route path="/complete" element={<CompletionPage />} />
        </Routes>
      </Box>
    </AppWrapper>
  );
};
const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f6;
`;

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background-color: blue;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

export default App;
