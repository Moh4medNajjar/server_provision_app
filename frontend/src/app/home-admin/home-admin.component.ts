import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Add this import
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent {
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
}
