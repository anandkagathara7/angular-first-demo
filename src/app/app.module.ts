import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { appRoutingModule } from './app.routing'
import { loginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    imports: [
        BrowserModule,
        appRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        loginComponent,
        HomeComponent,
        SignupComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
