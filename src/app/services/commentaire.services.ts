// /services/commentaire.service.ts
import { Injectable } from "@angular/core";
import { Commentaire } from "../Models/Commentaire";

@Injectable({
    providedIn: 'root'
})
export class CommentaireService {
    private commentaires: Commentaire[] = [
        new Commentaire(
            5,
            'Adrien',
            'Mad Max',
            new Date(),
            '"Mad Max: Fury Road" est un film visuellement époustouflant qui repousse les limites du cinéma d\'action. La réalisation de George Miller est magistrale, offrant des scènes d\'action non-stop parfaitement chorégraphiées et des effets spéciaux impressionnants. Les performances de Tom Hardy et Charlize Theron sont convaincantes, apportant de la profondeur à leurs personnages. La conception des décors et des costumes contribue à créer un univers post-apocalyptique immersif et unique. Cependant, le scénario reste relativement simple et linéaire, ce qui peut décevoir ceux qui recherchent une intrigue plus complexe. De plus, certains personnages secondaires manquent de développement. Malgré ces points faibles, "Mad Max: Fury Road" reste une expérience cinématographique incontournable.',
            'Réalisation magistrale de George Miller. Scènes d\'action non-stop et parfaitement chorégraphiées. Effets spéciaux impressionnants. Performances convaincantes de Tom Hardy et Charlize Theron. Conception des décors et des costumes immersive et unique.',
            'Scénario relativement simple et linéaire. Manque de développement de certains personnages secondaires.',
            3053,
            15,
            1).withLien(['https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-08/ft.jpg', 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492181056/articles/2015/05/16/mad-max-fury-road-how-9-11-mel-gibson-and-heath-ledger-s-death-couldn-t-derail-a-classic/150513-stern-miller-tease_d6amq4']),
        new Commentaire( 
            5,
            'Marie', 
            'Barbie', 
            new Date(), 
            '"Barbie" de 2023 est une œuvre audacieuse qui dépasse les attentes habituelles pour un film basé sur une poupée emblématique. Le film se distingue par son humour subversif et sa critique sociale perspicace. Margot Robbie et Ryan Gosling offrent des performances charismatiques et attachantes. La direction artistique est vibrante et colorée, capturant l\'esthétique "Barbie" avec un flair moderne. Cependant, le film peut parfois manquer de subtilité dans sa satire, et certains spectateurs pourraient trouver les messages féministes trop explicites. Malgré cela, "Barbie" est une œuvre divertissante qui réussit à être à la fois amusante et réfléchie.',
            'Humour subversif et critique sociale perspicace, Performances charismatiques de Margot Robbie et Ryan Gosling et une irection artistique vibrante et esthétique.',
            'Manque de subtilité dans la satire et Messages féministes parfois trop explicites.',
            123,
            56,
            2),
        new Commentaire(
            5,
            'Yanis', 
            'Shutter Island', 
            new Date(), 
            '"Shutter Island" est un thriller psychologique captivant réalisé par Martin Scorsese. Le film se distingue par son atmosphère sombre et oppressante, renforcée par une excellente bande sonore. Leonardo DiCaprio livre une performance intense, explorant des thèmes de folie et de réalité. Le scénario est habilement construit, avec des rebondissements inattendus qui tiennent le spectateur en haleine. Toutefois, certains spectateurs pourraient trouver le rythme lent par moments, et l\'issue du film, bien que surprenante, peut sembler prévisible pour les plus attentifs. Malgré cela, "Shutter Island" est un film intrigant qui explore profondément la psyché humaine.', 
            'Atmosphère sombre et oppressante, Excellente performance de Leonardo DiCaprio et Scénario habilement construit avec des rebondissements inattendus.',
            'Rythme parfois lent et Déroulement final pouvant sembler prévisible.',
            60 ,
            52,
            3),
        new Commentaire(
            5,
            'XXXtentacion', 
            'Blade Runner 2049', 
            new Date(), 
            '"Blade Runner 2049" est une suite visuellement époustouflante du classique de science-fiction. La réalisation de Denis Villeneuve est sublime, combinant des effets visuels saisissants avec une cinématographie magnifique. Ryan Gosling et Harrison Ford livrent des performances puissantes, apportant une profondeur émotionnelle à leurs rôles. Le film explore des thèmes complexes comme l\'identité et l\'humanité. Cependant, le rythme lent et la durée du film peuvent décourager certains spectateurs, et l\'intrigue, bien que riche en thèmes philosophiques, peut sembler difficile à suivre. Malgré ces aspects, "Blade Runner 2049" est une expérience cinématographique immersive et réfléchie.', 
            'Réalisation sublime de Denis Villeneuve, Effets visuels et cinématographie magnifiques, Performances puissantes de Ryan Gosling et Harrison Ford.',
            'Rythme lent et longue durée, Intrigue complexe et parfois difficile à suivre.',
            60 ,
            52,
            4),
        new Commentaire(
            5,
            'Caraïbe132', 
            '13 Hours', 
            new Date(), 
            '"13 Hours: The Secret Soldiers of Benghazi" est un film de guerre intense réalisé par Michael Bay, qui retrace les événements tragiques de l\'attaque du complexe américain à Benghazi. Le film est efficace dans sa représentation des scènes d\'action et de combat, offrant une tension palpable. Les performances des acteurs, notamment John Krasinski, sont solides et contribuent à une atmosphère authentique. Néanmoins, le film est parfois critiqué pour son manque de nuance et de contexte politique, se concentrant davantage sur l\'action que sur l\'analyse des événements. De plus, le style typiquement explosif de Michael Bay peut parfois sembler excessif.', 
            'Scènes d\'action et de combat intenses, Performances solides, en particulier de John Krasinski, Atmosphère authentique et immersive.',
            'Manque de nuance et de contexte politique, Style visuel parfois excessif typique de Michael Bay.',
            60 ,
            52,
            5),
        new Commentaire(
            5,
            'Patrick', 
            'Top Gun - Maverick', 
            new Date(), 
            '"Top Gun: Maverick" est une suite énergique et nostalgique qui rend hommage à l\'original tout en apportant une touche de modernité. Les scènes de vol sont spectaculaires et réalistes, offrant une expérience immersive. Tom Cruise reprend son rôle avec charisme et énergie, accompagné d\'un casting solide. La bande sonore, mêlant classique et moderne, renforce l\'ambiance patriotique. Cependant, l\'intrigue est parfois prévisible et les personnages secondaires manquent de profondeur. Malgré ces quelques faiblesses, le film parvient à captiver et à ravir les fans de la première heure ainsi que les nouveaux spectateurs.', 
            'Scènes de vol spectaculaires et réalistes, Performance charismatique de Tom Cruise, Bonne combinaison de nostalgie et de modernité.',
            'Intrigue parfois prévisible, Personnages secondaires peu développés.',
            60 ,
            52,
            6),
        new Commentaire(
            5,
            'Justine', 
            'Drive', 
            new Date(), 
            '"Drive" est un film néo-noir stylisé mettant en vedette Ryan Gosling, qui incarne un mystérieux chauffeur. Le film se distingue par son esthétique visuelle unique, avec une utilisation marquée des néons et des couleurs. La performance de Gosling, tout en retenue et en intensité, est particulièrement marquante. La bande-son, mêlant électro et synthwave, renforce l\'ambiance cool et mélancolique. Toutefois, le film peut sembler lent et minimaliste pour certains spectateurs, et les scènes de violence, bien que rares, sont brutales. Malgré cela, "Drive" reste une œuvre captivante et stylisée qui explore les thèmes de la solitude et de la moralité.', 
            'Esthétique visuelle unique et stylisée, Performance marquante de Ryan Gosling, Bande-son électro et synthwave mémorable.',
            'Rythme lent et minimaliste, Scènes de violence brutales.',
            60 ,
            52,
            7),
        new Commentaire(
            5,
            'Théo', 
            'Fast & Furious 9', 
            new Date(), 
            '"Fast & Furious 9" continue la saga d\'action à grande vitesse avec plus de cascades incroyables et d\'effets spéciaux époustouflants. Le film se distingue par ses scènes d\'action exagérées et spectaculaires, qui repoussent les limites de la réalité. Le retour de Vin Diesel et du casting principal apporte une familiarité appréciée par les fans de longue date. Cependant, l\'intrigue est souvent absurde et manque de cohérence, et les dialogues sont parfois clichés. De plus, la surenchère constante dans les scènes d\'action peut être fatigante pour certains spectateurs. Malgré ces défauts, le film reste un divertissement efficace pour les amateurs de sensations fortes.', 
            'Scènes d\'action exagérées et spectaculaires, Retour du casting principal, incluant Vin Diesel, Effets spéciaux époustouflants.',
            'Intrigue souvent absurde et incohérente, Dialogues clichés, Surchauffe dans les scènes d\'action pouvant être fatigante.',
            60 ,
            52,
            8),
        new Commentaire(
            5,
            'Phile', 
            'Tyler Rake - Extraction', 
            new Date(), 
            '"Tyler Rake - Extraction 1" est un film d\'action intense mettant en scène Chris Hemsworth dans le rôle d\'un mercenaire en mission de sauvetage. Le film est notable pour ses séquences d\'action bien chorégraphiées et ses longues prises de vue immersives. La performance de Hemsworth est solide, apportant à la fois une présence physique et une profondeur émotionnelle à son personnage. Cependant, le scénario reste assez basique et prévisible, centré principalement sur l\'action. De plus, certains personnages secondaires manquent de développement, ce qui peut réduire l\'impact émotionnel de l\'histoire. Malgré cela, "Tyler Rake" est un film d\'action captivant qui offre des moments de tension et de suspense.', 
            'Séquences d\'action bien chorégraphiées et immersives, Performance solide de Chris Hemsworth, Prises de vue longues et immersives.',
            'Scénario basique et prévisible, Manque de développement des personnages secondaires.',
            60 ,
            52,
            9),
            
    ];

    getCommentairesByFilmId(filmId: number): Commentaire[] {
        return this.commentaires.filter(commentaire => commentaire.filmId === filmId);
    }
}
