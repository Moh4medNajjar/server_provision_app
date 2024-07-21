import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { HomeComponent } from './home/home.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ServerFormComponent } from './server-form/server-form.component';

export const routes: Routes = [
  { path: 'index', component: IndexPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'server-details', component: ServerDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin-signup', component: SignUpAdminComponent },
  { path: 'my-requests', component: MyRequestsComponent },
  { path: 'server-form', component: ServerFormComponent },

];
