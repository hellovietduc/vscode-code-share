const axios = require('axios');

const config = require('../config.json');

const request = axios.create(config.axios);

/**
 * @param {string} code
 */
const postCode = code => request.post('/code', { code })
    .then(res => {
        const { url } = res.data;
        if (res.status !== 201 || !url) {
            console.error('post code failed:', res.data);
            return;
        }
        return url;
    })
    .catch(err => {
        console.error('post code error:', err);
    });

module.exports = {
    postCode
};
