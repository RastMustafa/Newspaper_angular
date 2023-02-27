export class UrlCreator {
  BASE_URL: string = 'https://newsapi.org/v2/top-headlines';
  BASE_URL2: string = 'https://newsapi.org/v2/everything';
  API_KEY: string = '676f017549224f488970f1835f9db971';
  API_KEY_2: string = '593ebf6528d2451e9e770f74d2be15b0';
  API_KEY_3: string = 'b7af82f3eb0d4c5388e51489b41d139e';
  API_KEY_4: string = '949ff4491a3048ffaa1cdbb0640fe6c3';
  DEFUALT_COUNTRY: string = 'us';
  QUERY_PARAM: string = 'general';
  CATEGORY: string = '';
  SOURCE: string = '';
  urlCreator(
    category: string,
    country: string,
    source?: string,
    query?: string
  ) {
    this.DEFUALT_COUNTRY = country ? country : this.DEFUALT_COUNTRY;
    if (!source) {
      if (category) {
        return `${this.BASE_URL}?country=${this.DEFUALT_COUNTRY}&category=${category}&apiKey=${this.API_KEY_4}`;
      } else {
        return `${this.BASE_URL2}?q=${
          query ? query : this.QUERY_PARAM
        }&apiKey=${this.API_KEY_4}`;
      }
    } else {
      return `${this.BASE_URL}?sources=${source}&apiKey=${this.API_KEY_4}`;
    }
  }
}
