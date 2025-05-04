class ApiClient {
    constructor(baseUrl, apiKey, options = {}) {
      this.baseUrl = baseUrl;
      this.apiKey = apiKey;
      this.options = {
        timeout: 5000,
        retries: 3,
        ...options
      };
    }
  
    async get(endpoint, params = {}) {
      const url = new URL(`${this.baseUrl}/${endpoint}`);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
      
      return this._makeRequest(url, 'GET');
    }
  
    async post(endpoint, data) {
      const url = new URL(`${this.baseUrl}/${endpoint}`);
      
      return this._makeRequest(url, 'POST', data);
    }
  
    async _makeRequest(url, method, data) {
      const headers = {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      };
      
      let retries = 0;
      
      while (retries < this.options.retries) {
        try {
          const response = await fetch(url, {
            method,
            headers,
            body: data ? JSON.stringify(data) : undefined,
            timeout: this.options.timeout
          });
          
          if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
          }
          
          return await response.json();
        } catch (error) {
          retries++;
          if (retries >= this.options.retries) {
            throw error;
          }
          
          await new Promise(r => setTimeout(r, 1000 * retries));
        }
      }
    }
  }
  
  module.exports = ApiClient;