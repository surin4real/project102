import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Bundles';
  isAuthorized: boolean = false;
  authState : boolean;
  username; 
  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase, private auth: AuthService, private afAuth: AngularFireAuth) {
    this.items = db.list('/items');
     this.afAuth.authState.subscribe((auth) => {
              this.authState = ( auth !== null ) ? true : false;
              this.isAuthorized = this.authState;
              if(this.isAuthorized !== false){
                 this.username = auth.displayName;
              }
              
      });
    
  }

  fbLogin() {
    this.auth.facebookLogin();
  }
  googleLogin() {
    this.auth.googleLogin();
  }

  logout(){
    this.auth.signOut();
  }
}
