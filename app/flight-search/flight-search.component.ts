import { Component, provide } from '@angular/core';
import { Flight} from '../entities/flight';
import { FlightService} from '../services/flight.service';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { FlightCardComponent} from '../flight-card/flight-card.component';

@Component({
    selector: 'flight-search', 
    template: require('./flight-search.component.html'),
    providers: [FlightService],
    directives: [ROUTER_DIRECTIVES, FlightCardComponent],
    styles: [require('./flight-search.component.css')]
})
export class FlightSearchComponent {

    public from: string = "Hamburg";
    public to: string = "Graz";
    public flights: Array<Flight> = [];

    constructor(private flightService: FlightService) {
    }

    delay() {
        const ONE_MINUTE = 1000 * 60;

        let oldFlights = this.flights;
        let oldFlight = oldFlights[0];  // Flight to change!
        let oldFlightDate = new Date(oldFlight.date); // Date to change 

        let newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);

        let newFlight =  {
                    id: oldFlight.id,
                    from: oldFlight.from,
                    to: oldFlight.to,
                    date: newFlightDate.toISOString()
        };
        
        let newFlights = [
                newFlight,
                ...oldFlights.slice(1, this.flights.length)
        ];

        this.flights = newFlights;
    }

    search() {
        this
            .flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Array<Flight>) => { 
                    this.flights = flights;        
                },
                (errResp) => {
                    console.error(errResp)
                }
            ); 
    }    


}
