import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { AngularFireAuth } from 'angularfire2/auth';
import {Http, Headers, Response, Jsonp} from '@angular/http';
declare var Stripe:any;
declare var configure: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
sub: any;
cid: any;
title: string;
price: any; cost;
res: any; email;
isAuthorized: boolean = false;
  authState : boolean;
  username; uid;
  msg: string = "";
private cardToken:any;
constructor(meta: Meta, private http: Http, title: Title, private route: ActivatedRoute,
 private afAuth: AngularFireAuth, public router: Router) { 

    title.setTitle('Secure checkout | Guaranteed Angular 2 courses');

    meta.addTags([ 
      {
        name: 'author', content: 'AngularClass/Angular Team'
      },
      {
        name: 'keywords', content: 'About Angular Courses'
      },
      {
        name: 'description', content: 'Secure checkout | Guaranteed Angular 2 courses'
      },
    ])

    this.afAuth.authState.subscribe((auth) => {
              this.authState = ( auth !== null ) ? true : false;
              this.isAuthorized = this.authState;
             if(this.isAuthorized === false){
               
                  router.navigateByUrl('/login');
            }

            if(this.isAuthorized !== false){
              this.username = auth.displayName;
              this.uid = auth.uid;
              this.email = auth.email;

            }  
              
             
                    
      });
  }


  ngOnInit() {
    this.setUpCard();
     this.sub = this.route.params.subscribe(params => {
    if(params['id']){
        this.cid = params['id'];
        this.title = (params['title'].replace(/_/g, ' ')).toUpperCase();
      }
    if(this.cid === "BN9321S"){
      this.price = 19900;
      this.cost = 199;
    } else if (this.cid === "IN9432I"){
      this.price = 34900;
      this.cost = 349;
    } else if (this.cid === "BN1032I"){
      this.price = 74900;
      this.cost = 749;
    }
     });

     
  }
  setUpCard() {
    //here we setup the stripe publish key.
    //notice that this is a test key for my account so replace with production key(live)
    Stripe.setPublishableKey('pk_test_vV4J1xv4Erxp0qbd6zhAjZmo');
  }

  getCardData(number, month, year, cvc) {
    //I get the card data typed in here and pass it to the getCardToken method
    this.getCardToken(number, month, year, cvc);
    this.msg = 'Checking Card! be patient!';
  }

  getCardToken(number, month, year, cvc) {
    //set up the card data as an object
    var dataObj = {"number": number, "exp_month": month, "exp_year": year, "cvc": cvc};

    // Request a token from Stripe:
    Stripe.card.createToken(dataObj,
      (status, response) => { //I'm using an arrow function instead of stripeResponseHandler(a function also) cos it's kickass!
        // basically you can do anything here with the reponse that has your token
        // you can hit your backend api and initialize a charge etc
        if (status === 200) {
          //console.log("the card response: ", response);
          this.cardToken = response.id;
          //console.log("the caard token: ", this.cardToken);
          this.msg = 'Secure payment gateway processing...';
        /*this.http.get('https://lawless-rigging.000webhostapp.com/index.php').map((response: Response) => response.json())
        .subscribe(result => {
            this.res = result;
            console.log(this.res.name);
        });*/

        let headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
           let data = {
             'token': this.cardToken,
             'amount': this.price,
             'title': this.title
           }
          this.http.post('https://lawless-rigging.000webhostapp.com/charge.php', data, {
              headers: headers
          }).subscribe(res => {
              console.log('post result %o', res.json().message);
              this.msg = res.json().message;
              this.router.navigateByUrl('/checkout/success');
          });

        }
        else {
          console.log("error in getting card data: ", response.error);
        }
      }
    );

  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
      locale: 'auto',
      token: (token: any) => {
         // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        //https://lawless-rigging.000webhostapp.com/
      
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: this.price
    });
  }

}
