import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService, Router]
})
export class LoginComponent {
  loginForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  isSuperAdmin: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (        response: { token: string; }) => {
          console.log('Login successful', response);
          localStorage.setItem('token', response.token); // Store token in localStorage
          this.successMessage = 'Login successful!';
          //........................................................................
          const token = this.authService.getToken();
          if (token) {
            // Extract user data (consider using a secure backend API instead)
            const decodedPayload = atob(token.split('.')[1]);
            const userData = JSON.parse(decodedPayload);
            console.log(userData)
            this.isSuperAdmin = userData.isSuperAdmin;
          }
          //........................................................................
          if (this.isSuperAdmin) {
            this.router.navigate(['/home-admin']);
          } else {
            this.router.navigate(['/home']);
          }

          setTimeout(() => {
            this.router.navigate(['/dashboard']); // Redirect to dashboard or another page
          }, 2000);
        },
        error => {
          console.error('Login error', error);
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
        }
      );
    }
  }
}

