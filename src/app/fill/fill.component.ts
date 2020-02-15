import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-fill',
    templateUrl: './fill.component.html',
    styleUrls: ['./fill.component.scss']
})
export class FillComponent implements OnInit {
    // Atributs
    llegit: boolean = false;

    // Propietat compartible amb el pare.
    @Input() atributFill: string;

    // Propietat per a que mètode del fill desencadene un mètode del pare
    @Output() emitterFill = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    toggleLlegit(){
        this.llegit = !this.llegit;
    }

    detectar(event){
        console.log("Event detectat", event);
        this.emitterFill.emit(this.atributFill);
    }
}
