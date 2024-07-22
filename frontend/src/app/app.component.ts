import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService]
})
export class AppComponent {
  title = 'frontend';
  firstname: any;
  lastname: any;
  email: any;
  position: any;
  requesterId: any;
  department: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Check if token exists after component initialization
    const token = this.authService.getToken();
    if (token) {
      // Extract user data (consider using a secure backend API instead)
      const decodedPayload = atob(token.split('.')[1]);
      const userData = JSON.parse(decodedPayload);
      console.log(userData)
      this.firstname = userData.firstname;
      this.lastname = userData.lastname;
      this.email = userData.email;
      this.position = userData.position;
      this.requesterId = userData.requesterId;
      this.department = userData.department;

    }
  }
}
