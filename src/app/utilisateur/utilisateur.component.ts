import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  name="emna";
  status="activé";
  constructor() { }
getStatus(){
  return this.status;
}
  ngOnInit(): void {
  }

}
