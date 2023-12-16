export interface mensproduct {
    id: number;
    name: string;
    price: number;
    description: string;
    productdescription: string;
    imageUrl: string;
  }
  
  export const mensproducts = [
    {
      id: 1,
      name: 'ELEVATE PERFORMANCE HALF-ZIP',
      price: 88,
      description: 'For all the moments before, after and between workouts, this half-zip jacket keeps you cool, comfortable and provides coverage in the sunshine.',
      productdescription: 'Warm up. Wind down. Wear it all day. The Wilson Elevate Performance Half-Zip Jacket is all about versatility, with the performance features you need on the golf course and clean style you can take anywhere. Once you pull it on, you\'ll discover all the details working to keep you comfortable — from ventilation at the neck, hem and underarms, to the quick-dry fabric. There\'s even a small zip pocket where you can store a key or card.',
      imageUrl: 'assets/menszip.png'
    }, 
    {
      id: 2,
      name: 'EASY STREET TEE',
      price: 48,
      description: 'An everyday fundamental top with the touch of your favorite cotton tee and odor-fighting, stretch-friendly tech.',
      productdescription: 'The Easy Street Tee was designed to be an everyday fundamental tee. Its relaxed fit is cut from our tech cotton fabric, it feels just as comfortable as your well-loved tee, yet packs some sneaky technical details you need for all-day wear. It\'s equipped with anti-odor for a stink-free long haul, and stretchable, breathable fabric that can keep up if you heat up.',
      imageUrl: 'assets/tshirt.png'
    },
    {
      id: 3,
      name: 'WILSON AMERICA SWEATPANT',
      price: 118,
      description: 'A premium, handcrafted sweatpant with thoughtful details designed for warming up or down.',
      productdescription: 'If you crave the vintage appeal of standard-issue gym sweats, the Wilson America Sweatpant is for you. These pants come in dense, all-cotton French terry fabric that feels lived-in from the start. Wear them while lounging on the weekend or warming up at the gym.',
      imageUrl: 'assets/sweats.png'
    }
  ];

