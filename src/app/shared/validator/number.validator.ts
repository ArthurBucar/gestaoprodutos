import { ValidatorFn, AbstractControl } from "@angular/forms";

export class NumberValidator{
    /* function rating(control: AbstractControl):{[key: string]: boolean | null}{

    if(control.value !== undefined && isNaN(control.value) || control.value < 1 || control.value > 5){
        return {'range': true};
    } else {
        return null;
    }

    return null;
} */

static rating(min: number, max: number): ValidatorFn{
    return (control: AbstractControl): { [key: string]: boolean | null } => {

        if (control.value !== undefined && isNaN(control.value) || control.value < min || control.value > max) {
            return { 'range': true };
        } else {
            return null;
        }
    
        return null;
    };
    }
}