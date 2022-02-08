import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TreinosComponent } from './treinos/treinos.component';
import { AlimentacaoComponent } from './alimentacao/alimentacao.component';
import {HttpClientModule} from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component'
import { FormsModule } from '@angular/forms';
import { AddtreinosComponent } from './addtreinos/addtreinos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TreinosComponent,
    AlimentacaoComponent,
    CadastroComponent,
    AddtreinosComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
