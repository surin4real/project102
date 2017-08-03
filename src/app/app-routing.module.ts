import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './containers/about/about.component';
import { HomeComponent } from './containers/home/home.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { SuccessComponent } from './containers/success/success.component';
import { CancelComponent } from './containers/cancel/cancel.component';
import { IpnpaypalComponent } from './containers/ipnpaypal/ipnpaypal.component';
import { LoginComponent } from './containers/login/login.component';
import { ContactComponent } from './containers/contact/contact.component';
import { RefundComponent } from './containers/refund/refund.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
   {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'checkout/:title/:id',
    component: CheckoutComponent
  },
   {
    path: 'checkout/success',
    component: SuccessComponent
  },
  {
    path: 'checkout/cancelled',
    component: CancelComponent
  },
  {
    path: 'checkout/ipn_paypal',
    component: IpnpaypalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'refund',
    component: RefundComponent
  },
  {
    path: 'terms',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
