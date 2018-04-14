import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WasteManagementService {
  domain = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getRequests() : Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.domain + '/waste/pickupRequests').toPromise().then(
        (val) => {
          resolve(val);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
    return promise
  }
  createRequest(request) : Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.domain + '/waste/pickupRequests',request).toPromise()
      .then(
        (val) => {
          resolve(val);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
    return promise;
  }
  schedulePickup(request): Observable<any> {
    return this.http.post(this.domain + '/schedule/',request)
  }

}
