import axios from 'axios';
import { apiBaseDomain } from './constant';
import { Trivia } from './TriviaPage';

export const fetchTrivia = () => {
  return axios
    .get(`${apiBaseDomain}/trivia`)
    .then((res) => {
      return res.data as Trivia[];
    })
    .catch((err) => {
      throw err;
    });
};
