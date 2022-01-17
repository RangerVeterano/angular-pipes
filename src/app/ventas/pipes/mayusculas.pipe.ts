import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(arg: string, enMayus: boolean = true): string {

        return (enMayus) ? arg.toUpperCase() : arg.toLowerCase();
    }

}