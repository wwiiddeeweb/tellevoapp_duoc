import { HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@capacitor/core';
import { environment } from '../../../environments/environment';
import { ApiConstants } from './api.constants';

export type IApiHeaders = {
  headers?: HttpHeaders;
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
};

export type IApiHeadersResponse = {
  headers?: HttpHeaders;
  context?: HttpContext;
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  observe?: string;
};

@Injectable()
export class ApiDatabaseConfig {
  static supabaseHeaders: HttpHeaders = new HttpHeaders()
    .set('Authorization', `Bearer ${environment.SUPABASE_API_JWT}`)
    .set('apikey', `${environment.SUPABASE_API_JWT}`);

  public getBaseUrl(): string {
    return `${ApiConstants.BASE_URL}`;
  }

  public getHeadersResponse = () => {
    return {
      headers: ApiDatabaseConfig.supabaseHeaders,
      observe: 'response',
      responseType: 'json',
    };
  };

  public getHeadersBody = (): IApiHeaders => {
    return {
      headers: ApiDatabaseConfig.supabaseHeaders,
      observe: 'body',
      responseType: 'json',
    };
  };
}
