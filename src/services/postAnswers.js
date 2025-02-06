import mainApi from './apis/mainApi';

const postAnswers = async (surveyId, data) => {
  mainApi.post('/answers', {
    surveyId,
    data,
  });
};

export default postAnswers;
