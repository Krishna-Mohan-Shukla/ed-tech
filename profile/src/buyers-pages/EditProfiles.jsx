import React, { useState, useEffect } from 'react';

const EditProfiles = () => {
  const initialData = {
    firstName: 'Krishna',
    lastName: 'Shukla',
    headline: 'Frontend Developer at ABC Corp',
    biography: 'I am a passionate developer who loves building user interfaces.',
    language: 'English (US)',
    website: 'https://mywebsite.com',
    linkedin: 'in/krishnashukla',
    GitHub: 'krishnagithub',
  };

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    // Fetch profile data from backend if needed
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    // API call to submit updated profile
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">✏️ Edit Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Headline */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Headline</label>
          <input
            name="headline"
            maxLength={60}
            value={formData.headline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <small className="text-sm text-gray-500 mt-1 block">
            {60 - formData.headline.length} characters remaining.
          </small>
        </div>

        {/* Biography */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Biography</label>
          <textarea
            name="biography"
            rows={5}
            value={formData.biography}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <small className="text-sm text-gray-500 mt-1 block">
            Links and coupon codes are not permitted in this section.
          </small>
        </div>

        {/* Language */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Language</label>
          <input
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Social Links */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">LinkedIn Profile URL</label>
            <input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. in/johnsmith"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">GitHub Username</label>
            <input
              name="GitHub"
              value={formData.GitHub}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="e.g. krishnagithub"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            ✅ Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfiles;
