import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthorized: boolean = false;
  authState : boolean;
  username; uid;
constructor(meta: Meta, title: Title, private route: ActivatedRoute, private afAuth: AngularFireAuth, router: Router) { 

    title.setTitle('Login | Guaranteed Angular 2 courses');

    meta.addTags([ 
      {
        name: 'author', content: 'AngularClass/Angular Team'
      },
      {
        name: 'keywords', content: 'Login Angular Courses'
      },
      {
        name: 'description', content: 'Login to Angular 2 courses'
      },
    ])

    this.afAuth.authState.subscribe((auth) => {
              this.authState = ( auth !== null ) ? true : false;
              this.isAuthorized = this.authState;
             if(this.isAuthorized === true){
               
                  router.navigateByUrl('/');
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
