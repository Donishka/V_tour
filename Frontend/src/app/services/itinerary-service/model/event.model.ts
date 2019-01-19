export class Event {
  _id:string;
    id: number;
      price: number;
      name: string;
      venue: string;
      date_from: string;
      date_to: string;
      description: string;
      sp_id: string;
      pkg_id: string;
      cost: number;
      payment_status:string;
      booking_status:string;
      check_in_time?: string; // for loading purpose
      duration?: string; // for hotel
      travel_category?: string; // for travel purpose
      depature_time?: string; // When travel by train
      event_type?: string;
}
