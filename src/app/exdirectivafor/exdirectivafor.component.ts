import { Component, OnInit } from '@angular/core';
import { Alumne } from '../modelos/alumne.model';

@Component({
    selector: 'app-exdirectivafor',
    templateUrl: './exdirectivafor.component.html',
    styleUrls: ['./exdirectivafor.component.scss']
})
export class ExdirectivaforComponent implements OnInit {
    // Atributs
    public cursos: string[];
    public alumnes: Alumne[];

    constructor() { }

    ngOnInit(): void {
        this.cursos = ['Angular', 'HTML', 'CSS'];
        this.alumnes = [
            {
                id: 10,
                nom: "Maria",
                cognoms: "Martinez",
                ciutat: "Xàtiva"
            },
            {
                id: 11,
                nom: "Isabella",
                cognoms: "Tomaso",
                ciutat: "Torino"
            }
        ]
    }
}
