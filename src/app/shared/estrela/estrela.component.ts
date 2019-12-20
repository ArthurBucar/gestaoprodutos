import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-estrela',
    templateUrl: './estrela.component.html'
})
export class EstrelaComponent{
    @Input()
    rating: Number = 0; 
}