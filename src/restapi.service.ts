import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class RestapiService {

    constructor(private http: HttpClient) {}
}