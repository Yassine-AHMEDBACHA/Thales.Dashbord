import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public enter = new EventEmitter<boolean>();
  constructor(private router : Router) {
   }

  Route() : void
  {
    this.router.navigate(['statistic']);
  }
}
