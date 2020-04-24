import axios from "axios-jsonp-pro";

// Recuperação da URL correta
const BASE_URL = 'https://api.behance.net/v2';
const TOKEN = '3WzyljGhhE7JwqbrqVidjbdwELx9wRYe';
const API_KEY = { api_key: TOKEN };

/**
 * Criação de instância de axios para API
 */
const api = async (url, params) => {
  return axios.jsonp(BASE_URL + url, { params: { ...API_KEY, ...params } });
};


export { api };