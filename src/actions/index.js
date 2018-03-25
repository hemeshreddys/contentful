import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_ASSET = 'FETCH_ASSET';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'z2b5xe8yqwey';
const API_TOKEN = '08c12ef2a3da0048d7b23a65da0bcba58c9b4b3212938ade88e09d25659e540d';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post&order=sys.createdAt`);
  console.log("request fetchPosts :"+request);
  return {
    type: FETCH_POSTS,
    payload: request,
    
  };
}
export function fetchPost(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}&content_type=post`);
  console.log("request fetchPost :"+request);
  return {
    type: FETCH_POST,
    payload: request
  };
}
export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);
  console.log("request fetchAsset :"+request);
  return {
    type: FETCH_ASSET,
    payload: request
  };
}
