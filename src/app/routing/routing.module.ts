import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { ProductsDetailComponent } from '../components/products-detail/products-detail.component';

const routes: Route[] = [
  {path: 'list', component: ProductsListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'detail/:id', component: ProductsDetailComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
