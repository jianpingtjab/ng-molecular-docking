import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DockingDocumentComponent} from './docking-document/docking-document.component';
import {OnlineDockingComponent} from './online-docking/online-docking.component';
import {DockingLibraryIntroductionComponent} from './docking-library-introduction/docking-library-introduction.component';
import {DockingHomeComponent} from './docking-home/docking-home.component';
import {DockingIntroductionComponent} from './docking-introduction/docking-introduction.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DockingHomeComponent
  // },
  {
    path: 'docking-home',
    component: DockingHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'docking',
        pathMatch: 'full',
      },
      {
        path: 'docking',
        component: OnlineDockingComponent
      },
      {
        path: 'docking-document',
        component: DockingDocumentComponent
      },
      {
        path: 'docking-platform-introduction',
        component: DockingIntroductionComponent
      },
      {
        path: 'docking-library-introduction',
        component: DockingLibraryIntroductionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DockingRoutingModule {

}
