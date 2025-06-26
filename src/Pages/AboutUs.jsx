import React from 'react';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Passionate about connecting people and building communities.'
  },
  {
    name: 'Bob Smith',
    role: 'Lead Developer',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Loves coding and solving real-world problems with technology.'
  },
  {
    name: 'Carol Lee',
    role: 'Community Manager',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Ensures everyone feels welcome and supported.'
  }
];

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Roommate Finder is dedicated to helping you find the perfect roommate and a place to call home. Our mission is to make the process safe, easy, and enjoyable for everyone.
      </p>
      <h2 className="text-2xl font-semibold mb-6 text-center">Meet the Team</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white shadow-lg rounded-lg p-6 w-64 flex flex-col items-center">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm text-indigo-600 mb-2">{member.role}</p>
            <p className="text-gray-600 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
      <div className="bg-indigo-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-700">
          We believe everyone deserves a safe and friendly living environment. Our platform is built on trust, transparency, and community. Join us and find your next great roommate today!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;