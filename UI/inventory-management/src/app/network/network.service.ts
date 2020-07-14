import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  baseUrl = environment.baseUrl;
  private default: string = this.baseUrl;
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  loginUrl: String = 'login/';
  airportDataUrl: String = 'airportData/';

  constructor(private http: HttpClient) { }

  login(credentials: {}) {
    let loginData = this.http.post(this.baseUrl + this.loginUrl, credentials).pipe(map(res => res));
    loginData.subscribe(res => {
      if (res && res.hasOwnProperty("userFound")) {
        console.log("Here");
        sessionStorage.setItem("userApproved", res['userFound']);
        sessionStorage.setItem("userName", res['userName']);
      }
    });
    console.log(this.userApproved());
    return loginData;
  }

  userApproved() {
    let approved: boolean;
    approved = (sessionStorage.getItem("userApproved") == 'true') ? true : false;
    return approved;
  }

  airportData() {
    return this.http.get(this.baseUrl + this.airportDataUrl).pipe(map(res => res));
  }

  logout() {
    sessionStorage.clear();
  }
}
