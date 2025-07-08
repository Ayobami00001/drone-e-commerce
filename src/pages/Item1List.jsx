import React, { useState } from 'react';

const allItems = {
  Dji: [
    {
      id: 1,
      name: 'DJI Avata 2 ',
      price: '$999',
      product:"Fly More Combo (Single Battery)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750945254/acb84ed59ada1099eb4cd1f374e9951b_xlarge_c8zaao.png',
    },
    {
      id: 2,
      name: 'DJI inspire 3',
      price: '~$16,499',
       product:"Panasonic, DMC-GH4",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750946363/1b2b5172cd089c0623ddb29fb2ac8f3f_small_tib36a.png',
    },
    {
      id: 3,
      name: 'DJI Mini 4 Pro',
      price: ' $1099',
       product:"Fly More Combo (DJI RC 2)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750891136/385105fc38cce5978d9609626fdaf816_xlarge_pxtzjo.png',
    },
    {
      id: 4,
      name: 'DJI Mavic 3 Pro',
      price: ' $2199',
       product:"15km HD Video Transmission",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750892029/9b1bb4e6929cb9c5d0ea22bf33eedffd_small_rfpcay.png',
    },
    {
      id: 5,
      name: 'Dji Air 3S (DJI RC-N3)',
      price: ' $1099',
       product:"20km Video Transmission",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750892369/0658c4092379bcb19997a3d759ee385a_small_xdbamd.png',
    },
    {
      id: 6,
      name: 'DJI Mini 4 Pro',
      price: ' $1099',
       product:"Fly More Combo (DJI RC 2)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/e_background_removal/f_png/v1750943900/photo-1631052941807-33b175775535_ndrrun.avif',
    },
    {
      id: 7,
      name: 'DJI Mini 2 SE',
      price: ' $225',
       product:" (Refurbished Unit)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750944584/ea8b25f5867ae37fdca37e4c7ed37a0e_xlarge_gveutk.png',
    },
    {
      id: 8,
      name: 'DJI Mini 3 Pro',
      price: ' $585',
       product:" (DJI RC)(Refurbished Unit)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750944799/8d231205e2f543b5819762812d5f1184_xlarge_nfqcod.png',
    },
    {
      id: 9,
      name: 'DJI Mini 3 Pro',
      price: ' $479',
       product:"(DJI RC-N1)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750944788/be7eef812295ba01d59f7cc83292c55c_xlarge_dpkhwu.png',
    },
    {
      id: 10,
      name: 'DJI Avata 2 ',
      price: ' $1199',
       product:"Fly More Combo (Three Batteries)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750945233/7b0aaa43cc6ad0897614e18434d8e10d_xlarge_pdwpdy.png',
    },
    {
      id: 11,
      name: 'DJI Avata 2',
      price: ' $390',
       product:"(Drone Only) (Refurbished Unit)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1750945245/95388d3fe90d89ae3afc199498437f80_xlarge_tngvcb.png',
    },
    {
      id: 12,
      name: 'DJI Mini 3',
      price: ' $419',
       product:"(DJI RC-N1)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751104623/920f3e349b9544a7620eab7bc34ecb2e_small_aohplq.jpg',
    },
    {
      id: 13,
      name: 'DJI Matrice 30T',
      price: ' $1249',
       product:"Enterprise Plus (M30T)",
      image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751108266/6f33e37529f17b3dae1052a36ffd317f_xlarge_xllgw6.png',
    },
   {
  id: 14,
  name: 'DJI Phantom 4 Pro V2.0',
  price: '$1599',
  product: "1-inch 20MP Sensor, Mechanical Shutter",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113449/e22f7a8005eedf674c6f997b9a1fa471_ultra_pifl7s.webp',
},
{
  id: 15,
  name: 'DJI Air 2S',
  price: '$999',
  product: "1-inch CMOS Sensor, Mastershots",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/e_background_removal/f_png/v1751113560/4rXvT8bgAvZUze5K7PP2iW_ua6vm2.webp',
},
{
  id: 16,
  name: 'DJI Mavic Air 2',
  price: '$799',
  product: "48MP Photo, 4K/60fps Video",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113592/7727599c23f26f2fa55ab60494cd3569_small_tfz0tn.png',
},
{
  id: 17,
  name: 'DJI FPV Combo',
  price: '$1299',
  product: "4K/60fps Super-Wide FOV, FPV Goggles",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113631/d44a5b61faf8a8157a3e5ac2bd677006_small_rlb76y.png',
},
{
  id: 18,
  name: 'DJI Mini 2',
  price: '$449',
  product: "Ultra-Light, 4K Camera",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113785/d54dd75147fee25c86b9b3639e3c316d_xlarge_joirzu.png',
},
{
  id: 19,
  name: 'DJI Mavic 2 Pro',
  price: '$1499',
  product: "Hasselblad Camera, 1-inch Sensor",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113805/7727599c23f26f2fa55ab60494cd3569_xlarge_ayngy9.png',
},
{
  id: 20,
  name: 'DJI Mavic 2 Zoom',
  price: '$1299',
  product: "24-48mm Optical Zoom",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113967/a7c0fc20d4cf14ecff7053b51bd9aea6_xlarge_cclnto.png',
},
{
  id: 21,
  name: 'DJI Matrice 300 RTK',
  price: '$13500',
  product: "55-min Flight, Advanced AI Capabilities",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113996/190b0cc2df7db4d10cb7928e8206ff99_xlarge_tpmrgp.png',
},
{
  id: 22,
  name: 'DJI Agras T30',
  price: '$15999',
  product: "Agricultural Drone, 30L Tank",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751114277/AgrasT30_jaw4kl.webp',
},
{
  id: 23,
  name: 'DJI Inspire 2',
  price: '$3299',
  product: "5.2K Video, Dual Battery",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751114327/170ea226d3b390170fa0114766b4af25_374_374_m0mpvw.webp',
},
{
  id: 24,
  name: 'DJI Phantom 4 RTK',
  price: '$6500',
  product: "RTK Module, Surveying Drone",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751114353/50589f7c59c21fe4ee9e1dd7a4ffdbbc_374_374_apuehz.webp',
},
{
  id: 25,
  name: 'DJI Mavic 3 Classic',
  price: '$1599',
  product: "4/3 CMOS Hasselblad Camera",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751114391/71e0d1acdf0f4ab35bf7de4eed250633_374_374_lk7by6.webp',
},
{
  id: 26,
  name: 'DJI Mini SE',
  price: '$299',
  product: "3-Axis Gimbal, 2.7K Camera",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/e_background_removal/f_png/v1751114423/DJI-Mini-SE-Camera-Drone-with-Remote-Controller-3-axis-Gimbal-2-7K-HD-Videos-12MP-photos-30-min-Flight-Time-Foldable-249-Gram-Mini-Drone-Gray_b2b085da-ca37-4047-bb68-cfd97de6acc6.9bf38e82a9332e4118ee6aaced2ce80a_bfbxy4.webp',
},
{
  id: 27,
  name: 'DJI Mavic Pro Platinum',
  price: '$1099',
  product: "Quieter Flight, 30-min Battery",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751114468/3157ec5f66e8968222412f5cf8a4410a_374_374_b6bctb.webp',
},
{
  id: 28,
  name: 'DJI Matrice 600 Pro',
  price: '$4999',
  product: "Heavy Lift, 6-Rotor Platform",
  image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/e_background_removal/f_png/v1751114514/DJI-Matrice-600-M600-Frame-Hexaopter-Multicopter-3-425x425_trbm2y.webp',
},
  ],




  Skydio: [
  {
    id: 1,
    name: 'Skydio 2+',
    price: '$1,099',
    product: "Autonomous 4K60 Drone, 27 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751300001/skydio2plus.jpg',
  },
  {
    id: 2,
    name: 'Skydio X2',
    price: '$10,999',
    product: "Enterprise Thermal Drone, 35 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751300101/skydiox2.jpg',
  },
  {
    id: 3,
    name: 'Skydio X2 Color',
    price: '$10,499',
    product: "Enterprise Drone, Visual Camera, 35 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751300901/skydiox2color.jpg',
  },
  {
    id: 4,
    name: 'Skydio X10',
    price: '$15,000',
    product: "AI Inspection, 64MP Camera, 40 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751300401/skydiox10.jpg',
  },
  {
    id: 5,
    name: 'Skydio X2E',
    price: '$12,999',
    product: "Enterprise Edition, Dual Sensor, 35 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751301201/skydiox2e.jpg',
  },
  {
    id: 6,
    name: 'Skydio X2D',
    price: '$13,499',
    product: "Defense Model, Night Vision, Secure Data",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751301401/skydiox2d.jpg',
  },
  {
    id: 7,
    name: 'Skydio R1',
    price: '$2,499',
    product: "Autonomous 4K Drone, 16 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751302701/skydior1.jpg',
  },
  {
    id: 8,
    name: 'Skydio 2',
    price: '$999',
    product: "4K60 Drone, 23 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751302801/skydio2.jpg',
  },
  {
    id: 9,
    name: 'Skydio S2+',
    price: '$1,299',
    product: "Enhanced Range, 4K60, 27 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751302901/skydios2plus.jpg',
  },
  {
    id: 10,
    name: 'Skydio X2D Night',
    price: '$14,499',
    product: "Defense Drone, Night Vision, Secure Data",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751303001/skydiox2dnight.jpg',
  },
  {
    id: 11,
    name: 'Skydio X2E Thermal',
    price: '$13,999',
    product: "Enterprise Thermal Drone, 35 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751303101/skydiox2ethermal.jpg',
  },
  {
    id: 12,
    name: 'Skydio X10 Enterprise',
    price: '$16,000',
    product: "Enterprise AI Drone, 64MP, 40 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751303201/skydiox10enterprise.jpg',
  },
  {
    id: 13,
    name: 'Skydio X2E Color',
    price: '$12,499',
    product: "Enterprise Drone, Visual Camera, 35 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751303301/skydiox2ecolor.jpg',
  },
  {
    id: 14,
    name: 'Skydio X2E Night',
    price: '$13,999',
    product: "Enterprise Drone, Night Vision, 35 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751303401/skydiox2enight.jpg',
  },
  {
    id: 15,
    name: 'Skydio X10 Thermal',
    price: '$17,000',
    product: "AI Inspection, Thermal Camera, 40 min Flight",
    image: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751303501/skydiox10thermal.jpg',
  },
],



  Pro: [
    {
      id: 7,
      name: 'Lego Shuttle',
      price: '$80',
        product:"Panasonic, DMC-GH4",
      image: 'https://images.unsplash.com/photo-1611078489935-763d9cf9d0c6?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 8,
      name: 'Toy Robot',
      price: '$40',
        product:"Panasonic, DMC-GH4",
      image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828e6c?auto=format&fit=crop&w=400&q=80',
    },
  ],
};

