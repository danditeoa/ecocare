import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { TermosComponent } from './termos/termos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {path :'', redirectTo : 'home', pathMatch:'full'},
  {path :'home', component: HomeComponent},
  {path :'store', component: StoreComponent},
  {path :'product', component: ProductComponent},
  {path :'profile', component: ProfileComponent},
  {path :'admin', component: AdminComponent},
  {path: 'terms', component: TermosComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'cart', component: CartComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
