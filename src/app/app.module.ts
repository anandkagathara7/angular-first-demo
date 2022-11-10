import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { appRoutingModule } from './app.routing'
import { loginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DeleteComponent } from './delete/delete.component'

@NgModule({
    imports: [
        BrowserModule,
        appRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    declarations: [AppComponent, loginComponent, HomeComponent, SignupComponent, DeleteComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
