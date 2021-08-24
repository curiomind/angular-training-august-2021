import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { CanactivateGuard } from './guards/canactivate.guard';
import { CanactivatechildGuard } from './guards/canactivatechild.guard';
import { CandeactivateGuard } from './guards/candeactivate.guard';
import { CanloadGuard } from './guards/canload.guard';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { PostResolver } from './services/post.resolver';
import { PostsResolver } from './services/posts.resolver';

const routes: Routes = [
  {
    path: 'featureone',
    loadChildren: () =>
      import('./feature-one/feature-one.module').then(
        (m) => m.FeatureOneModule
      ),
  },
  {
    path: 'featuretwo',
    canLoad: [CanloadGuard],
    loadChildren: () =>
      import('./feature-two/feature-two.module').then(
        (m) => m.FeatureTwoModule
      ),
  },
  {
    path: 'formone',
    component: TemplateformComponent,
  },
  {
    path: 'formtwo',
    component: ReactiveformComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [CanactivateGuard],
    canDeactivate: [CandeactivateGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: {
      posts: PostsResolver,
    },
    canActivateChild: [CanactivatechildGuard],
    children: [
      {
        path: ':id',
        component: ProductComponent,
        resolve: {
          post: PostResolver,
        },
      },
    ],
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    pathMatch: 'full',
    resolve: {
      post: PostResolver,
    },
  },
  // {
  //   path: 'product/:id/details',
  //   component: AboutComponent,
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
