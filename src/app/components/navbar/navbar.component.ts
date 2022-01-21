import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // public tipos(){
  //   //tipo único
  //   let num1:number = 2;

  //   //varios tipos
  //   let x:number|string;
  //   x = 3;
  //   x = "hola";
  //   console.log(x);
  // }


  // //FUNCIONES
  // public suma(a:number,b:number):number{
  //   return a+b;
  // }

  // //param opcional
  // public opcional(a:number,b?:number):number{
  //   if(b!=undefined){
  //      return a+b;
  //   }

  //   return a;
  // }

  // //por defecto
  // public potencia(num:number,exponente:number = 2):number{
  //     return Math.pow(num,exponente);
  // }

  // //parametros rest
  // public sumarTodo(...numeros:number[]):number{

  //   // let sumar = 0;
  //   // for(let i = 0;i<numeros.length;i++){
  //   //   sumar += numeros[i];
  //   // }

  //   // return sumar;

  //   let total = numeros.reduce((a,b)=>a+b,0);
  //   return total;

  // }

  // //Operador Spread
  // public spread(){
  //   let arreglo:number[]=[1,2,3,4,5,6,7,8,9,10];
  //   return this.sumarTodo(...arreglo);
  // }
}
