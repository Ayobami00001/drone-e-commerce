import React from 'react'
import './Stage3.css'

const useCases = [
  {
    title: 'Aerial Photography',
    desc: 'Capture stunning landscapes, cinematic sequences, and high-res stills with drones built for filmmaking and content creators.',
    img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751289108/photo-1627584159474-a1bc658c9dbf_tbdygp.avif',
  },
  {
    title: 'Mapping & Surveying',
    desc: 'Use GPS-enabled drones with precise imaging for land surveys, agricultural , and construction planning.',
    img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751289289/premium_photo-1666284871247-dbda5a5067d0_s3s45s.avif',
  },
  {
    title: 'Racing & FPV',
    desc: 'Experience the thrill of drone racing with high-speed FPV (First Person View) drones designed for agility and speed.',
    img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751290317/photo-1546821122-f51081349746_ioupup.webp',
  },
  {
    title: 'Commercial /Inspections',
    desc: 'Perform detailed inspections of infrastructure, power lines, and job sites with drones equipped with thermal imaging and high-res cameras.',
    img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751289942/Drone-inspection-of-power-plant_ehfe9j.webp',
  },
  {
    title: 'Agriculture & Crop Monitoring',
    desc: 'Utilize drones for precision agriculture, crop health monitoring, and efficient fertilizer spraying techniques to enhance yields.',
    img: 'https://res.cloudinary.com/dyzdckuxi/image/upload/v1751290139/Fertilizer-Spraying-Techniques_a5-750x420_hyzzvr.webp',
  },
];

const Stage3 = () => {
  return (
    <>
      <div>
        <h3 className='text-center mt-5'>Shop by use case</h3>
        <p className='text-center' style={{ color: '#888' }}>
          find the right drone for your purpose—whether you’re shooting cinematic footage, <br />
          racing through the skies, or inspecting job sites with precision.
        </p>
      </div>

            <div className="useCase-row right-img">
        <div className="useCase-img">
          <img src={useCases[0].img} alt={useCases[0].title} />
        </div>
        <div className="useCase-text">
          <h4>{useCases[0].title}</h4>
          <p>{useCases[0].desc}</p>
          <button>View Drones</button>
        </div>
      </div>
      <div className="useCase-row left-img">
        <div className="useCase-img">
          <img src={useCases[1].img} alt={useCases[1].title} />
        </div>
        <div className="useCase-text">
          <h4>{useCases[1].title}</h4>
          <p>{useCases[1].desc}</p>
          <button>View Drones</button>
        </div>
      </div>
       <div className="useCase-row right-img">
        <div className="useCase-img">
          <img src={useCases[2].img} alt={useCases[2].title} />
        </div>
        <div className="useCase-text">
          <h4>{useCases[2].title}</h4>
          <p>{useCases[2].desc}</p>
          <button>View Drones</button>
        </div>
      </div>
      <div className="useCase-row left-img">
        <div className="useCase-img">
          <img src={useCases[3].img} alt={useCases[3].title} />
        </div>
        <div className="useCase-text">
          <h4>{useCases[3].title}</h4>
          <p>{useCases[3].desc}</p>
          <button>View Drones</button>
        </div>
      </div>
      <div className="useCase-row right-img">
        <div className="useCase-img">
          <img src={useCases[4].img} alt={useCases[4].title} />
        </div>
        <div className="useCase-text">
          <h4>{useCases[4].title}</h4>
          <p>{useCases[4].desc}</p>
          <button>View Drones</button>
        </div>
      </div>
      

    </>
  )
}

export default Stage3