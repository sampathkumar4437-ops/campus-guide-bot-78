export interface CampusQuery {
  category: 'schedule' | 'facilities' | 'dining' | 'library' | 'administrative' | 'general';
  keywords: string[];
}

export const campusData = {
  schedules: {
    academic: {
      "fall 2024": {
        start: "August 26, 2024",
        end: "December 13, 2024",
        midterms: "October 7-11, 2024",
        finals: "December 9-13, 2024"
      },
      "spring 2025": {
        start: "January 13, 2025", 
        end: "May 9, 2025",
        midterms: "March 3-7, 2025",
        finals: "May 5-9, 2025"
      }
    },
    library: {
      weekdays: "7:00 AM - 12:00 AM",
      weekends: "9:00 AM - 10:00 PM",
      finals: "24/7 during finals week"
    },
    dining: {
      mainDining: "7:00 AM - 9:00 PM",
      cafe: "7:00 AM - 7:00 PM", 
      snackBar: "11:00 AM - 11:00 PM"
    }
  },
  
  facilities: [
    {
      name: "Student Recreation Center",
      hours: "6:00 AM - 11:00 PM",
      amenities: ["Gym", "Pool", "Basketball courts", "Rock climbing wall"],
      location: "Building C"
    },
    {
      name: "Computer Labs",
      hours: "24/7 with student ID",
      amenities: ["Windows PCs", "Macs", "3D printers", "Scanners"],
      location: "Library 2nd floor"
    },
    {
      name: "Study Rooms",
      hours: "Library hours",
      amenities: ["Whiteboards", "Projectors", "Group seating"],
      location: "Library all floors"
    }
  ],

  dining: [
    {
      name: "Main Dining Hall",
      hours: "7:00 AM - 9:00 PM",
      options: ["International cuisine", "Vegetarian", "Vegan", "Halal"],
      location: "Student Center"
    },
    {
      name: "Campus Cafe",
      hours: "7:00 AM - 7:00 PM",
      options: ["Coffee", "Sandwiches", "Salads", "Pastries"],
      location: "Library entrance"
    },
    {
      name: "Food Trucks",
      hours: "11:00 AM - 3:00 PM",
      options: ["Rotating vendors", "Tacos", "Burgers", "Asian cuisine"],
      location: "Quad area"
    }
  ],

  library: {
    hours: {
      weekdays: "7:00 AM - 12:00 AM",
      weekends: "9:00 AM - 10:00 PM",
      finals: "24/7 during finals week"
    },
    services: [
      "Book checkout and renewals",
      "Research assistance", 
      "Printing and scanning",
      "Study room reservations",
      "Interlibrary loans",
      "Online database access"
    ],
    floors: {
      "Ground floor": "Circulation desk, Cafe, Computer lab",
      "1st floor": "Reference books, Study areas, Group study rooms",
      "2nd floor": "Quiet study, Individual desks, Computer lab",
      "3rd floor": "Archives, Special collections, Faculty offices"
    }
  },

  administrative: [
    {
      office: "Registrar",
      services: ["Transcripts", "Enrollment verification", "Grade changes"],
      hours: "8:00 AM - 5:00 PM",
      location: "Administration Building, Room 101"
    },
    {
      office: "Financial Aid", 
      services: ["FAFSA help", "Scholarship applications", "Student loans"],
      hours: "8:00 AM - 5:00 PM",
      location: "Administration Building, Room 205"
    },
    {
      office: "Student Services",
      services: ["ID cards", "Parking permits", "Health services"],
      hours: "8:00 AM - 6:00 PM", 
      location: "Student Center, 2nd floor"
    },
    {
      office: "IT Help Desk",
      services: ["WiFi issues", "Password resets", "Software installation"],
      hours: "8:00 AM - 8:00 PM",
      location: "Library ground floor"
    }
  ]
};

export const quickResponses = [
  "What are the library hours?",
  "When does the dining hall close?", 
  "How do I get a parking permit?",
  "Where is the computer lab?",
  "What time do finals start?",
  "How do I reserve a study room?"
];