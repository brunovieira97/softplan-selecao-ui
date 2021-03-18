import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.authService.isUserAuthenticated() &&
      req.url.indexOf('auth') === -1
    ) {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.authService.getAuthHeader(),
        }),
      };

      const authReq = req.clone(options);

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
