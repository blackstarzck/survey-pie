import { useRecoilValue } from 'recoil';
import surveyState from '../store/survey/surveyState';
import useStep from './useStep';

const useCurrentQuestion = () => {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];

  return questions[step];
};

export default useCurrentQuestion;
