import React from 'react'
import './Body1.css'
import { useState } from 'react'
import Stage2 from './Stage2';
import Stage4 from './Stage4';
import Stage5 from './Stage5';

const itemList = [
{
  title: 'Aerial Photography',
  butt: '39 items',
  desc: 'Capture stunning landscapes, cinematic sequences, and high-res stills with drones built for filmmaking and content creators.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751114514/DJI-Matrice-600-M600-Frame-Hexaopter-Multicopter-3-425x425_trbm2y.webp',
},
{
  title: 'Mapping ',
  butt: '20 items' ,
  desc: 'Use GPS-enabled drones with precise imaging for land surveys, agricultural , and construction planning.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113449/e22f7a8005eedf674c6f997b9a1fa471_ultra_pifl7s.webp',
},
{
  title: 'Racing & FPV',
  butt: '16 items' ,
  desc: 'Experience the thrill of drone racing with high-speed FPV (First Person View) drones designed for agility and speed.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113449/e22f7a8005eedf674c6f997b9a1fa471_ultra_pifl7s.webp',
},
{
  title: 'Commercial ',
  butt: '28 items' ,
  desc: 'Perform detailed inspections of infrastructure, power lines, and job sites with drones equipped with thermal imaging and high-res cameras.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751114423/DJI-Mini-SE-Camera-Drone-with-Remote-Controller-3-axis-Gimbal-2-7K-HD-Videos-12MP-photos-30-min-Flight-Time-Foldable-249-Gram-Mini-Drone-Gray_b2b085da-ca37-4047-bb68-cfd97de6acc6.9bf38e82a9332e4118ee6aaced2ce80a_bfbxy4.webp',
},
{
  title: 'Agriculture ',
  butt: '24 items' ,
  desc: 'Utilize drones for precision agriculture, crop health monitoring, <br/> and efficient fertilizer spraying techniques to enhance yields.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113631/d44a5b61faf8a8157a3e5ac2bd677006_small_rlb76y.png',
},
{
  title: 'Agriculture ',
  butt: '24 items' ,
  desc: 'Utilize drones for precision agriculture, crop health monitoring, <br/> and efficient fertilizer spraying techniques to enhance yields.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113631/d44a5b61faf8a8157a3e5ac2bd677006_small_rlb76y.png',
},
{
  title: 'Agriculture ',
  butt: '24 items' ,
  desc: 'Utilize drones for precision agriculture, crop health monitoring, <br/> and efficient fertilizer spraying techniques to enhance yields.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113631/d44a5b61faf8a8157a3e5ac2bd677006_small_rlb76y.png',
},
{
  title: 'Agriculture ',
  butt: '24 items' ,
  desc: 'Utilize drones for precision agriculture, crop health monitoring, <br/> and efficient fertilizer spraying techniques to enhance yields.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113631/d44a5b61faf8a8157a3e5ac2bd677006_small_rlb76y.png',
},
{
  title: 'Agriculture ',
  butt: '24 items' ,
  desc: 'Utilize drones for precision agriculture, crop health monitoring, <br/> and efficient fertilizer spraying techniques to enhance yields.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113631/d44a5b61faf8a8157a3e5ac2bd677006_small_rlb76y.png',
},
{
  title: 'Agriculture ',
  butt: '24 items' ,
  desc: 'Utilize drones for precision agriculture, crop health monitoring, <br/> and efficient fertilizer spraying techniques to enhance yields.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113631/d44a5b61faf8a8157a3e5ac2bd677006_small_rlb76y.png',
},
{
  title: 'Agriculture ',
  butt: '24 items' ,
  desc: 'Utilize drones for precision agriculture, crop health monitoring, <br/> and efficient fertilizer spraying techniques to enhance yields.',
  img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751113631/d44a5b61faf8a8157a3e5ac2bd677006_small_rlb76y.png',
},
];

