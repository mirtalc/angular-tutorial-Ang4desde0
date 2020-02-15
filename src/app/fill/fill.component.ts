import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fill',
    templateUrl: './fill.component.html',
    styleUrls: ['./fill.component.scss']
})
export class FillComponent implements OnInit {
    // Atributs
    // Propietat compartible amb el pare.
    @Input() atributFill: string;

    constructor() { }

    ngOnInit(): void {
    }

}
