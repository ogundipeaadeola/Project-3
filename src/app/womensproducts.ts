export interface womensproduct {
    id: number;
    name: string;
    price: number;
    description: string;
    productdescription: string;
    imageUrl: string;
  }
  
  export const womensproducts = [
    {
      id: 1,
      name: 'PRO SEAMLESS TANK',
      price: 58,
      description: 'Stylish, yet sweat-friendly. A tank that is constructed seamlessly for limited waste and ventilated comfort.',
      productdescription: 'The Pro Seamless Tank is a garment that requires very little production to still provide you with great coverage. Its comfort is rooted in the eco-friendly seamless construction that also engineers ventilation from front to back. Stylish, yet sweat-friendly.',
      imageUrl: 'assets/pro.png'
    }, 
    {
      id: 2,
      name: 'HEADLINER TENNIS DRESS',
      price: 118,
      description: 'A lined tennis dress for high-level play, made with eye-catching style.',
      productdescription: 'Keep your focus on the ball, your opponent and your next move. Not your dress. The Wilson Headliner Tennis Dress takes care of all the details to eliminate distractions while you play. Perforations let the air in. A super-thin racerback design lets shoulders move free. The liner keeps your spare balls and your cellphone close. As you fly across the court, the iridescent elastic and shiny skirt catch the light.',
      imageUrl: 'assets/headliner.png'
    },
    {
      id: 3,
      name: 'LAYUP BASKETBALL SHORT',
      price: 58,
      description: 'The only pair of basketball shorts you need. Soft and breathable, thoughtfully constructed for motion and totally essential.',
      productdescription: 'A staple on and off the court and a reminder why basketball is so influential on everyday style. The Layup Basketball Short is an easy go-to choice, with details so thoughtful you\'ll instantly feel the difference. It\'s just the right length — not too long or too short — so you can finally stop wearing men\'s shorts rolled up. A single layer of classic B-ball mesh feels soft and breathable, with vents at the hems so you can sink threes without restriction. That\'s not the end of this story. You also get hidden hand pockets for storing small items.',
      imageUrl: 'assets/basketballshorts.png'
    }
  ];
