import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-copyright',
    templateUrl: './copyright.component.html',
    styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
    // Atributs
    empresaCopyright: String = '\u00A9 ACME S.A.';
    hui: any = new Date();

    constructor() { }

    ngOnInit(): void {
    }

}
