import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private recaptchaV3Service: ReCaptchaV3Service) { }

  form: UntypedFormGroup;
  error: string = null;

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl("", [Validators.required]),
      password: new UntypedFormControl("", [Validators.required]),
    })
  }

  async onSubmit() {
    this.error = null;
    this.recaptchaV3Service.execute('login').subscribe(res => {
      let value = this.form.value;
      value['captcha_token'] = res;
      this.authSvc.login(value).subscribe((res: { token: string }) => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard'])
          .then(() => {
            window.location.reload();
          });
      }, err => {
        this.error = err.error.error
      })
    });
  }
}