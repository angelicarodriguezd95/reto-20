import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, withInterceptors } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Este es el interceptor");
    req = req.clone({
    setHeaders:{'Authorization': 'Token de Autorizacion'}
    });
    return next.handle(req);
    }

}
