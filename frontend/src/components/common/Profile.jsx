import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const ConsultantProfile = () => {

  const usertype = "user";

  const consultant = {
    name: 'Sarah Johnson',
    title: 'Business Strategy Consultant',
    tags: ['Strategy', 'Leadership', 'Growth'],
    bio: `I'm a seasoned business strategist with over 12 years of experience helping companies from startups to Fortune 500 organizations. My expertise lies in developing data-driven strategies that drive sustainable growth and competitive advantage. Passionate about empowering leaders and fostering innovative thinking.`,
    availability: [
      'Today: 2:00 PM - 5:00 PM',
      'Tomorrow: 10:00 AM - 1:00 PM',
      'Fri: 4:00 PM - 7:00 PM'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', // Replace with your actual image path
    reviews: [
      {
        text: `"Sarah's strategic advice helped us pivot during a challenging time. Highly recommended!"`,
        rating: 5,
        author: 'John D., CEO of StartupX'
      },
      {
        text: `"Very insightful and professional. She helped us clarify our growth roadmap."`,
        rating: 4,
        author: 'Maria K., Head of Operations'
      }
    ]
  }

  return (
    <div className=' p-6'>
      <div className="mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
        <h1 className="text-2xl font-semibold mb-4">Consultant Profile</h1>
        <hr className=' border border-primary mb-6' />
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={consultant.image}
              alt="Consultant"
              className="w-32 h-32 rounded-full border-4 border-primary object-cover p-1"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-xl font-bold">{consultant.name}</h2>
            <p className="text-gray-600">{consultant.title}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {consultant.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-1">About Me</h3>
              <hr className=' border border-primary mb-2' />
              <p className="text-gray-500 text-sm">{consultant.bio}</p>
            </div>

            {/* Availability */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Availability</h3>
              <div className="flex flex-wrap gap-2">

                {consultant.availability.map(slot => (
                  <span
                    key={slot}
                    className="bg-primaryLight text-primary px-4 py-1 rounded-full text-sm"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Client Reviews</h3>
          <div className="space-y-4">
            {consultant.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <p className="italic text-sm text-gray-600 mb-2">{review.text}</p>
                <div className="flex items-center gap-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-1">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
        {
          usertype === "user" && 
          <Link to={`/user-dashboard/query${''}`}>
            <button className=" w-full px-4 py-2 bg-primary text-white  rounded hover:bg-blue-700 my-4">
              Book Session
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default ConsultantProfile
