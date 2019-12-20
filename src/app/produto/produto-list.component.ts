import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "./produto.service";
import { Produto } from "./produto";

@Component({
    selector: 'app-produto-list',
    templateUrl: './produto-list.component.html'
})
export class ProdutoListComponent implements OnInit{

    produtos: Produto[] = [];

    produtosFiltrados: Produto[] = [];

    filtro: String;
    
    exibirImagem: Boolean = false;

    constructor(private produtoService: ProdutoService){

    }

    ngOnInit(): void{
        this.produtos = this.produtoService.obterTodos();
        this.produtosFiltrados = this.produtos;
        console.log(this.produtoService.obterTodos());
    }

    alterarFlag(): void{
        this.exibirImagem = !this.exibirImagem;
    }

    get filtrarPor(): String {
        return this.filtro;
    }
    
    set filtrarPor(nome: String){
        this.filtro = nome;
        this.produtosFiltrados = this.produtos.filter(produto => produto.productName.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) > -1);
        console.log(this.filtro);
    }
}