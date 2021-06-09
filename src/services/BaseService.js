import axios from 'axios';
import _ from 'lodash';
import CONFIG from '../configs/configs';

export function buildGETAxios(url) {
  return axios({
    url,
    method: 'GET',
 })
}
