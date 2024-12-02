import { FlightTicket, Flight, NewsData, Destination } from "@/data/types";

export const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      title: "Explore The World",
      description: "Book your dream vacation today",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd",
      title: "Amazing Destinations",
      description: "Discover new places and create memories",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b",
      title: "Luxury Travel",
      description: "Experience comfort at its finest",
    },
];
  
export const newsData: NewsData[] = [
    {
      id: 1,
      title: "Holiday Special",
      description: "Get 25% off on your next purchase",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
    },
    {
      id: 2,
      title: "Weekend Deal",
      description: "Save $50 on orders above $200",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18",
    },
    {
      id: 3,
      title: "Flash Sale",
      description: "Buy one get one free",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49",
    },
    {
      id: 4,
      title: "First Time User",
      description: "Get 30% off on your first order",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
    },
];
  
export const popularDestinations: Destination[] = [
    {
      id: 1,
      city: "Paris",
      country: "France",
      code: "CDG",
      description: "Experience the city of love and lights",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      id: 2,
      city: "Tokyo",
      country: "Japan",
      code: "HND",
      description: "Immerse in culture and modern technology",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    },
    {
      id: 3,
      city: "Dubai",
      country: "UAE",
      code: "DXB",
      description: "Luxury and adventure in the desert",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
  ];

export const flightTickets: FlightTicket[] = [
  {
    id: 1,
    flight: {
      id: 101,
      departureDate: "2024/12/15",
      arrivalDate: "2024/12/15",
      departureTime: "08:00",
      arrivalTime: "12:30",
      totalTime: "4h 30m",
      sectors: ["Hanoi", "Ho Chi Minh City"],
      sectorsCode: ["HAN", "SGN"],
      price: 1500000,
      aircraftModel: "Airbus A321",
      flightCode: "VN123",
      class: "Economy",
      adults: 1,
      children: 0,
    },
    passengers: [
      {
        firstName: "Nguyen",
        lastName: "Van A",
        phone: "0987654321",
        gender: "Male",
        dob: "1990/01/01",
      },
    ],
    status: "Confirmed",
  },
  {
    id: 2,
    flight: {
      id: 102,
      departureDate: "2024/12/20",
      arrivalDate: "2024/12/20",
      departureTime: "14:00",
      arrivalTime: "16:00",
      totalTime: "2h 0m",
      sectors: ["Ho Chi Minh City", "Da Nang"],
      sectorsCode: ["SGN", "DAD"],
      price: 1000000,
      aircraftModel: "Boeing 737",
      flightCode: "VN456",
      class: "Business",
      adults: 1,
      children: 1,
    },
    passengers: [
      {
        firstName: "Tran",
        lastName: "Thi B",
        phone: "0981234567",
        gender: "Female",
        dob: "1985-05-20",
      },
      {
        firstName: "Tran",
        lastName: "Van C",
        phone: "",
        gender: "Male",
        dob: "2010/07/15",
      },
    ],
    status: "Pending",
  },
  {
    id: 3,
    flight: {
      id: 103,
      departureDate: "2024/12/25",
      arrivalDate: "2024/12/25",
      departureTime: "10:00",
      arrivalTime: "13:00",
      totalTime: "3h 0m",
      sectors: ["Da Nang", "Hanoi"],
      sectorsCode: ["DAD", "HAN"],
      price: 1200000,
      aircraftModel: "Airbus A320",
      flightCode: "VN789",
      class: "Economy",
      adults: 2,
      children: 0,
    },
    passengers: [
      {
        firstName: "Le",
        lastName: "Van D",
        phone: "0984567890",
        gender: "Male",
        dob: "1992-03-10",
      },
      {
        firstName: "Le",
        lastName: "Thi E",
        phone: "0981112223",
        gender: "Female",
        dob: "1994/11/15",
      },
    ],
    status: "Cancelled",
  },
];


export const flightData: Flight[] = [
    {
      id: 1,
      departureDate: "2022/12/01",
      arrivalDate: "2022/12/01",
      departureTime: "08:00 AM",
      arrivalTime: "10:30 AM",
      totalTime: "2h 30m",
      sectors: ["New York", "London"],
      sectorsCode: ["JFK", "LHR"],
      price: 2000000,
      aircraftModel: "Boeing 747",
      flightCode: "BA-123",
      class: "Economy",
      adults: 2,
      children: 1,
    },
    {
      id: 2,
      departureDate: "2022/12/01",
      arrivalDate: "2022/12/01",
      departureTime: "11:45 AM",
      arrivalTime: "16:15 PM",
      totalTime: "4h 30m",
      sectors: ["New York", "Paris", "London"],
      sectorsCode: ["JFK", "CDG", "LHR"],
      price: 2500000,
      aircraftModel: "Boeing 747",
      flightCode: "BA-123",
      class: "Economy",
      adults: 2,
      children: 1,
    },
    {
      id: 3,
      departureDate: "2022/12/01",
      arrivalDate: "2022/12/01",
      departureTime: "14:20 PM",
      arrivalTime: "16:50 PM",
      totalTime: "2h 30m",
      sectors: ["New York", "London"],
      sectorsCode: ["JFK", "LHR"],
      price: 3000000,
      aircraftModel: "Boeing 747",
      flightCode: "BA-123",
      class: "Economy",
      adults: 1,
      children: 0,
    },
  ];