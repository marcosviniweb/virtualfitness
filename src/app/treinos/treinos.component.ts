import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service/service.service';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css']
})
export class TreinosComponent implements OnInit {
   
   
   tipo: string = '';
   treinos = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }
   
  peito(){
        this.tipo = 'Peito'    
        this.service.treinoUser(this.tipo).subscribe((res) =>{
                   console.log(res)
                   this.treinos = res;
        })
  }
  
  triceps(){
    this.tipo = 'Tríceps' 
    this.service.treinoUser(this.tipo).subscribe((res) =>{
      console.log(res)
      this.treinos = res;
})
  }
  
  costas(){
    this.tipo = 'Costas'
    this.service.treinoUser(this.tipo).subscribe((res) =>{
      console.log(res)
      this.treinos = res;
})
  } 

  biceps(){
    this.tipo = 'Bíceps'
    this.service.treinoUser(this.tipo).subscribe((res) =>{
      console.log(res)
      this.treinos = res;
})
  } 

  antebraco(){
    this.tipo = "Antebraço"
    this.service.treinoUser(this.tipo).subscribe((res) =>{
      console.log(res)
      this.treinos = res;
})
  }

  pernas(){
    this.tipo = "Pernas"
    this.service.treinoUser(this.tipo).subscribe((res) =>{
      console.log(res)
      this.treinos = res;
})
  }

  ombro(){
    this.tipo = "Ombro"
    this.service.treinoUser(this.tipo).subscribe((res) =>{
      console.log(res)
      this.treinos = res;
})
  }

  trapezio(){
    this.tipo = "Trapézio"
    this.service.treinoUser(this.tipo).subscribe((res) =>{
      console.log(res)
      this.treinos = res;
})
  }


}
