import { map, isArray } from 'lodash';

export function encodeUri(params) {
  if (!params || typeof params !== 'object' || isArray(params)) return '';
  const searchParams = map(params, (param, key) => `${encodeURIComponent(key)}=${encodeURIComponent(param)}`).join('&');
  return `?${searchParams}`;
}

export function decodeUri(uri) {
  const urlSearch = new URLSearchParams(uri);
  const urlSearchParams = {};
  // eslint-disable-next-line
  for (const param of urlSearch.entries()) {
    const [key, value] = param;
    urlSearchParams[key] = value;
  }
  return urlSearchParams;
}