import { Component, OnInit } from '@angular/core';
import  { ServiceService} from '../shared/service/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }


  listarUser(){
    this.service.getUser().subscribe(res =>{

    } ,err =>{
          console.log(err) 
      })
  }

}
