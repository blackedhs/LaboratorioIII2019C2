"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bienesRaices = /** @class */ (function () {
    function bienesRaices(id, titulo, transaccion, descripcion, precio, baños, cocheras, habitaciones) {
        this.id = id;
        this.titulo = titulo;
        if (transaccion == 'Venta' || transaccion == 'venta' || transaccion == '0')
            this.transaccion = ITransaccion['Venta'];
        else
            this.transaccion = ITransaccion['Alquiler'];
        this.descripcion = descripcion;
        this.precio = precio;
        this.baños = baños;
        this.cocheras = cocheras;
        this.habitaciones = habitaciones;
    }
    Object.defineProperty(bienesRaices.prototype, "Id", {
        get: function () { return this.id; },
        set: function (e) { this.id = e; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienesRaices.prototype, "Titulo", {
        get: function () { return this.titulo; },
        set: function (e) { this.Titulo = e; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienesRaices.prototype, "Transaccion", {
        get: function () {
            if (this.transaccion == ITransaccion['Venta'] || this.transaccion == 0)
                return 'Venta';
            else
                return 'Alquiler';
        },
        set: function (e) {
            if (e == 'Venta' || e == 'venta')
                this.transaccion = ITransaccion['Venta'];
            else
                this.transaccion = ITransaccion['Alquiler'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienesRaices.prototype, "Precio", {
        get: function () { return this.precio; },
        set: function (e) { this.precio = e; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienesRaices.prototype, "Descripcion", {
        get: function () { return this.descripcion; },
        set: function (e) { this.descripcion = e; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienesRaices.prototype, "Ba\u00F1os", {
        get: function () { return this.baños; },
        set: function (e) { this.baños = e; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienesRaices.prototype, "Autos", {
        get: function () { return this.cocheras; },
        set: function (e) { this.cocheras = e; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bienesRaices.prototype, "Dormis", {
        get: function () { return this.habitaciones; },
        set: function (e) { this.habitaciones = e; },
        enumerable: true,
        configurable: true
    });
    return bienesRaices;
}());
var ITransaccion;
(function (ITransaccion) {
    ITransaccion[ITransaccion["Venta"] = 0] = "Venta";
    ITransaccion[ITransaccion["Alquiler"] = 1] = "Alquiler";
})(ITransaccion || (ITransaccion = {}));
/// <reference path="bienesRaices.ts" />
var Anuncio = /** @class */ (function (_super) {
    __extends(Anuncio, _super);
    function Anuncio(id, titulo, transaccion, descripcion, precio, baños, cocheras, habitaciones) {
        return _super.call(this, id, titulo, transaccion, descripcion, precio, baños, cocheras, habitaciones) || this;
    }
    return Anuncio;
}(bienesRaices));
