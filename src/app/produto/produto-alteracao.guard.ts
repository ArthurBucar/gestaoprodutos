import { CanDeactivate } from "@angular/router";
import { ProdutoNovoComponent } from "./produto-novo.component";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProdutoAlteracaoGuard implements CanDeactivate<ProdutoNovoComponent> {

    canDeactivate(produtoNovoComponent: ProdutoNovoComponent): boolean{
        if(produtoNovoComponent.produtoForm.dirty){
            return confirm('O Formulário foi alterado, deseja sair ?')
        }
        return true;
    }
}