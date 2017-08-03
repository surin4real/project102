import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SkinModule } from './skin/skin.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import 'hammerjs';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { CancelComponent } from './containers/cancel/cancel.component';
import { SuccessComponent } from './containers/success/success.component';
import { IpnpaypalComponent } from './containers/ipnpaypal/ipnpaypal.component';

import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';
import { LoginComponent } from './containers/login/login.component';
import { ContactComponent } from './containers/contact/contact.component';
import { RefundComponent } from './containers/refund/refund.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CheckoutComponent,
    CancelComponent,
    SuccessComponent,
    IpnpaypalComponent,
    LoginComponent,
    ContactComponent,
    RefundComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SkinModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularbundles'),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AppRoutingModule
  ],
  providers: [AuthService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
