import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { FeatureoneComponent } from './featureone/featureone.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FeatureoneComponent,
  },
  {
    path: 'pageone',
    component: PageoneComponent,
  },
  {
    path: 'pagetwo',
    component: PagetwoComponent,
  },
  {
    path: 'pagethree',
    component: PagethreeComponent,
  },
];

@NgModule({
  declarations: [
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    FeatureoneComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class FeatureOneModule {}
