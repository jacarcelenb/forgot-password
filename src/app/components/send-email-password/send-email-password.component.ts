import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-send-email-password',
  templateUrl: './send-email-password.component.html',
  styleUrls: ['./send-email-password.component.css']
})
export class SendEmailPasswordComponent implements OnInit {
  Form!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private TranslateService: TranslateService) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

ForgotPassword(){

}


}
