import { Component, EventEmitter } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  service : AuthentificationService 
  constructor(service: AuthentificationService) {
    this.service = service;
}
  
tgi = new FormControl('');
password = new FormControl('');
  authentificated = true;
  ngOnInit(): void {
    //this.service.enter.emit(false);
  }

  
  public onLogin() : void 
  {
      console.info("login:" + this.tgi.value );
      if(this.tgi.value == "admin" && this.password.value == "admin")
    { 
        this.service.Route();
        this.service.enter.emit(true);
    }
    else
    {
        alert("TGI or Password are wrong, please try again");
        this.password.setValue("");
        this.service.enter.emit(true);
    }
  }
}
