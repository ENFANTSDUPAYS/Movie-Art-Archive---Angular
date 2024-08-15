import { Injectable } from "@angular/core";
import { FaceSnap } from "../Models/Face-Snap";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            1,
            'Mad Max',
            'de George Miller',
            new Date(),
            'https://erdorin.org/wp-content/uploads/2016/02/mad-max-fury-road.jpg',
            100,
            'Hanté par un lourd passé, Mad Max estime que le meilleur moyen de survivre est de rester seul. Cependant, il se retrouve embarqué par une bande qui parcourt la Désolation à bord d\'un véhicule militaire piloté par l\'Imperator Furiosa. Ils fuient la Citadelle où sévit le terrible Immortan Joe qui s\'est fait voler un objet irremplaçable. Enragé, ce Seigneur de guerre envoie ses hommes pour traquer les rebelles impitoyablement.'
        ).withLocation('Nevada').withSource('Wikipedia').withtrailer('https://youtu.be/mtolAJbj44s'),
        new FaceSnap(
            2,
            'Barbie',
            'de Greta Gerwig',
            new Date(),
            'https://media.vanityfair.fr/photos/649bed635fe54544cc5045bc/16:9/w_2560%2Cc_limit/Barbie-Drama.jpg',
            50,
            'Barbie, qui vit à Barbie Land, est expulsée du pays pour être loin d\'être une poupée à l\'apparence parfaite; n\'ayant nulle part où aller, elle part pour le monde humain et cherche le vrai bonheur.'
        ).withLocation('Barbie Land').withSource('Wikipedia').withtrailer('https://www.youtube.com/watch?v=2oOzWcbVf1c'),
        new FaceSnap(
            3,
            'Shutter Island',
            'de Martin Scorsese',
            new Date(),
            'https://th.bing.com/th/id/OIP.HkJtGg9GDA9DY9sD7YvbbQHaEo?rs=1&pid=ImgDetMain',
            500,
            'En 1954, une meurtrière, extrêmement dangereuse, placée en centre de détention psychiatrique disparaît sur l\'île de Shutter Island. Deux officiers du corps fédéral des marshals, Teddy Daniels et Chuck Aule, sont envoyés sur place pour enquêter. Très vite, Teddy Daniels comprend que le personnel de l\'établissement cache quelque chose. Seul indice dont il dispose : un bout de papier sur lequel est griffonnée une suite de chiffres entrecoupée de lettres.'
        ).withLocation('Island').withSource('Wikipedia').withtrailer('https://youtu.be/Hz0ToXuAxag'),
        new FaceSnap(
            4,
            'Blade Runner 2049',
            'de Denis Villeneuve',
            new Date(),
            'https://cdn.administrace.tv/2023/04/07/medium_169/ecd49a4c8a9dee2085ff955cbd9ca72a.png',
            156,
            'En 2049, la société est fragilisée par les nombreuses tensions entre les humains et leurs esclaves créés par bio-ingénierie. L\'officier K est un blade runner : il fait partie d\'une force d\'intervention d\'élite chargée de trouver et d\'éliminer ceux qui n\'obéissent pas aux ordres des humains.'
        ).withSource('Wikipedia').withtrailer('https://youtu.be/5qZ2rXccrvw'),
        new FaceSnap(
            5,
            '13 Hours',
            'John Krasinski',
            new Date(),
            'https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/05/27/1902186051808/13HRS_SAlone_1920x1080_NB_988240_1920x1080.jpg',
            700,
            'Le 11 septembre 2012, à Benghazi, dans une Libye en plein chaos, des milices islamistes extrémistes prennent d\'assaut l\'enceinte d\'un camp des Forces spéciales de l\'armée américaine dans laquelle se trouve l\'ambassadeur Chris Stevens. Une deuxième attaque est ensuite opérée sur une base de la CIA voisine. Engagés par l\'agence de renseignements, six agents de la sécurité et ex-soldats d\'élite organisent du mieux qu\'ils peuvent la résistance.'
        ).withLocation('Libye').withSource('Wikipedia').withtrailer('https://youtu.be/5tKdFMfk0jU'),
        new FaceSnap(
            6,
            'Top Gun Maverick',
            'Tom Cruise',
            new Date(),
            'https://www.niwaju.com/wp-content/uploads/2023/01/lecons-business-top-gun-maverick.jpg',
            235,
            'Après plus de 30 ans de service en tant que l\'un des meilleurs aviateurs de la Marine, Pete "Maverick" Mitchell est à sa place, repoussant les limites en tant que pilote d\'essai courageux et esquivant l\'avancement de grade qui le mettrait à terre. Entraînant de jeunes diplômés pour une mission spéciale, Maverick doit affronter les fantômes de son passé et ses peurs les plus profondes, aboutissant à une mission qui exige le sacrifice ultime de ceux qui choisissent de la piloter.'
        ).withLocation('USA').withSource('Wikipedia').withtrailer('https://youtu.be/JYaFU81-t6c'),
        new FaceSnap(
            7,
            'Drive',
            'Nicolas Winding Refn',
            new Date(),
            'https://www.chartsinfrance.net/style/breves/2/photo_1413878194.png',
            38,
            'Un jeune homme solitaire, The Driver, conduit le jour à Hollywood pour le cinéma en tant que cascadeur et la nuit pour des truands. Ultra professionnel et peu bavard, il a son propre code de conduite. Jamais il n\'a pris part aux crimes de ses employeurs autrement qu\'en conduisant - et au volant, il est le meilleur !'
        ).withLocation('USA').withSource('Wikipedia').withtrailer('https://youtu.be/4Wz990aqSDA'),
        new FaceSnap(
            8,
            'Fast & Furious 9',
            'Justin Lin',
            new Date(),
            'https://proxymedia.woopic.com/api/v1/images/331%2FFASTFURIOUSW0163056_BAN1_2424_NEWTV.jpg',
            38,
            'Dom Toretto mène une vie tranquille avec Letty et son fils, mais ils savent que le danger est toujours présent. Son équipe et lui tentent de mettre fin à un complot mondial ourdi par l\'assassin le plus doué et le pilote le plus performant qu\'ils aient jamais rencontré: le frère délaissé de Dom.'
        ).withLocation('Géorgie').withSource('Wikipedia').withtrailer('https://youtu.be/tOfqpdJGWL0'),
        new FaceSnap(
            9,
            'Tyler rake - Extraction',
            'Sam Hargrave',
            new Date(),
            'https://digitalcine.b-cdn.net/wp-content/uploads/2020/04/tyler-rake_image-une-fiche-film.jpg',
            158,
            'Ovi Mahajan, le fils d\'un baron de la drogue indien, est capturé par des ennemis de son père. Pour le sauver, on fait appel à Tyler Rake, un mercenaire sans pitié au passé trouble. Arrivé sur place, ce dernier comprend rapidement que cette mission est plus périlleuse qu\'il le croyait.'
        ).withLocation('Inde').withSource('Wikipedia').withtrailer('https://www.youtube.com/watch?v=V95ZyU3QMic'),
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }
    getFaceSnapById(id: number): FaceSnap | undefined {
        return this.faceSnaps.find(faceSnap => faceSnap.id === id);
    }
}
