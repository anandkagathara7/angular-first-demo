import { Injectable } from '@angular/core'
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { Observable } from 'rxjs'
import { User } from '../_models/user'

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    userSubject: BehaviorSubject<User>
    public currentUser: any

    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))
        this.currentUser = this.userSubject.value
        if (this.currentUser) {
            // authorised so return true
            return true
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'])
        return false
    }
}
