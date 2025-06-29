import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const reduxPhoto = useSelector(state => state.profile.photo);
    const [formData, setFormData] = useState({
        firstName: 'Krishna',
        lastName: 'Shukla',
        headline: 'Full Stack Developer',
        biography: 'I love building web applications.',
        language: 'English (US)',
        website: '',
        linkedin: '',
        twitter: '',
    });

    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            setPhotoPreview(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile Data:', formData);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Main Profile Content */}
            <main className="flex-1 p-10 bg-white">
                <h1 className="text-3xl font-bold mb-8 text-center">Profile Information</h1>
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
                    {/* Photo */}
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full border overflow-hidden">
                            <img
                                src={photoPreview || reduxPhoto ? URL.createObjectURL(reduxPhoto) : 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition">
                            Change Photo
                            <input type="file" className="hidden" onChange={handlePhotoChange} />
                        </label>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-1">First Name</label>
                            <input name="firstName" value={formData.firstName} onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Last Name</label>
                            <input name="lastName" value={formData.lastName} onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold mb-1">Headline</label>
                            <input name="headline" value={formData.headline} maxLength={60} onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <small className="text-gray-500">{60 - formData.headline.length} characters remaining</small>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold mb-1">Biography</label>
                            <textarea name="biography" value={formData.biography} onChange={handleChange} rows="4"
                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <small className="text-gray-500">Links and coupon codes are not permitted in this section.</small>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold mb-1">Language</label>
                            <input name="language" value={formData.language} onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Website</label>
                            <input name="website" value={formData.website} onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="http(s)://..." />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">LinkedIn Profile URL</label>
                            <input name="linkedin" value={formData.linkedin} onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="linkedin.com/in/krishna" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold mb-1">X (Twitter) Username</label>
                            <input name="twitter" value={formData.twitter} onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g. @krishna_dev" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 text-center">
                        <button type="submit"
                            className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition">
                            Save Changes
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default ProfilePage;
