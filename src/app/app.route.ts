import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'Sign-Up', component: SignUpComponent },
  { path: 'User', component: UserProfileComponent },
];

export { ROUTES };