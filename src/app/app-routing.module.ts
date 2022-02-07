import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TreinosComponent } from './treinos/treinos.component';
import { AlimentacaoComponent } from './alimentacao/alimentacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [

  //{ path: '',component: LoginComponent},
  { path: '', component: CadastroComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
