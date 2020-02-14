export class Alumne {
    // Atributs
    public id: number;
    public nom: string;
    public cognoms: string;
    public ciutat: string;

    // Constructor
    constructor(id: number, nom: string, cognoms: string, ciutat: string) {
        this.id = id;
        this.nom = nom;
        this.cognoms = cognoms;
        this.ciutat = ciutat;
    }
}
