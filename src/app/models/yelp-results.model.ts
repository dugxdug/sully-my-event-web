export interface YelpResult {
  'id': string;
  'alias': string;
  'name': string;
  'image_url': string;
  'url': string;
  'price': string;
  'rating': number;
  'review_count': number;
  'phone': string;
  'photos': string[];
  'categories': {'alias': string, 'title': string}[];
  'location': {
    'display_address': string[];
  };
}

export interface YelpResults {
  total: number;
  businesses: YelpResult[];
}
