import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { AngularFireAuth } from 'angularfire2/auth';
import {Http, Headers, Response, Jsonp} from '@angular/http';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
res: any; email;
isAuthorized: boolean = false;
  authState : boolean;
  username; uid;
  constructor(meta: Meta, private http: Http, title: Title, private route: ActivatedRoute,
 private afAuth: AngularFireAuth, public router: Router) { 

    title.setTitle('Success! Start your course now');

    meta.addTags([ 
     
    ])

    /*this.afAuth.authState.subscribe((auth) => {
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
 
    });*/
 }

  ngOnInit() {

  }

}
