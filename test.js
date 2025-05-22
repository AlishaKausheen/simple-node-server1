import http from 'k6/http';

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  http.get('http://localhost:3000');
}
