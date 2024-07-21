import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss',
  providers: [AuthService]
})
export class HomeAdminComponent implements OnInit {
  constructor(private authService: AuthService){}
  azureCreds = {
    tenantId: 'your-tenant-id',
    clientId: 'your-client-id',
    clientSecret: '********',
    subscriptionId: 'your-subscription-id'
  };

  editing: { [key: string]: boolean } = {
    tenantId: false,
    clientId: false,
    clientSecret: false,
    subscriptionId: false
  };
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  id: any;
  matricule: any;

  editCredential(key: string) {
    this.editing[key] = true;
  }

  saveCredential(key: string) {
    this.editing[key] = false;
  }

  copyCredential(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

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
      this.matricule = userData.matricule;
      this.email = userData.email;
      this.id = userData.id
    }
  }
}
