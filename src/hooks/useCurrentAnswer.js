import { useRecoilState } from 'recoil';
import answersState from '../store/answers/atom';
import useStep from './useStep';

const useCurrentAnswer = () => {
  const step = useStep();
  const [answers, setAnswers] = useRecoilState(answersState);
  const answer = answers[step];
  const setAnswer = (value) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[step] = value;
      return newAnswers;
    });
  };

  return [answer, setAnswer];
};

export default useCurrentAnswer;
