/**
 * 1. Imports
 */
import { Component } from '@angular/core';

/**
 * 2. Decorador del Component amb metadata
 */
@Component({
    // etiqueta HTML on es renderitza el component
    selector: 'app-root',
    // arxiu HTML amb la vista
    templateUrl: './app.component.html',
    // arxiu(s) amb l'estil del component
    styleUrls: ['./app.component.scss']
})

/**
 * 3. Export
 */
export class AppComponent {
    titol: string = 'appCurso';
}
