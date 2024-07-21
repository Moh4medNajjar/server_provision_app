import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-admin',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign-up-admin.component.html',
  styleUrl: './sign-up-admin.component.scss',
  providers: [AuthService, Router]
})
export class SignUpAdminComponent {
  signUpForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      department: ['', Validators.required],
      matricule: ['', Validators.required],
      position: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required],
      tenantId: ['', Validators.required],
      clientId: ['', Validators.required],
      clientSecret: ['', Validators.required],
      subscriptionId: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit(form: any): void {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
    if (form.valid) {
      this.authService.signUpRequester(form.value).subscribe((response: any) => {
        console.log('Admin signed up', response);
        this.successMessage = 'Sign-up successful!';
        setTimeout(() => {
          this.router.navigate(['/login-admin']);
        }, 2000);
      }, (error: any) => {
        console.error('Sign-up error', error);
        this.errorMessage = 'Sign-up failed. Please try again.';
      });
    }
  }

  private passwordMatchValidator(form: FormGroup): void {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword) {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ mismatch: true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }
}
