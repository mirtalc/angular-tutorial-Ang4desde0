/**
 * 1. Imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * 2. Decorador del Module amb metadata
 */
@NgModule({
    // declarations a.k.a. vistes d'un mòdul. Poden ser directives, components o pipes
    declarations: [
        AppComponent
    ],
    // dependències (l'origen està a la primera secció amb el imports)
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    // providers a.k.a. servicis disponibles per a tot component del Module
    providers: [],
    // Vista arrel. NOmés ho gasta el root module. No confundir amb la llibreria!
    bootstrap: [AppComponent]
})

/**
 * 3. Export
 */
export class AppModule { }
