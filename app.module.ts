import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

// import {AppRoutingModule} from '@angular-devkit/build-angular';
import { AppComponent } from "./front/src/app/app.component";
import { HeaderComponent } from "./front/src/app/partials/header/header.component";
import { HomeComponent } from "./front/src/app/components/pages/home/home.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        // AppRoutingModule,
        RatingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule{}
