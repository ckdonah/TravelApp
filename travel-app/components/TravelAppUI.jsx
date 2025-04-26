import React from 'react';
import { Search, Map, Calendar, User, Home, Compass, MessageSquare, Bookmark } from 'lucide-react';
import baliImage from '../../travel-app/src/assets/bali.jpg';
import santoriniImage from '../../travel-app/src/assets/santorini.jpg';
import cookingclassImage from '../../travel-app/src/assets/cookingclass.jpg';
import sdImage from '../../travel-app/src/assets/sd.jpg';

const TravelAppUI = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Travelo</h1>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full bg-indigo-500 hover:bg-indigo-400">
              <Search size={20} />
            </button>
            <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center">
              <User size={18} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4">
        {/* Hero Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Discover</h2>
          <p className="text-gray-600">Explore the world's best destinations</p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-md flex items-center p-3 mt-3">
            <Search size={20} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Where would you like to go?" 
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-6">
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {['All', 'Popular', 'Recommended', 'Budget', 'Luxury'].map((category, index) => (
              <div 
                key={index} 
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  index === 0 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Destinations */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Featured Destinations</h3>
            <button className="text-indigo-600 text-sm">See all</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: 'Bali, Indonesia',
                image: baliImage,
                rating: '4.8',
                price: '$1,200'
              },
              {
                name: 'Santorini, Greece',
                image: santoriniImage,
                rating: '4.9',
                price: '$1,500'
              }
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={destination.image} alt={destination.name} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">{destination.name}</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <Map size={16} className="text-gray-500 mr-1" />
                      <span className="text-xs text-gray-500">7 days tour</span>
                    </div>
                    <span className="font-semibold text-indigo-600">{destination.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Popular Experiences */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Popular Experiences</h3>
            <button className="text-indigo-600 text-sm">See all</button>
          </div>
          
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {[
              {
                title: 'Cooking Class',
                location: 'Tokyo, Japan',
                image: cookingclassImage
              },
              {
                title: 'Scuba Diving',
                location: 'Great Barrier Reef',
                image: sdImage,
              },
              {
                title: 'Wine Tasting',
                location: 'Tuscany, Italy',
                image: '/api/placeholder/150/150'
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md min-w-[150px]">
                <div className="relative">
                  <img src={experience.image} alt={experience.title} className="w-full h-24 object-cover rounded-t-lg" />
                  <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <Bookmark size={16} className="text-gray-500" />
                  </button>
                </div>
                <div className="p-2">
                  <h4 className="font-medium text-sm">{experience.title}</h4>
                  <div className="flex items-center mt-1">
                    <Map size={14} className="text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500">{experience.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 flex justify-around py-3">
        <button className="flex flex-col items-center text-indigo-600">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <Compass size={20} />
          <span className="text-xs mt-1">Explore</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <Calendar size={20} />
          <span className="text-xs mt-1">Trips</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <MessageSquare size={20} />
          <span className="text-xs mt-1">Chat</span>
        </button>
      </nav>
    </div>
  );
};

export default TravelAppUI;