const Item1List = () => {
  const [category, setCategory] = useState('Dji');
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const itemsPerPage = 12;

  const items = allItems[category];
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const switchCategory = (cat) => {
    setCategory(cat);
    setCurrentPage(1);
  };

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <>
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🛍️ My Store</h2>
          <button type="button" class="btn btn-primary position-relative">
    cart
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {cart.length}
      <span class="visually-hidden">unread messages</span>
    </span>
  </button>
      </div>
     
      

      {/* Category Switch */}
      <div className="mb-4 text-center">
        <button className="btn btn-outline-primary me-2" onClick={() => switchCategory('Dji')}>Dji Product</button>
        <button className="btn btn-outline-secondary me-2" onClick={() => switchCategory('Skydio')}>Skydio product</button>
        <button className="btn btn-outline-success" onClick={() => switchCategory('Pro')}>Pro Pick</button>
      </div>

      {/* Items Grid */}
      <div className="row">
        {paginatedItems.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body  bg-transparent">
                <h5 className="card-title mt-2 ">{item.name}</h5>
                <p>{item.product}</p>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-sm btn-primary" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(p => p - 1)}>Previous</button>
          </li>
          {[...Array(totalPages)].map((_, idx) => (
            <li key={idx} className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(idx + 1)}>{idx + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(p => p + 1)}>Next</button>
          </li>
        </ul>
      </nav>

        {/* Cart Summary */}
      {/* <div className="mt-4">
        <h4>🛒 Cart Summary</h4>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        )}  
      </div> */}
    </div>
    </>
  );
};

export default Item1List;
