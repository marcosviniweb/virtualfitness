import { Component, OnInit } from '@angular/core';
import  { ServiceService} from '../shared/service/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService) { }
    
  userLogin = {
        login: '',
        senha: ''
  }

  ngOnInit() {
 
  }


  logar(){
        console.log(this.userLogin)

        this.service.loginUser(this.userLogin).subscribe((res) =>{
          
                        console.log(res)    
                        if(res == null){
                          alert('Login ou senha inválido')
                        }  
        })
      
  }

}
