import { Component, OnInit } from '@angular/core';
import  { ServiceService} from '../shared/service/service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
       this.listarUser()
  }

  listarUser(){
    this.service.getUser().subscribe(res =>{
             console.log(res)
    } ,err =>{
          console.log(err) 
      })
  }

}
