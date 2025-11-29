import { PropertyListing } from "@/constants/index";
import Image from "next/image";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

interface PropertyDetailProps {
  property: PropertyListing;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  // Mock reviews data - in a real app, this would come from props or API
  const mockReviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/images/avatar1.jpg",
      rating: 5,
      comment: "Amazing place! Very clean and comfortable. The host was very responsive."
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/images/avatar2.jpg",
      rating: 4,
      comment: "Great location and the apartment had everything we needed. Would stay again!"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.title}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">★ {property.rating}</span>
        <span>{property.location}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-2 relative w-full h-96">
          <Image 
            src={property.images[0] || "/images/placeholder.jpg"} 
            alt={property.title} 
            fill
            className="object-cover rounded-lg"
          />
        </div>
        {/* Add more images if available */}
        {property.images.slice(1, 3).map((image, index) => (
          <div key={index} className="relative h-48">
            <Image 
              src={image} 
              alt={`${property.title} ${index + 2}`} 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="mt-2 text-gray-700">{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {property.amenities.map((amenity, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded-md">
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* Host Info */}
      <div className="mt-6 flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <Image 
            src={property.host.avatar || "/images/avatar-placeholder.jpg"} 
            alt={property.host.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Hosted by {property.host.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{property.host.rating} Host rating</span>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="mt-6">
        <BookingSection price={property.price} />
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <ReviewSection reviews={mockReviews} />
      </div>
    </div>
  );
};

export default PropertyDetail;