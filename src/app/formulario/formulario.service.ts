import { Injectable } from "@angular/core";
import { Formulario } from "./formulario";

@Injectable({
    providedIn: 'root'
})
export class FormularioService {

    salvar(formulario: Formulario): void{
        console.log('Operação realizada com sucesso !', formulario.nome, formulario.sobrenome);
    }
}