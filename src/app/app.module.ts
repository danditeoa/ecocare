import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { CardProductComponent } from './card-product/card-product.component';
import {MatInputModule} from '@angular/material/input';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { TermosComponent } from './termos/termos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { CartComponent } from './cart/cart.component';
import { ModalCartComponent } from './modal-cart/modal-cart.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardProductComponent,
    CardProductComponent,
    StoreComponent,
    ProductComponent,
    AdminComponent,
    ProfileComponent,
    ModalComponent,
    TermosComponent,
    PrivacyComponent,
    AboutComponent,
    HelpComponent,
    CartComponent,
    ModalCartComponent,  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
