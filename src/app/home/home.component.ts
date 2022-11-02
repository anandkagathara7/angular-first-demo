import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { BehaviorSubject } from 'rxjs'
import { User } from '../_models/user'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userSubject: BehaviorSubject<User>
    public currentUser: any

    constructor() {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))
        this.currentUser = this.userSubject.value
    }

    ngOnInit(): void {}
}
