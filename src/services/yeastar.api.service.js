const axios = require('axios');

const BASE_URL = 'https://dsiyspbx02.sgycm.yeastarcloud.com/openapi/v1';
const TOKEN = process.env.YEASTAR_TOKEN;

exports.dial = (phone, ext) => {
  return axios.post(
    `${BASE_URL}/call/dial`,
    { number: phone, extension: ext },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }
  );
};
