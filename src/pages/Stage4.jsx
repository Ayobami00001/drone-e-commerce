import React, { useState } from 'react'
import Radio2 from '../components/Radio2'

const reviews = [
  {
    title: "",
    text: "The camera clarity blew my mind. It's like flying a full movie studio-crisp, smooth, and absolutely stunning from every possible angle.",
    name: "Alex R",
    role: "Filmmaker"
  },
  {
    title: "",
    text: "Used this drone for land surveys. It's accurate, quick to deploy, easy to control, and delivers high-resolution data I can actually rely on.",
    name: "Diego M.",
    role: "Construction Manager"
  },
  {
    title: "",
    text: "From unboxing to first flight, everything felt premium. Controls were intuitive, camera was sharp, and battery life easily lasted longer than I expected.",
    name: "Marcus B.",
    role: "Tech Enthusiast"
  }
];

const Stage4 = () => {
  const [ratings, setRatings] = useState(Array(reviews.length).fill(5));

  const handleRating = (idx, value) => {
    const newRatings = [...ratings];
    newRatings[idx] = value;
    setRatings(newRatings);
  };

  return (
    <>
      <div className="container text-center my-5">
        <h2>What Our Pilot Are Saying</h2>
      </div>

      <div className="container d-flex justify-content-around flex-wrap">
        {reviews.map((review, idx) => (
          <div className={`card ${idx === 0 ? 'border-dark' : 'border-dark' } mb-3`} style={{ maxWidth: "22rem" }} key={idx}>
            <div className={`card-body ${idx === 0 ? 'text-dark' : 'text-dark'}`}>
              {review.title && <h5 className="card-title">{review.title}</h5>}
              <p className="card-text">{review.text}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
                <div>
                  <Radio2
                    name={`rate-${idx}`}
                    value={ratings[idx]}
                    onChange={value => handleRating(idx, value)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Stage4