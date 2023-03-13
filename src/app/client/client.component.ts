import { Component, OnInit, ViewChild } from '@angular/core';
import{Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';
import {Client} from '../models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
 @ViewChild("f") signupForm?:NgForm;
 client? : Client;
  constructor(private  clientService:DataService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.signupForm);
  }
  addClient(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout avec succès',
      showConfirmButton: false,
      timer: 1000
    })
    console.log(this.client);
    this.clientService.addClient(this.client).subscribe();
    this.signupForm?.reset();
  }

  getClients(){
    this.router.navigate(['/clients']);
  }


}
