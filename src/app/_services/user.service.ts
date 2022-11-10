import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '../_models/user'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {}

    register(user: User) {
        return this.http.post(`http://localhost:3000/auth/signup`, user)
    }

    login(user: User) {
        return this.http.post(`http://localhost:3000/auth/login`, user)
    }

    deleteUser(user: User) {
        return this.http.post(`http://localhost:3000/auth/deleteUser`, user)
    }
}
