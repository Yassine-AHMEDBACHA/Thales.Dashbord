import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AuthentificationService } from './authentification.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  title = 'ESU Dashbord';
  companyname = "THALES"
  active = 2;
  authentificated = true;
  constructor(service: AuthentificationService, private router : Router) 
  {
    service.enter.subscribe((state: boolean)=>this.onLogin(state));
  }

  
  public onLogin(state : boolean) : void 
  {
    this.authentificated = state;
  }

  public onLogout() : void {
    console.info("logout");
    this.authentificated =true;
    this.router.navigate(['login']);
  }
}