import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  response: any;
  signinForm: FormGroup;

  constructor(private network: NetworkService,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.signinForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {

  }

  login() {
    this.network.login(this.signinForm.value).subscribe(res => {
      console.log(res);

      if (res['userFound']) {
        this.router.navigateByUrl('/view')
      }
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are Unauthorized!',
      });
    });
  }

}
