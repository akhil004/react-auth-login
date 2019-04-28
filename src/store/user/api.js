import axios from 'axios';
import { API_URL } from '../../utils/constants';

export const login = credentials =>
  axios({
    method: 'POST',
    url: `${API_URL}auth`,
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(credentials),
  });
