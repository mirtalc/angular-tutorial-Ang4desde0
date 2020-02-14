import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dataactual',
    templateUrl: './dataactual.component.html',
    styleUrls: ['./dataactual.component.scss']
})
export class DataactualComponent implements OnInit {
    // Atributs
    hui: any = new Date();

    constructor() { }

    ngOnInit(): void {
    }

}
