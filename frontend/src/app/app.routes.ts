import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { HomeComponent } from './home/home.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { LoginComponent } from './auth/login/login.component';
import { ServersComponent } from './servers/servers.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';

export const routes: Routes = [
  { path: 'index', component: IndexPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'server-details', component: ServerDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin-signup', component: SignUpAdminComponent },
  { path: 'my-requests', component: MyRequestsComponent },

];
