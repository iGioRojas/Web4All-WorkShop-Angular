import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, args:any): any {
    const resultados = [];

    for(const heroe of value){
      let valor = heroe.name.toLowerCase();
      if(valor.indexOf(args.toLowerCase()) > -1){
        resultados.push(heroe);
      }
    }

    return resultados;
  }

}
