import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }
  /********************************************************************************************************************************
   * Function formats address object to string for eg
   * const address =  "address" : {
   *     "address_line_one" : "S-305, South Building Twinstar",
   *     "address_line_two" : "Opp. Balaji Hall",
   *     "city" : "Rajkot",
   *     "state" : "Gujarat",
   *     "pin_code" : "360005",
   *     "country" : "India"
   * }
   * formated = S-305, South Building Twinstar, Opp. Balaji Hall, Gujarat, Rajkot, 360005 - India 
   * 
   * @param address 
   * @returns string
   *********************************************************************************************************************************/
  getInputAddress(address) {
    if (!address) return null;
    return `${address.address_line_one}, ${address.address_line_two ? (address.address_line_two + ', ') : ''}${address.state}, ${address.city}, ${address.pin_code} - ${address.country}`
  }
}
