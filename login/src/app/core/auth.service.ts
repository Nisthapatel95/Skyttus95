import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
  }

  login(email: string, password: string): Observable<boolean> {
    if (email === 'admin@gmail.com' && password === 'Admin@23') {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      return of(true);
    }
    return of(false);
  }

  public isAuthenticate()
  {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
        return true;
    }
    return false;
  }
  
  
}
