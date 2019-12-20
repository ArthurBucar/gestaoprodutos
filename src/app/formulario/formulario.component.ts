import { Component } from '@angular/core';
import { FormularioService } from './formulario.service';
import { Formulario } from './formulario';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html'
})
export class FormularioComponent {
    constructor(private formularioService: FormularioService){}

    formulario: Formulario = new Formulario();

    salvar(): void {
        //this.formularioService.salvar(this.nome, this.sobrenome);
        this.formularioService.salvar(this.formulario);
    }

}