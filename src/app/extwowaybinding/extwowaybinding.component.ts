import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-extwowaybinding',
    templateUrl: './extwowaybinding.component.html',
    styleUrls: ['./extwowaybinding.component.scss']
})
export class ExtwowaybindingComponent implements OnInit {
    // Atributs
    public texttwoway: string = "Text original";

    constructor() { }

    ngOnInit(): void {
    }

}
