import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "./produto.service";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { NumberValidator } from "../shared/validator/number.validator";
import { Produto } from "./produto";
import { Router, ActivatedRoute } from "@angular/router";

/* function rating(control: AbstractControl):{[key: string]: boolean | null}{

    if(control.value !== undefined && isNaN(control.value) || control.value < 1 || control.value > 5){
        return {'range': true};
    } else {
        return null;
    }

    return null;
} */


@Component({
    templateUrl: 'produto-novo.component.html'
})
export class ProdutoNovoComponent implements OnInit {

    produtoForm: FormGroup;
    produto: Produto = new Produto();
    constructor(private produtoService: ProdutoService, private formBuilder: FormBuilder, private router: Router,
         private activatedRouter: ActivatedRoute) {

    }

    ngOnInit(): void {

        this.produtoForm = this.formBuilder.group({
            productName: ['', [Validators.required]],
            productCode: ['', [Validators.required]],
            price: ['', [Validators.required]],
            starRating: ['', [Validators.required, NumberValidator.rating(1, 5)]],
            description: ['', [Validators.required]],
        });

        /*    this.produtoForm = new FormGroup({
               productName: new FormControl('', [Validators.required, Validators.maxLength(5)])
               
           });  */

           const id = this.activatedRouter.snapshot.params['id'];

           if(id){
               const produtoRetorno: Produto = this.produtoService.obterPorId(+id);
               if(produtoRetorno){
                   this.produto = produtoRetorno;

                    this.produtoForm.patchValue({
                        productName: produtoRetorno.productName,
                        productCode: produtoRetorno.productCode,
                        price: produtoRetorno.price,
                        starRating: produtoRetorno.starRating,
                        description: produtoRetorno.description
                    });
               }
           }
    }

    salvar(): void{
        if(this.produtoForm.valid){
            const produtoMerge: Produto = {...this.produto, ...this.produtoForm.value};
            this.produtoService.salvar(produtoMerge);
            console.log(produtoMerge);
            this.router.navigate(['/produto/listar']);
        } else {
            console.log('Formulário Inválido')
        }
      
    }
}