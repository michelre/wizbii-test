import $ from 'jquery';

export const authenticate = (username, password) => $.ajax({
  method: 'POST',
  url: 'https://api.wizbii.com/v1/account/validate',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: {
    username: encodeURI(username),
    password,
    client_id: 'test',
    grant_type: 'password',
  },
});

export const news = (token) => $.ajax({
  method: 'POST',
  url: 'https://api.wizbii.com/v2/dashboard/?direction=newest',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const addLike = () => new Promise((resolve) =>
    setTimeout(() => resolve(), 1500));

export const share = () => new Promise((resolve) =>
    setTimeout(() => resolve(), 1500));

export const addComment = () => new Promise((resolve) =>
    setTimeout(() => resolve(), 1500));
