import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3030/login', { username, password })
      .pipe(user => {
        // if(user && user.token){
          // localStorage.setItem('currentUser', JSON.stringify(user));
        // }
        return user;
      })
  }
  
  logout(){
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return true;
  }

}
