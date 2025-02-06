import { useRecoilState } from 'recoil';
import answersState from '../store/answers/atom';

const useAnswers = () => useRecoilState(answersState);

export default useAnswers;
