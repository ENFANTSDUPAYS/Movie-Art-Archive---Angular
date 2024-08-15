import { Commentaire } from "./Commentaire";

export class FaceSnap{ //Création d'une classe FaceSnap pour pouvoir ajouter plusieurs FaceSnap

location?: string;
source ?: string;
trailer ?: string;
public commentaires?: Commentaire[] = [];

constructor(
    public id: number,
    public titre: string,
    public autor: string,
    public createdAt: Date,
    public imageURL: string,
    public snaps: number,
    public apropos:string,
    public TrailerVisible: boolean = false,
    public MessageVisibile: boolean = false,
    public trailerShown: boolean = false,
    public showglitter: boolean = false,
    public showSpinner: boolean = true,){}

    //COMMENTAIRE
    setCommentaire(commentaire: []):void{
        this.commentaires = commentaire;
    }
    withCommentaire(commentaire: []) : FaceSnap{
        this.setCommentaire(commentaire);
        return this;
    }
    //LOCATION
    setLocation(location: string): void{
        this.location = location;
    }
    withLocation(location: string): FaceSnap{
        this.setLocation(location);
        return this;
    }
    //SOURCE
    setsource(source:string): void{
        this.source = source;
    }
    withSource(source: string) : FaceSnap{
        this.setsource(source);
        return this;
    }
    //TRAILER
    settrailer(trailer:string): void{
        this.trailer = trailer;
    }
    withtrailer(trailer: string) : FaceSnap{
        this.settrailer(trailer);
        return this;
    }
}