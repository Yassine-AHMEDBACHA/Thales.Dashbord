import { Component, Host, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core'; 
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthentificationService } from '../authentification.service';
import { host } from './host';
import { HostService } from './host.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css'],
})
export class MonitoringComponent {

  hosts! : Observable<host[]>;
  hostName = new FormControl('');
  network = new FormControl('');
  entity= new FormControl('');
  site= new FormControl('');
  mail= new FormControl('');
  limit:number;
  offset:number;
  count:number;
  pagesCount:number
  displayPages:boolean = false;

  constructor(private hostService : HostService) {
    this.limit = 15;
    this.offset = 0;
    this.count = 0;
    this.pagesCount = 0;
    this.displayPages = false;
    };
  
  onClick() :void
  {
    this.displayPages = false;
    this.hosts = this.hostService.getHosts(this.hostName.value,this.network.value,this.site.value,this.entity.value,this.limit,this.offset);
    this.hosts.subscribe(x=>this.UpdatePaginationButtons(x));
  }

public UpdatePaginationButtons(hosts:Host[]) : void
{
 if(hosts.length == 0)
 {
   alert("There is no host matching your filtering criteria !");
 }
}

}