const useCases = [
  {
    title: 'Aerial Photography',
    desc: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1752246339/Screenshot_2025-07-11_160458_frrzuz.png',
    img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1752246028/Screenshot_2025-07-11_155914_c7toto.png',
  },
  {
    title: 'See it in Action',
    desc: 'Experience the thrill of drone racing with high-speed FPV (First Person View) drones designed for agility and speed.',
    img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1752246344/Screenshot_2025-07-11_160223_zv1cp9.png',
  },
];


const Body1 = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <>
      
      <div className=" mt-5"> 
        <hr className='pt-5' />
        <h1 className=' ps-4 fs-1 '>Elevate Your Vision <br /> with Precision <span className='text-warning'>Drones</span></h1> 
      </div> 
      <div className='text-center mt-3'>
        <hr />
        <img className='w-50' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Y1enA4dHV6enAzNDA2bnJqMjBzd2VucWZwY3ByY3Q5cmVwOXQxNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2t2ut6cz3eahssOeki/giphy.gif"  alt="" />
      </div>
      <hr/>
      <table className='table table-bordered responsive-table ' >
        <tbody>
          <tr>
            <td className='text-center p-5 '>
              <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1752242863/51RgS8r92ML_ihdkk2.webp" width={150} alt="" />
            </td>
            <td className='p-4'>
              <p >Capture breathtaking footage, navigate with <br /> ultra-stability, and fly smarter - meet the <br /> future of flight.</p>
              <button className='btn btn-outline-warning'>Watch Demo</button>
            </td>
          </tr>
        </tbody>
      </table>


      <section>
        <div className="scroll-container">
    {itemList.map((item, idx) => (
      <div key={idx} className="card my-card" style={{ width: "18rem", display: "inline-block", marginRight: "1rem", height: hoveredIdx === idx  }} onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)}>
        <img src={item.img} alt={item.title} className="card-img-top" />
          <div className='d-flex flex-row justify-content-between mt-3'>
            <h5 className="card-title">{item.title}</h5>
            {hoveredIdx === idx ? (
                  <button className="card-btn-hover btn btn-outline-warning" >See Details</button>
                ) : (
                  <button className="card-btn">{item.butt}</button>
                )}
          </div>
        <div className="card-body ">
          <p className="card-more">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
      </section>
    
      <section>
        <Stage2/>
      </section>

      <section>
         <div className="useCase-row right-img">
        <div className="useCase-img">
          <img src={useCases[0].img} alt={useCases[0].title} />
        </div>
        <div className="useCase-text">
          <h4>{useCases[0].title}</h4>
          <img src={useCases[0].desc} alt="" />
          <button className='btn btn-outline-warning'>View Drones</button>
        </div>
      </div>
      <div className="useCase-row left-img">
        <div className="useCase-img">
          <img src={useCases[1].img} alt={useCases[1].title} />
        </div>
        <div className="useCase-text">
          <h4>{useCases[1].title}</h4>
          <p>{useCases[1].desc}</p>
          <button className='btn btn-outline-warning'>Watch video</button>
        </div>
      </div>
      </section>
      
      <section>
        <Stage4/>
      </section>
      <section>
        <Stage5/>
      </section>
      <hr />
      <div className='d-flex justify-content-between align-items-center flex-row ps-5 pe-5 mt-1'>
        <p>Shop</p>
        <img width={40} style={{marginTop:"-9px"}} src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1752330176/times-svgrepo-com_h8sztb.svg" alt="" />
        <p>About Us</p>
        <img width={40} style={{marginTop:"-9px"}} src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1752330176/times-svgrepo-com_h8sztb.svg" alt="" />
        <p>Support</p>
        <img width={40} style={{marginTop:"-9px"}} src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1752330176/times-svgrepo-com_h8sztb.svg" alt="" />
        <p>Blog</p>
        <img width={40} style={{marginTop:"-9px"}} src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1752330176/times-svgrepo-com_h8sztb.svg" alt="" />
        <p>Returns & Warranty </p>
        <img width={40} style={{marginTop:"-9px"}} src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1752330176/times-svgrepo-com_h8sztb.svg" alt="" />
        <p>Contact</p>
      </div>

    </>
  )
}



export default Body1