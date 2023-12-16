
export interface sportsproduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  productdescription: string;
}

export const sportsproducts = [
  {
    id: 1,
    name: 'PRO STAFF 97',
    price: 279,
    description: 'Classic Pro Staff model that generates crisp, precise shots.',
    imageUrl: 'assets/Pro-staff.png',
    productdescription:'If you\'re strong enough to handle this racket, the payoff in power is huge. The Wilson Pro Staff 97 V14 is a precision-oriented racket ideal for advanced players. Slightly lighter than the Pro Staff RF 97, it still has a high weight that\'s concentrated in the handle. Designed with Paradigm Bending technology to optimize the bending profile between the shaft and hoop, this racket offers precision and pinpoint control. We arranged the double braid at 45-degree angles, allowing the frame to breathe more upon impact. This increases dwell time while maintaining the stability responsible for the classic Pro Staff feel.'
  }, 
  {
    id: 2,
    name: 'ECHO PICKLEBALL PADDLE',
    price: 119,
    description: 'Approved by USA Pickleball for competition.',
    imageUrl: 'assets/paddle.png',
    productdescription: 'Broadly appealing for its extended handle that allows for an easier two-handed backhand grip, the Echo injects liveliness into your game with a responsive paddle surface and a striking design. Its polypropylene honeycomb core effectively dampens vibrations for more comfortable feel upon contact. Constructed with a fiberglass composite material that lends strong, lightweight properties for smooth swings and generous shot depth, this paddle features a classic shape for versatile performance in singles or doubles play. Paddle is made in the USA and approved by USA Pickleball for competition.'
  },
  {
    id: 3,
    name: 'STAFF MODEL DRIVING IRON',
    price: 249,
    description: 'Delivers an impressive combination of reliability, distance and forgiveness.',
    imageUrl: 'assets/golf.png',
    productdescription: 'Originally created as a prototype iron for professional golfers on the PGA Tour the utility irons deliver an impressive combination of reliability, distance and forgiveness.'
  }
];
  




