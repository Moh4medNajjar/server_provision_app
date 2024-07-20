import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers: [Router, AuthService]
})
export class SignupComponent {
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
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
      ]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  onSubmit(form: any): void {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
    if (form.valid) {
      this.authService.signUpRequester(form.value).subscribe(response => {
        console.log('Requester signed up', response);
        this.successMessage = 'Sign-up successful!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000); // Delay to show the success message
      }, error => {
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






