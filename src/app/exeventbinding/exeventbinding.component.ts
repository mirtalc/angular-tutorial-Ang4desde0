import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exeventbinding',
    templateUrl: './exeventbinding.component.html',
    styleUrls: ['./exeventbinding.component.scss']
})
export class ExeventbindingComponent implements OnInit {
    // Atributs
    public textModificable: string = " Text inicial";
    protected contador: number = 0;

    constructor() { }

    ngOnInit(): void {
    }

    modificarText(): void {
        console.log("Modificant text desde", this);
        this.contador++;
        this.textModificable = " Text modificat! Has apretat el botó " + this.contador + " vegades.";
    }

}
