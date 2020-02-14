import { Component, OnInit } from '@angular/core';

import { Alumne } from '../modelos/alumne.model';

@Component({
    selector: 'app-viewmodelo',
    templateUrl: './viewmodelo.component.html',
    styleUrls: ['./viewmodelo.component.scss']
})
export class ViewmodeloComponent implements OnInit {
    // Atributs
    alumne1 = new Alumne(1, "Pepe", "Garcia", "Madrid");

    constructor() { }

    ngOnInit(): void {
    }

}
