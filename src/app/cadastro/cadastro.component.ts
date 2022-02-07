import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service/service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  

   userCadastro = {
          nome: '',
          idade:'',
          sexo:'',
          peso:'',
          altura:'',
          login:'',
          senha:'',
          
   } 
  constructor(private service: ServiceService,
    
    ) { }

  ngOnInit(){
  }

  cadastrar(){
     
    console.log(this.userCadastro)
    this.service.cadastroUser(this.userCadastro).subscribe((res)=>{
      console.log(res);
      alert('Usuário cadastrado')
    })

    
  }

}
