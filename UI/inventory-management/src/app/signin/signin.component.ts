import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network/network.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  response: any;

  constructor(private network: NetworkService) { }

  ngOnInit() {
    this.network.login({}).subscribe(res=> {
      console.log(res);
      this.response = res;
    })
  }

}
