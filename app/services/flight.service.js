"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var FlightService = (function () {
    function FlightService(http) {
        this.http = http;
    }
    // Array<Flight>, Flight[]
    FlightService.prototype.find = function (from, to) {
        var url = "http://www.angular.at/api/flight";
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        var search = new http_1.URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        return this.http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    FlightService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FlightService);
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map