import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user: string; password: string;

  constructor(private authService: AuthenticationService) { 
    
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user, this.password);
  }
}
