import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class ValidacaoIdGuard implements CanActivate{

    constructor(private router: Router){
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const id = next.params['id'];

        if(isNaN(id)){
            alert('o id não é um número');
            this.router.navigate(['/produto/listar']);
            return false;
        } else {
            return true;
        }
    }
}
