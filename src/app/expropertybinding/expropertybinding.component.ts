import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-expropertybinding',
    templateUrl: './expropertybinding.component.html',
    styleUrls: ['./expropertybinding.component.scss']
})
export class ExpropertybindingComponent implements OnInit {
    // Atributs
    elmeutext: string = "Sóc dinàmic..."

    constructor() {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.elmeutext += " sorpresa!"
        }, 1500)
    }

}
