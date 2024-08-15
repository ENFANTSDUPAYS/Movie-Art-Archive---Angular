// /models/Commentaire.ts
export class Commentaire {
    Lien?: string[];
    etoile?: string;
    isLiked?: boolean = false;

    constructor(
        public nbstar: number,
        public Auteur: string,
        public NomFilm: string,
        public Date: Date,
        public Message: string,
        public pointforts: string,
        public pointfaibles:string,
        public Like: number,
        public DisLike: number,
        public filmId?: number
    ) {}

    // LOCATION
    setLien(Lien: string[]): void {
        this.Lien = Lien;
    }

    withLien(Lien: string[]): Commentaire {
        this.setLien(Lien);
        return this;
    }
}
