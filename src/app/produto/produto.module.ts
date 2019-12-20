import { NgModule } from "@angular/core";
import { ProdutoListComponent } from "./produto-list.component";
import { ProdutoNovoComponent } from "./produto-novo.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:
        [ProdutoListComponent
            , ProdutoNovoComponent
        ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path: 'produto/listar', component: ProdutoListComponent},
            {path: 'produto/novo/:id', component: ProdutoNovoComponent, canActivate: [ValidacaoIdGuard],
             canDeactivate: [ProdutoAlteracaoGuard]},
            {path: 'produto/novo', component: ProdutoNovoComponent}
        ]),
        ProdutoModule
    ],
    exports: []
})
export class ProdutoModule {

}