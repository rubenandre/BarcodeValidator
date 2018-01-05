import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Dados essenciais para projeto
  codigoBarras: number
  codigo: string
  sp: number = 0
  spP: number = 0
  pd: number
  posicao: number
  correcao: string
  digitos: number
  split: string[]

  // Aparacimento do botão
  corrigir: boolean = false
  ativarSete: boolean = false
  ativarSeteErr: boolean = false
  ativarSeis: boolean = false
  ativarTreze: boolean = false
  ativarTrezeErr: boolean = false
  ativarDoze: boolean = false
  ativarDozeErr: boolean = false

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
  }

  verificar(){
    this.ativarSete = false
    this.ativarSeteErr = false
    this.ativarTrezeErr = false
    this.ativarSeis = false
    this.ativarTreze = false
    this.ativarDoze = false
    this.ativarDozeErr = false
    // Dados essenciais para projeto
    this.sp = 0
    this.corrigir = false
    this.codigo = this.codigoBarras.toString()
    this.digitos = this.codigo.length

    if (this.digitos == 6){
      this.split = this.codigo.split('')
      let toast = this.toastCtrl.create({
        message: 'Código de Barras Inválido',
        duration: 3000,
        position: 'bottom'
      });

      toast.present()

      this.corrigir = true
    }

    /*
       1º Caso EAN7
       Função verificar(), faz a verificação se o codigo é valido ou não,
       apresentando um respetivo toaster com a informação
    */
    else if (this.digitos == 7){

      // Calculo SP
      this.split = this.codigo.split('')
      this.posicao = 7
      for(let i = 0; i < 7; i++){
        if (this.posicao % 2 == 0){
          this.pd = 3
        } else if (this.posicao % 2 != 0){
          this.pd = 1
        }
        this.posicao--
        this.sp = this.sp + ( this.pd * Number(this.split[i]))
      }
      // Verificação de validade
      if (this.sp % 10 == 0){
        let toast = this.toastCtrl.create({
          message: 'Código de Barras Válido',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();

        this.ativarSete = true
        this.codigoBarras = null
      } else {
          this.corrigir = true
          this.spP = this.sp
          let toast = this.toastCtrl.create({
            message: 'Código de Barras Inválido',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
      }

    }

    /*
       2º Caso EAN13
       Função verificar(), faz a verificação se o codigo é valido ou não,
       apresentando um respetivo toaster com a informação
    */
    else if (this.digitos == 13){

      // Calculo SP
      this.split = this.codigo.split('')
      this.posicao = 13
      for(let i = 0; i < 13; i++){
        if (this.posicao % 2 == 0){
          this.pd = 3
        } else if (this.posicao % 2 != 0){
          this.pd = 1
        }
        this.posicao--
        this.sp = this.sp + ( this.pd * Number(this.split[i]))
      }
      // Verificação de validade
      if (this.sp % 10 == 0){
        let toast = this.toastCtrl.create({
          message: 'Código de Barras Válido',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();

        this.ativarTreze = true
        this.codigoBarras = null
      } else {

          this.spP = this.sp
          let toast = this.toastCtrl.create({
            message: 'Código de Barras Inválido',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();

          this.corrigir = true
      }
    }

    else if (this.digitos = 12){
      /*
         3º Caso UCP12
         Função verificar(), faz a verificação se o codigo é valido ou não,
         apresentando um respetivo toaster com a informação
      */
      // Calculo SP
      this.split = this.codigo.split('')
      this.posicao = 12
      for(let i = 0; i < 12; i++){
        if (this.posicao % 2 == 0){
          this.pd = 3
        } else if (this.posicao % 2 != 0){
          this.pd = 1
        }
        this.posicao--
        this.sp = this.sp + ( this.pd * Number(this.split[i]))
      }
      // Verificação de validade
      if (this.sp % 10 == 0){
        let toast = this.toastCtrl.create({
          message: 'Código de Barras Válido',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();

        this.ativarDoze = true
        this.codigoBarras = null
      } else {
          this.corrigir = true
          this.spP = this.sp
          let toast = this.toastCtrl.create({
            message: 'Código de Barras Inválido',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
      }

    }

  }

  resolver(){
    // Correção 1º Caso EAN7
    this.sp = 0
    if (this.digitos == 7 || this.digitos == 6){
      this.posicao = 7
      for(let i = 0; i < 6; i++){
        if (this.posicao % 2 == 0){
          this.pd = 3
        } else if (this.posicao % 2 != 0){
          this.pd = 1
        }
        this.posicao--
        this.sp = this.sp + ( this.pd * Number(this.split[i]))
      }

      let c = this.sp % 10
      let cv = 10 - c
      this.correcao = this.split[0] + this.split[1] + this.split[2] + this.split[3] + this.split[4] + this.split[5] + cv

      let toast = this.toastCtrl.create({
        message: "Novo: " + this.correcao,
        showCloseButton: true,
        closeButtonText: 'x',
        position: 'bottom'
      });

      toast.present();
      if (this.digitos == 6){
        this.ativarSeis = true
      } else if (this.digitos == 7){
        this.ativarSeteErr = true
      }

      this.codigoBarras = null
      this.corrigir = false

      //Correção 2º caso EAN13
    } else if (this.digitos == 13 || this.digitos == 12) {
      this.posicao = 13
      for(let i = 0; i < 12; i++){
        if (this.posicao % 2 == 0){
          this.pd = 3
        } else if (this.posicao % 2 != 0){
          this.pd = 1
        }
        this.posicao--
        this.sp = this.sp + ( this.pd * Number(this.split[i]))
      }
      let c = this.sp % 10
      let cv = 10 - c
      if (cv == 10){
        cv = 0
      }

      this.correcao = this.split[0] + this.split[1] + this.split[2] + this.split[3] + this.split[4] + this.split[5] + this.split[6] + this.split[7] + this.split[8] + this.split[9] + this.split[10] + this.split[11] + cv

      let toast = this.toastCtrl.create({
        message: "Novo: " + this.correcao,
        showCloseButton: true,
        closeButtonText: 'x',
        position: 'bottom'
      });

      toast.present();

      if (this.digitos == 12){
        this.ativarDozeErr = true
      } else if (this.digitos == 13){
        this.ativarTrezeErr = true
      }

      this.codigoBarras = null
      this.corrigir = false
    }
  }

}
