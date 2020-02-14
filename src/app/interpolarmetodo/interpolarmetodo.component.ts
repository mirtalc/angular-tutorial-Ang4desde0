import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-interpolarmetodo',
    templateUrl: './interpolarmetodo.component.html',
    styleUrls: ['./interpolarmetodo.component.scss']
})
export class InterpolarmetodoComponent implements OnInit {
    // Atributs
    protected puntuacio: number = 9;

    constructor() { }

    ngOnInit(): void {
    }

    getPuntuacio() {
        return this.puntuacio;
    }

}
