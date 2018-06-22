import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BlogResponse } from '../models/blog-response';

const BLOG_URL = `https://www.googleapis.com/blogger/v3/blogs/4562383522539686383/posts`;
const BLOGGER_API_KEY = `AIzaSyBgiSne19z3sYYRp-KC7HZajqT4SSR9iDM`;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * getBlogData
   */
  public getBlogData() {
    let param = new HttpParams();
    param = param.append('key', BLOGGER_API_KEY);
    const opts = { params: param };
    return this.http.get<BlogResponse>(BLOG_URL, opts);
  }
}
