import { Component, OnInit, ViewChild } from '@angular/core';
import{Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import {Article} from '../models/article';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
 @ViewChild("f") signupForm?:NgForm;
 article? : Article;

  constructor(private  articleService:DataService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.signupForm);
  }
  addArticle(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout avec succès',
      showConfirmButton: false,
      timer: 1000
    })
    console.log(this.article);
    this.articleService.addArticle(this.article).subscribe();
    this.signupForm?.reset();
  }

  getArticles(){
    this.router.navigate(['/articles']);
  }


}
