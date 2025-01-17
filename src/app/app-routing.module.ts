import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { IdentificationComponent } from './views/identification/identification.component';
import { TableauDeBordComponent } from './views/tableau-de-bord/tableau-de-bord.component';
import { DemandesStagesComponent } from './views/demandes-stages/demandes-stages.component';
import { OffresStagesComponent } from './views/offres-stages/offres-stages.component';
import { CandidatsComponent } from './views/candidats/candidats.component';
import { EntreprisesComponent } from './views/entreprises/entreprises.component';
import { CandidatsAddComponent } from './views/candidats-add/candidats-add.component';
import { CandidatsInfosComponent } from './views/candidats-infos/candidats-infos.component';
import { DemandesStagesEditComponent } from './views/demandes-stages-edit/demandes-stages-edit.component';
import { DemandesStagesAddComponent } from './views/demandes-stages-add/demandes-stages-add.component';
import { DemandesStagesViewsComponent } from './views/demandes-stages-views/demandes-stages-views.component';
import { OffresStagesEditComponent } from './views/offres-stages-edit/offres-stages-edit.component';
import { OffresStagesAddComponent } from './views/offres-stages-add/offres-stages-add.component';
import { OffresStagesViewComponent  }  from './views/offres-stages-view/offres-stages-view.component';
import { EntreprisesAddComponent } from './views/entreprises-add/entreprises-add.component';
import { EntreprisesInfosComponent } from './views/entreprises-infos/entreprises-infos.component';
import { CandidatsEditComponent } from './views/candidats-edit/candidats-edit.component';
import { EntreprisesEditComponent } from './views/entreprises-edit/entreprises-edit.component';

const routes: Routes = [

  //ajout de AuthGuardService sur toutes les pages sauf IdentificationComponent
  {
    path: '',
    component: IdentificationComponent
  },
  {
    path: 'tableau-de-bord',
    component: TableauDeBordComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'demandes-de-stages',
    component: DemandesStagesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'demandes-de-stages/add',
    component: DemandesStagesAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'demandes-de-stages/edit/:id',
    component: DemandesStagesEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'demandes-de-stages/view/:id',
    component: DemandesStagesViewsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'offres-de-stages',
    component: OffresStagesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'offres-de-stages/edit/:id',
    component: OffresStagesEditComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'offres-de-stages/add',
    component: OffresStagesAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'offres-de-stages/view/:id',
    component: OffresStagesViewComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'candidats',
    component: CandidatsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'candidats/add',
    component: CandidatsAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'candidats/edit',
    component: CandidatsEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'candidats/infos/:id',
    component: CandidatsInfosComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'entreprises',
    component: EntreprisesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'entreprises/add',
    component: EntreprisesAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'entreprises/edit',
    component: EntreprisesEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'entreprises/infos/:id',
    component: EntreprisesInfosComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
