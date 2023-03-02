import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loaderValue: boolean;

  password: string = 'password';
  promptResult!: boolean;
  isSubmitted:boolean = false;
  public submitted = false;
  public show: boolean = false;
  public showPassword!: boolean;
  isValidUser: boolean = false;
  constructor(private AuthService: AuthService,private formBuilder: FormBuilder,
    private router: Router, ) {
    this.loginForm = new FormGroup('');
    this.loaderValue = false;
  }


  ngOnInit() {
    this.loginForm = this.buildForm()
}
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }



  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  onSubmit() {
    this.AuthService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/home']);  // If valid and route to card
        }
        this.isSubmitted = true;
        this.isValidUser = data; // false show error message
      });
  }
 

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(?=.*?[_.]).*([a-z0-9])+@([a-z\-]{2,}\.)+[a-z\-]{2,4}$/)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_])[A-Za-z\d@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_]{0,}$/)]],
    });
  }
}
