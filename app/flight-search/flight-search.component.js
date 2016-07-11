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
var flight_service_1 = require('../services/flight.service');
var router_1 = require('@angular/router');
var flight_card_component_1 = require('../flight-card/flight-card.component');
var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
        this.from = "Hamburg";
        this.to = "Graz";
        this.flights = [];
    }
    FlightSearchComponent.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var oldFlights = this.flights;
        var oldFlight = oldFlights[0]; // Flight to change!
        var oldFlightDate = new Date(oldFlight.date); // Date to change 
        var newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);
        var newFlight = {
            id: oldFlight.id,
            from: oldFlight.from,
            to: oldFlight.to,
            date: newFlightDate.toISOString()
        };
        var newFlights = [
            newFlight
        ].concat(oldFlights.slice(1, this.flights.length - 1));
        this.flights = newFlights;
    };
    FlightSearchComponent.prototype.search = function () {
        var _this = this;
        this
            .flightService
            .find(this.from, this.to)
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (errResp) {
            console.error(errResp);
        });
    };
    FlightSearchComponent = __decorate([
        core_1.Component({
            selector: 'flight-search',
            template: require('./flight-search.component.html'),
            providers: [flight_service_1.FlightService],
            directives: [router_1.ROUTER_DIRECTIVES, flight_card_component_1.FlightCardComponent],
            styles: [require('./flight-search.component.css')]
        }), 
        __metadata('design:paramtypes', [flight_service_1.FlightService])
    ], FlightSearchComponent);
    return FlightSearchComponent;
}());
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map