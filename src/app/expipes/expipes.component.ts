import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-expipes',
    templateUrl: './expipes.component.html',
    styleUrls: ['./expipes.component.scss']
})
export class ExpipesComponent implements OnInit {
    // Atributs
    hui: any = new Date();
    ciutat: string = "Sevilla";
    numero: number = 1.148;
    preu: number = 0.94;

    constructor() { }

    ngOnInit(): void {
    }

}
