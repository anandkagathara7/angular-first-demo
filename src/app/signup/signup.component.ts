import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { first } from 'rxjs'
import { User } from '../_models/user'
import { UserService } from '../_services/user.service'

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    registerForm!: FormGroup
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

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        })
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls
    }

    onSubmit() {
        this.submitted = true

        if (this.registerForm.invalid) {
            return
        }

        this.userService
            .register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    localStorage.setItem('users', JSON.stringify(data?.data))
                    this.router.navigate(['/login'])
                },
                (error) => {
                    console.log('error---', error)
                }
            )
    }
}
