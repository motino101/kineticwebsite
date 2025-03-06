"use client";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState(() => {
    const savedData = localStorage.getItem('profileData');
    return savedData ? JSON.parse(savedData) : {
      name: 'Waves Resort',
      category: 'Travel and Leisure',
      profilePicture: 'https://cdn.usegalileo.ai/sdxl10/98a0195f-0ceb-45e7-a862-defb310a2bdf.png',
      products: [
        { name: 'Beach & Ocean', type: 'General' },
        { name: 'Sunset & Sunrise', type: 'General' },
        { name: 'Travel & Leisure', type: 'General' },
        { name: 'Resort & Hotel', type: 'General' },
        { name: 'Vacation & Staycation', type: 'General' }
      ],
      audience: {
        ageRange: '18 - 65+',
        gender: 'All',
        location: 'Global',
        interests: 'Travel, Relaxation, Luxury, Adventure',
        behaviors: 'Frequent Travelers, High Spend',
        income: '$50,000+'
      },
      voice: {
        tone: 'Luxurious, Adventurous, Relaxing',
        guidelines: 'Focus on high-quality visuals, lifestyle, and relaxation. Use vibrant colors and high-quality images.',
        messaging: ''
      },
      visualIdentity: {
        adjectives: 'Vibrant, Luxurious, Relaxing',
        imagery: 'High-quality photography, color-focused, lifestyle, and travel imagery'
      }
    };
  });

  const productTypeOptions = ['General', 'Luxury', 'Adventure', 'Relaxation'];

  const handleInputChange = (section: string, field: string, value: string) => {
    if (section === 'products') {
      setProfileData(prevData => ({
        ...prevData,
        products: prevData.products.map((product, index) => {
          if (index === parseInt(field)) {
            return { ...product, name: value };
          }
          return product;
        })
      }));
    } else {
      setProfileData(prevData => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value
        }
      }));
    }
  };

  const handleProductTypeChange = (index: number, value: string) => {
    setProfileData(prevData => ({
      ...prevData,
      products: prevData.products.map((product, i) => {
        if (i === index) {
          return { ...product, type: value };
        }
        return product;
      })
    }));
  };

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        setProfileData(prevData => ({
          ...prevData,
          profilePicture: e.target?.result as string
        }));
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const triggerFileInput = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const fileInput = document.getElementById('profilePictureInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const saveProfileData = () => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
  };

  return (
    <div className="min-h-screen flex flex-col bg-black" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4">
              <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 cursor-pointer"
                    style={{ backgroundImage: `url(${profileData.profilePicture})` }}
                    onClick={triggerFileInput}
                  ></div>
                  <input
                    type="file"
                    accept="image/*"
                    id="profilePictureInput"
                    onChange={handleProfilePictureChange}
                    className="hidden"
                  />
                  <div className="flex flex-col justify-center">
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={e => handleInputChange('name', '', e.target.value)}
                      className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] bg-transparent border-none"
                    />
                    <input
                      type="text"
                      value={profileData.category}
                      onChange={e => handleInputChange('category', '', e.target.value)}
                      className="text-[#b9b09d] text-base font-normal leading-normal bg-transparent border-none"
                    />
                  </div>
                </div>
                <div className="flex w-full max-w-[480px] gap-3 md:w-auto">
                  <button
                    onClick={saveProfileData}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#393328] text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 md:flex-auto"
                  >
                    <span className="truncate">Save Profile</span>
                  </button>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#edaf34] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] flex-1 md:flex-auto"
                  >
                    <span className="truncate">Create New Video</span>
                  </button>
                </div>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Products &amp; Services</h3>
            <div className="p-4 grid grid-cols-2">
              {profileData.products.map((product, index) => (
                <div key={index} className="flex flex-col gap-1 border-t border-solid border-t-[#544b3b] py-4">
                  <input
                    type="text"
                    value={product.name}
                    onChange={e => handleInputChange('products', index.toString(), e.target.value)}
                    className="text-[#b9b09d] text-sm font-normal leading-normal bg-transparent border-none"
                  />
                  <select
                    value={product.type}
                    onChange={e => handleProductTypeChange(index, e.target.value)}
                    className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                  >
                    {productTypeOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Target Audience</h3>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Age Range</p>
                <input
                  type="text"
                  value={profileData.audience.ageRange}
                  onChange={e => handleInputChange('audience', 'ageRange', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Gender</p>
                <input
                  type="text"
                  value={profileData.audience.gender}
                  onChange={e => handleInputChange('audience', 'gender', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Location</p>
                <input
                  type="text"
                  value={profileData.audience.location}
                  onChange={e => handleInputChange('audience', 'location', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Interests</p>
                <input
                  type="text"
                  value={profileData.audience.interests}
                  onChange={e => handleInputChange('audience', 'interests', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Behaviors</p>
                <input
                  type="text"
                  value={profileData.audience.behaviors}
                  onChange={e => handleInputChange('audience', 'behaviors', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Income</p>
                <input
                  type="text"
                  value={profileData.audience.income}
                  onChange={e => handleInputChange('audience', 'income', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Voice &amp; Identity</h3>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Tone Adjectives</p>
                <input
                  type="text"
                  value={profileData.voice.tone}
                  onChange={e => handleInputChange('voice', 'tone', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Content Guidelines</p>
                <input
                  type="text"
                  value={profileData.voice.guidelines}
                  onChange={e => handleInputChange('voice', 'guidelines', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Messaging Style</p>
                <input
                  type="text"
                  value={profileData.voice.messaging}
                  onChange={e => handleInputChange('voice', 'messaging', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Visual Identity</h3>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Descriptive Adjectives</p>
                <input
                  type="text"
                  value={profileData.visualIdentity.adjectives}
                  onChange={e => handleInputChange('visualIdentity', 'adjectives', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Imagery Style</p>
                <input
                  type="text"
                  value={profileData.visualIdentity.imagery}
                  onChange={e => handleInputChange('visualIdentity', 'imagery', e.target.value)}
                  className="text-white text-sm font-normal leading-normal bg-transparent border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
