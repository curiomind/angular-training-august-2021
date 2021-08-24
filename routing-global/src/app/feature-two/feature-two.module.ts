import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';

import { RouterModule, Routes } from '@angular/router';
import { FeaturetwoComponent } from './featuretwo/featuretwo.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturetwoComponent,
    children: [
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
    ],
  },
];

@NgModule({
  declarations: [
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    FeaturetwoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureTwoModule {}
