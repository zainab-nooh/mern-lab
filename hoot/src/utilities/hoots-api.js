import sendRequest from './send-request';

const BASE_URL = '/api/hoots';

export function getAll() {
  return sendRequest(BASE_URL, 'GET');
}

export function createHoot(data) {
  return sendRequest(BASE_URL, 'POST', data);
}