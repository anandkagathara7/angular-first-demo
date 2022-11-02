import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { first } from 'rxjs'
import { User } from '../_models/user'
import { UserService } from '../_services/user.service'

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
    loginForm!: FormGroup
    submitted = false
    userSubject: BehaviorSubject<User>
    public currentUser: any

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))
        this.currentUser = this.userSubject.value
        if (this.currentUser) {
            this.router.navigate(['/'])
        }
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        })
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls
    }

    onSubmit() {
        console.log('login submit')
        this.submitted = true

        if (this.loginForm.invalid) {
            return
        }

        this.userService
            .login(this.loginForm.value)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    localStorage.setItem('user', JSON.stringify(data?.data))
                    this.router.navigate(['/'])
                },
                (error) => {
                    console.log('error---', error)
                }
            )
    }
}
