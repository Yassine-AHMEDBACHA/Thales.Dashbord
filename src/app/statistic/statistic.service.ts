import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import * as Config  from '../Config.json';
import { stat } from "./stat";


@Injectable()
export class StatisticService
{
    Url:string;
    constructor(private httpClient : HttpClient)
    {
        this.Url = Config.StatApiUrl;
    }

    Load(): Observable<stat[]>
    {   
        return this.httpClient.get<stat[]>(this.Url);
    }
}