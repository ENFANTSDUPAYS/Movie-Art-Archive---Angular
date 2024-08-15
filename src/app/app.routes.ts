import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagepanierComponent } from './page-panier/page-panier.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    //SI ON VEUT METTRE EN PLACE LES AUTRE PAGE, ALORS CREER NOUVEAU COMPOSANT ET LES ASSOCIERS
    { path: 'features', component: FeaturesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'panier', component: PagepanierComponent }
];
