import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { first } from 'rxjs'
import { User } from '../_models/user'
import { UserService } from '../_services/user.service'

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css']
})
// export class DeleteComponent implements OnInit {
//     constructor() {}

//     ngOnInit(): void {}

//     onDelete() {

//     }
// }
export class DeleteComponent implements OnInit {
    deleteForm!: FormGroup
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
        this.deleteForm = this.formBuilder.group({
            userName: ['', Validators.required]
        })
    }

    get f() {
        return this.deleteForm.controls
    }

    onDelete() {
        console.log('Delete submit')
        this.submitted = true

        if (this.deleteForm.invalid) {
            return
        }

        this.userService
            .deleteUser(this.deleteForm.value)
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
