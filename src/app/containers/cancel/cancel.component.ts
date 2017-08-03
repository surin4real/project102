import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
isAuthorized: boolean = false;
  authState : boolean;
  username; uid;
    constructor(meta: Meta, title: Title, router: Router, private afAuth: AngularFireAuth,) { 
    
    title.setTitle('Opps! Something went wrong!');

    meta.addTags([ 
  
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
            }  
              
             
                    
      });
  }

  ngOnInit() {
  }

}
