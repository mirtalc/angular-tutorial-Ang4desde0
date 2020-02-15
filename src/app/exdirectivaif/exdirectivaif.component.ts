import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exdirectivaif',
    templateUrl: './exdirectivaif.component.html',
    styleUrls: ['./exdirectivaif.component.scss']
})
export class ExdirectivaifComponent implements OnInit {
    // Atributs
    public nomdirectivaif: string = "";
    public nomdirectivaifElse: string = "";
    public suma: number;

    constructor() { }

    ngOnInit(): void {
    }

    validarSuma(): boolean {
        return this.suma == 5 ? true : false;
    }
}
