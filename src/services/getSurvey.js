import mainApi from './apis/mainApi';

const getSurvey = (surveyId) => {
  const res = mainApi.get(`/surveys/${surveyId}`);
  return res.data;
};

export default getSurvey;
