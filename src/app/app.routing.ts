import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { loginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: loginComponent },
    { path: 'signup', component: SignupComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

export const appRoutingModule = RouterModule.forRoot(routes)
