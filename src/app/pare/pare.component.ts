import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pare',
    templateUrl: './pare.component.html',
    styleUrls: ['./pare.component.scss']
})
export class PareComponent implements OnInit {
    // Atributs
    atributPare: string = "text de atributPare";
    arrayPare: string[] = ["pare-dixit 1", "pare-dixit 2", "pare-dixit 3"];
    novetat: string;

    constructor() { }

    ngOnInit(): void {
    }

    updateNovetat(parametreDesdeFill): void{
        this.novetat = parametreDesdeFill + "(des)marcat com a llegit";
    }
}
