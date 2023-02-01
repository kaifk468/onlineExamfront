import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token=this.loginService.getToken();
    let authReq=request;
    if(token!=null)
    {
      authReq=authReq.clone({
        setHeaders:{Authorization:`Bearer ${token}`}
      })
    }
    return next.handle(authReq);
  }
}
export const AuthInterceptorProviders=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true

  }
]
