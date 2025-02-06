import { useRecoilValue } from 'recoil';
import answersState from '../store/answers/atom';

const useAnswers = () => useRecoilValue(answersState);

export default useAnswers;
