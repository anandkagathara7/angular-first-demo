import { Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DeleteComponent } from './delete/delete.component'
import { HomeComponent } from './home/home.component'
import { loginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { AuthGuard } from './_helpers/auth.guard'

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: loginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'deleteUser', component: DeleteComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

export const appRoutingModule = RouterModule.forRoot(routes)
