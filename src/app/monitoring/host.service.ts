import { Injectable } from '@angular/core';
import { host } from './host';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Config  from '../Config.json';

@Injectable({
  providedIn: 'root'
})
export class HostService {
    Url = "https://localhost:44301/api";
    constructor(private http:HttpClient)
    {
        this.Url = Config.HostMonitoringApi;
    }

    public getHosts(name:string,network:string,site:string,entity:string,limit:number,offset:number) : Observable<host[]> {
      
      var query = this.buildQuery("hosts",name,network,site,entity,limit,offset);
      console.info("Requesting : "+ query)
      var result = this.http.get<host[]>(query);
      return result;
    }

    public Count(name:string,network:string,site:string,entity:string) : Observable<number>
    {
      var query = this.buildQuery("hosts/count",name, network,site, entity,0,0);
      console.info("Requesting : "+ query);
      return this.http.get<number>(query);
    }

    private buildQuery(ressource:string, name:string,network:string,site:string,entity:string,limit:number,offset:number):string
    {
      var target = this.Url+"/"+ressource +"?offset="+offset;
      if(limit > 0)
      {
        target = target + "&limit="+limit;
      }

      if(name != undefined && name != '')
      {
        target = target + "&name="+name;
      }
      if(network != undefined  && network != '')
      {
        target = target + "&network="+network;
      }

      if(site != undefined && site != '')
      {
        target = target + "&site="+site;
      }

      if(entity != undefined && entity != '')
      {
        target = target + "&identity="+entity;
      }

      return target+ "&productkeyid="+5;
    }
}