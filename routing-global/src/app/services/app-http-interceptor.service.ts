import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {
  host: string;

  constructor() {
    this.host = 'https://jsonplaceholder.typicode.com/';
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'my-auth-token': 'Proloy',
      },
      url: `${this.host}${request.url}`,
    });
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status === 404) {
          alert('Not Found');
        }
        return throwError(response);
      })
    );
  }
}
