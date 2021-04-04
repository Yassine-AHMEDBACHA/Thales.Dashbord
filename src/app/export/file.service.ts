import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Config  from '../Config.json';

@Injectable({ providedIn: 'root' })
export class FileService {
  Url:string;
  constructor(private http: HttpClient) {
    this.Url = Config.ExportApiUrl;
  }
  
  downloadFile( name:string,network:string,site:string,entity:string,productKeyId:number): Observable<any> 
  {
    var query = this.buildQuery(name,network,site,entity,productKeyId);
    console.info("requesting: "+query)
		return this.http.get(query, {responseType: 'blob'});
  }

  private buildQuery( name:string,network:string,site:string,entity:string,productKeyId:number):string
    {
      var target = this.Url+"?offset=0&limit=0";

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
      if(productKeyId > 0)
      {
        target = target + "&productkeyid="+productKeyId;
      }

      return target;
    }
   
}