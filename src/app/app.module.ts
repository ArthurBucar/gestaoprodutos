import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ProdutoListComponent } from './produto/produto-list.component';
import { EstrelaComponent } from './shared/estrela/estrela.component';
import { Error404Component } from './core/error/erro-404.component';

import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar/nav-bar.component';
import { HomeComponent } from './core/home/home.component'
import { ProdutoNovoComponent } from './produto/produto-novo.component';
import { SubstituirCaracterePipe } from './shared/pipes/substituir-caractere.pipe';
import { ValidacaoIdGuard } from './shared/guards/validacao-id.guard';
import { ProdutoAlteracaoGuard } from './produto/produto-alteracao.guard';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EstrelaComponent,
    Error404Component,
    NavBarComponent,
    HomeComponent,
    SubstituirCaracterePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'produto/listar', component: ProdutoListComponent},
      {path: 'produto/novo/:id', component: ProdutoNovoComponent, canActivate: [ValidacaoIdGuard],
       canDeactivate: [ProdutoAlteracaoGuard]},
      {path: 'produto/novo', component: ProdutoNovoComponent},
      {path: 'home', component: HomeComponent}, 
      {path: '', redirectTo: 'produto/listar', pathMatch: 'full'},
      {path: '**', component: Error404Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
