webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.sp = 0;
        this.spP = 0;
        // Aparacimento do botão
        this.corrigir = false;
        this.ativarSete = false;
        this.ativarSeteErr = false;
        this.ativarSeis = false;
        this.ativarTreze = false;
        this.ativarTrezeErr = false;
        this.ativarDoze = false;
        this.ativarDozeErr = false;
    }
    HomePage.prototype.verificar = function () {
        this.ativarSete = false;
        this.ativarSeteErr = false;
        this.ativarTrezeErr = false;
        this.ativarSeis = false;
        this.ativarTreze = false;
        this.ativarDoze = false;
        this.ativarDozeErr = false;
        // Dados essenciais para projeto
        this.sp = 0;
        this.corrigir = false;
        this.codigo = this.codigoBarras.toString();
        this.digitos = this.codigo.length;
        if (this.digitos == 6) {
            this.split = this.codigo.split('');
            var toast = this.toastCtrl.create({
                message: 'Código de Barras Inválido',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.corrigir = true;
        }
        else if (this.digitos == 7) {
            // Calculo SP
            this.split = this.codigo.split('');
            this.posicao = 7;
            for (var i = 0; i < 7; i++) {
                if (this.posicao % 2 == 0) {
                    this.pd = 3;
                }
                else if (this.posicao % 2 != 0) {
                    this.pd = 1;
                }
                this.posicao--;
                this.sp = this.sp + (this.pd * Number(this.split[i]));
            }
            // Verificação de validade
            if (this.sp % 10 == 0) {
                var toast = this.toastCtrl.create({
                    message: 'Código de Barras Válido',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.ativarSete = true;
                this.codigoBarras = null;
            }
            else {
                this.corrigir = true;
                this.spP = this.sp;
                var toast = this.toastCtrl.create({
                    message: 'Código de Barras Inválido',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        }
        else if (this.digitos == 13) {
            // Calculo SP
            this.split = this.codigo.split('');
            this.posicao = 13;
            for (var i = 0; i < 13; i++) {
                if (this.posicao % 2 == 0) {
                    this.pd = 3;
                }
                else if (this.posicao % 2 != 0) {
                    this.pd = 1;
                }
                this.posicao--;
                this.sp = this.sp + (this.pd * Number(this.split[i]));
            }
            // Verificação de validade
            if (this.sp % 10 == 0) {
                var toast = this.toastCtrl.create({
                    message: 'Código de Barras Válido',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.ativarTreze = true;
                this.codigoBarras = null;
            }
            else {
                this.spP = this.sp;
                var toast = this.toastCtrl.create({
                    message: 'Código de Barras Inválido',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.corrigir = true;
            }
        }
        else if (this.digitos = 12) {
            /*
               3º Caso UCP12
               Função verificar(), faz a verificação se o codigo é valido ou não,
               apresentando um respetivo toaster com a informação
            */
            // Calculo SP
            this.split = this.codigo.split('');
            this.posicao = 12;
            for (var i = 0; i < 12; i++) {
                if (this.posicao % 2 == 0) {
                    this.pd = 3;
                }
                else if (this.posicao % 2 != 0) {
                    this.pd = 1;
                }
                this.posicao--;
                this.sp = this.sp + (this.pd * Number(this.split[i]));
            }
            // Verificação de validade
            if (this.sp % 10 == 0) {
                var toast = this.toastCtrl.create({
                    message: 'Código de Barras Válido',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.ativarDoze = true;
                this.codigoBarras = null;
            }
            else {
                this.corrigir = true;
                this.spP = this.sp;
                var toast = this.toastCtrl.create({
                    message: 'Código de Barras Inválido',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        }
    };
    HomePage.prototype.resolver = function () {
        // Correção 1º Caso EAN7
        this.sp = 0;
        if (this.digitos == 7 || this.digitos == 6) {
            this.posicao = 7;
            for (var i = 0; i < 6; i++) {
                if (this.posicao % 2 == 0) {
                    this.pd = 3;
                }
                else if (this.posicao % 2 != 0) {
                    this.pd = 1;
                }
                this.posicao--;
                this.sp = this.sp + (this.pd * Number(this.split[i]));
            }
            var c = this.sp % 10;
            var cv = 10 - c;
            this.correcao = this.split[0] + this.split[1] + this.split[2] + this.split[3] + this.split[4] + this.split[5] + cv;
            var toast = this.toastCtrl.create({
                message: "Novo: " + this.correcao,
                showCloseButton: true,
                closeButtonText: 'x',
                position: 'bottom'
            });
            toast.present();
            if (this.digitos == 6) {
                this.ativarSeis = true;
            }
            else if (this.digitos == 7) {
                this.ativarSeteErr = true;
            }
            this.codigoBarras = null;
            this.corrigir = false;
            //Correção 2º caso EAN13
        }
        else if (this.digitos == 13 || this.digitos == 12) {
            this.posicao = 13;
            for (var i = 0; i < 12; i++) {
                if (this.posicao % 2 == 0) {
                    this.pd = 3;
                }
                else if (this.posicao % 2 != 0) {
                    this.pd = 1;
                }
                this.posicao--;
                this.sp = this.sp + (this.pd * Number(this.split[i]));
            }
            var c = this.sp % 10;
            var cv = 10 - c;
            if (cv == 10) {
                cv = 0;
            }
            this.correcao = this.split[0] + this.split[1] + this.split[2] + this.split[3] + this.split[4] + this.split[5] + this.split[6] + this.split[7] + this.split[8] + this.split[9] + this.split[10] + this.split[11] + cv;
            var toast = this.toastCtrl.create({
                message: "Novo: " + this.correcao,
                showCloseButton: true,
                closeButtonText: 'x',
                position: 'bottom'
            });
            toast.present();
            if (this.digitos == 12) {
                this.ativarDozeErr = true;
            }
            else if (this.digitos == 13) {
                this.ativarTrezeErr = true;
            }
            this.codigoBarras = null;
            this.corrigir = false;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ruben/barcodeValidator/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Validador Código de Barras\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Código Barras</ion-label>\n    <ion-input [(ngModel)]="codigoBarras" type="number"></ion-input>\n  </ion-item>\n  <div align="center" class="espacamento">\n    <button (click)="verificar()" ion-button color="secondary" round medium>Verificar</button>\n    <button (click)="resolver()" *ngIf="this.corrigir" ion-button color="danger" round medium>Corrigir</button>\n  </div>\n\n  <!-- Tabela 1 Auto-Verificação EAN7 -->\n  <div *ngIf="this.ativarSete">\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{this.sp}}</p>\n    <p class="centro"><b>Resto: </b>{{this.sp % 10}}</p>\n  </div>\n  <!-- Fim Tabela 1 Auto-Verificação EAN7 -->\n\n  <!-- Tabela 2 Auto-Verificação EAN7 (6 Digitos)-->\n  <div *ngIf="this.ativarSeis">\n    <p style="text-align: center;"><b>Calculo CV</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">?</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">?</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{this.sp}}</p>\n    <p class="centro"><b>Resto: </b>{{this.sp % 10}}</p>\n    <p class="centro"><b>CV: </b>{{10 - (this.sp % 10)}}</p>\n\n    <hr>\n    <!-- Auto verificação -->\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{10 - (this.sp % 10)}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{10 - (this.sp % 10)}}</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{(this.sp) + (10-(this.sp % 10))}}</p>\n    <p class="centro"><b>Resto:</b>{{(this.sp + (10 - (this.sp % 10))) % 10}}</p>\n  </div>\n\n  <!-- Tabela 3 Auto-Verificação EAN7 (errado)-->\n  <div *ngIf="this.ativarSeteErr">\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{this.spP}}</p>\n    <p class="centro"><b>Resto: </b>{{this.spP % 10}}</p>\n    <hr>\n\n    <!-- Calculo CV -->\n    <p style="text-align: center;"><b>Calculo CV</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">?</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">?</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{this.sp}}</p>\n    <p class="centro"><b>Resto: </b>{{this.sp % 10}}</p>\n    <p class="centro"><b>CV: </b>{{10 - (this.sp % 10)}}</p>\n\n    <hr>\n    <!-- Auto verificação -->\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{10 - (this.sp % 10)}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{10 - (this.sp % 10)}}</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{(this.sp) + (10-(this.sp % 10))}}</p>\n    <p class="centro"><b>Resto:</b>{{(this.sp + (10 - (this.sp % 10))) % 10}}</p>\n  </div>\n  <!-- Fim Tabela 3 EAN7 (errado) -->\n\n  <!-- Tabela 4 EAN13 -->\n  <div *ngIf="this.ativarTreze">\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{this.split[11]}}</div>\n      <div class = "col">{{this.split[12]}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">13</div>\n      <div class = "col">12</div>\n      <div class = "col">11</div>\n      <div class = "col">10</div>\n      <div class = "col">9</div>\n      <div class = "col">8</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{3 * this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{3 * this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{3 * this.split[11]}}</div>\n      <div class = "col">{{this.split[12]}}</div>\n\n    </div>\n    <p class="centro"><b>SP: </b>{{this.sp}}</p>\n    <p class="centro"><b>Resto: </b>{{this.sp % 10}}</p>\n  </div>\n  <!-- Fim Tabela 4 EAN13 -->\n  <!-- Tabela 5 UPC12 -->\n  <div *ngIf="this.ativarDoze">\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{this.split[11]}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">12</div>\n      <div class = "col">11</div>\n      <div class = "col">10</div>\n      <div class = "col">9</div>\n      <div class = "col">8</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{3 * this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{3 * this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{3 * this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{3 * this.split[6]}}</div>\n      <div class = "col">{{this.split[7]}}</div>\n      <div class = "col">{{3 * this.split[8]}}</div>\n      <div class = "col">{{this.split[9]}}</div>\n      <div class = "col">{{3 * this.split[10]}}</div>\n      <div class = "col">{{this.split[11]}}</div>\n\n    </div>\n    <p class="centro"><b>SP: </b>{{this.sp}}</p>\n    <p class="centro"><b>Resto: </b>{{this.sp % 10}}</p>\n  </div>\n  <!-- Fim tabela UPC12 -->\n  <!-- Tabela 5 EAN13(Errado) -->\n  <!-- Auto-Verificação-->\n  <div *ngIf="this.ativarTrezeErr">\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{this.split[11]}}</div>\n      <div class = "col">{{this.split[12]}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">13</div>\n      <div class = "col">12</div>\n      <div class = "col">11</div>\n      <div class = "col">10</div>\n      <div class = "col">9</div>\n      <div class = "col">8</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{3 * this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{3 * this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{3 * this.split[11]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{this.spP}}</p>\n    <p class="centro"><b>Resto: </b>{{this.spP % 10}}</p>\n    <hr>\n\n    <!-- Calculo CV -->\n    <p style="text-align: center;"><b>Calculo CV</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{this.split[11]}}</div>\n      <div class = "col">?</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">13</div>\n      <div class = "col">12</div>\n      <div class = "col">11</div>\n      <div class = "col">10</div>\n      <div class = "col">9</div>\n      <div class = "col">8</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{3 * this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{3 * this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{3 * this.split[11]}}</div>\n      <div class = "col">?</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{this.sp}}</p>\n    <p class="centro"><b>Resto: </b>{{this.sp % 10}}</p>\n    <p class="centro"><b>CV: </b>{{10 - (this.sp % 10)}}</p>\n\n    <hr>\n    <!-- Auto verificação -->\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{this.split[11]}}</div>\n      <div class = "col">{{10 - (this.sp % 10)}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">13</div>\n      <div class = "col">12</div>\n      <div class = "col">11</div>\n      <div class = "col">10</div>\n      <div class = "col">9</div>\n      <div class = "col">8</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{3 * this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{3 * this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{3 * this.split[11]}}</div>\n      <div class = "col">{{10 - (this.sp % 10)}}</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{(this.sp) + (10-(this.sp % 10))}}</p>\n    <p class="centro"><b>Resto:</b>{{(this.sp + (10 - (this.sp % 10))) % 10}}</p>\n  </div>\n  <!-- Fim Tabela 5 EAN13 (errado) -->\n  <!-- Tabela 6 EAN13/UPC12 (Errado) -->\n  <!-- Auto-Verificação-->\n  <div *ngIf="this.ativarDozeErr">\n    <!-- Calculo CV -->\n    <p style="text-align: center;"><b>Calculo CV</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{this.split[11]}}</div>\n      <div class = "col">?</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">13</div>\n      <div class = "col">12</div>\n      <div class = "col">11</div>\n      <div class = "col">10</div>\n      <div class = "col">9</div>\n      <div class = "col">8</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{3 * this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{3 * this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{3 * this.split[11]}}</div>\n      <div class = "col">?</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{this.sp}}</p>\n    <p class="centro"><b>Resto: </b>{{this.sp % 10}}</p>\n    <p class="centro"><b>CV: </b>{{10 - (this.sp % 10)}}</p>\n\n    <hr>\n    <!-- Auto verificação -->\n    <p style="text-align: center;"><b>Calculo Auto-Verificação</b></p>\n    <div class = "row">\n      <div class = "col">Código</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{this.split[11]}}</div>\n      <div class = "col">{{10 - (this.sp % 10)}}</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Posição</div>\n      <div class = "col">13</div>\n      <div class = "col">12</div>\n      <div class = "col">11</div>\n      <div class = "col">10</div>\n      <div class = "col">9</div>\n      <div class = "col">8</div>\n      <div class = "col">7</div>\n      <div class = "col">6</div>\n      <div class = "col">5</div>\n      <div class = "col">4</div>\n      <div class = "col">3</div>\n      <div class = "col">2</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">Ponderação</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n      <div class = "col">3</div>\n      <div class = "col">1</div>\n    </div>\n    <div class = "row">\n      <div class = "col">SP:</div>\n      <div class = "col">{{this.split[0]}}</div>\n      <div class = "col">{{3 * this.split[1]}}</div>\n      <div class = "col">{{this.split[2]}}</div>\n      <div class = "col">{{3 * this.split[3]}}</div>\n      <div class = "col">{{this.split[4]}}</div>\n      <div class = "col">{{3 * this.split[5]}}</div>\n      <div class = "col">{{this.split[6]}}</div>\n      <div class = "col">{{3 * this.split[7]}}</div>\n      <div class = "col">{{this.split[8]}}</div>\n      <div class = "col">{{3 * this.split[9]}}</div>\n      <div class = "col">{{this.split[10]}}</div>\n      <div class = "col">{{3 * this.split[11]}}</div>\n      <div class = "col">{{10 - (this.sp % 10)}}</div>\n    </div>\n    <p class="centro"><b>SP: </b>{{(this.sp) + (10-(this.sp % 10))}}</p>\n    <p class="centro"><b>Resto:</b>{{(this.sp + (10 - (this.sp % 10))) % 10}}</p>\n  </div>\n  <!-- Fim Tabela 6 EAN13/UPC12 (errado) -->\n</ion-content>\n'/*ion-inline-end:"/home/ruben/barcodeValidator/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ruben/barcodeValidator/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ruben/barcodeValidator/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map