import { Injectable } from '@nestjs/common';

export type tour = {
    id: number;
    name: string;
    destination: string;
    departure_date: string;
    duration: number;
    price: number;
    description: string;
}

const tours: tour[] = [
    {
      "id": 101,
      "name": "Adventure in the Amazon",
      "destination": "Amazon Rainforest",
      "departure_date": "2023-05-15",
      "duration": 10,
      "price": 2500,
      "description": "Embark on a thrilling adventure in the heart of the Amazon Rainforest. Explore diverse ecosystems, encounter unique wildlife, and experience the wonders of this vibrant and lush environment."
    },
    {
      "id": 102,
      "name": "European Discovery",
      "destination": "Paris, Rome, Barcelona",
      "departure_date": "2023-07-10",
      "duration": 14,
      "price": 3800,
      "description": "Immerse yourself in the rich history and culture of Europe as you visit iconic cities like Paris, Rome, and Barcelona. Enjoy breathtaking architecture, delicious cuisine, and the charm of each unique destination."
    },
    {
      "id": 103,
      "name": "Tropical Paradise Escape",
      "destination": "Bali, Maldives, Seychelles",
      "departure_date": "2023-09-25",
      "duration": 12,
      "price": 5200,
      "description": "Relax and rejuvenate in tropical paradise! Unwind on the beautiful beaches of Bali, indulge in the luxury of the Maldives, and explore the pristine beauty of Seychelles. A perfect getaway for sun-seekers."
    },
    {
      "id": 104,
      "name": "Cultural Expedition in Japan",
      "destination": "Tokyo, Kyoto, Osaka",
      "departure_date": "2023-06-08",
      "duration": 9,
      "price": 4000,
      "description": "Immerse yourself in the fascinating culture of Japan. Visit bustling Tokyo, explore the historic streets of Kyoto, and savor the culinary delights of Osaka. A journey through tradition and modernity."
    },
    {
      "id": 105,
      "name": "Safari Adventure in Africa",
      "destination": "Serengeti National Park, Maasai Mara",
      "departure_date": "2023-08-20",
      "duration": 7,
      "price": 6500,
      "description": "Experience the thrill of a safari in the vast landscapes of Serengeti and Maasai Mara. Witness the incredible wildlife, including the Big Five, and enjoy the beauty of the African savannah."
    }
]
  

@Injectable()
export class ApiService {
  getAllTours(): tour[] {
    return tours;
  }
}
