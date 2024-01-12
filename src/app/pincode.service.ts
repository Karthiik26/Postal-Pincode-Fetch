import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  // constructor(private http: HttpClient) { }

  // getData(pincode: any): Observable<any> {
  //   const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;
  //   return this.http.get<any[]>(apiUrl);
  // }


}
