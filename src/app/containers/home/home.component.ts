import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 

    title.setTitle('Learn Angular 2 The Right Way!');

    meta.addTags([ 
      {
        name: 'author', content: 'AngularClass/Angular Team'
      },
      {
        name: 'keywords', content: 'Angular Courses, learn angular2'
      },
      {
        name: 'description', content: 'Welcome to Angular Courses'
      },
    ])
  }
  ngOnInit() {
  }

}
