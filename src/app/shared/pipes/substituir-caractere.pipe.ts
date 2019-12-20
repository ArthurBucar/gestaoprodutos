import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'substituircaractere'
})
export class SubstituirCaracterePipe implements PipeTransform{

    transform(value: string, caractere: string): string {
        const caractereTransformado: string = value.replace(caractere, ' --- ');

        return caractereTransformado;
    }  
}