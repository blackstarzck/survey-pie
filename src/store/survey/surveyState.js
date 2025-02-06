import { selector } from 'recoil';
import mainApi from '../../services/apis/mainApi';

const surveyState = selector({
  key: 'surveyState',
  get: async () => {
    const surveyId = window.location.pathname.split('/')[2];
    const res = await mainApi.get(`/surveys/${surveyId}`);

    return res.data;
  },
});

export default surveyState;
