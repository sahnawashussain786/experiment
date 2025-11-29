import yogaImg from "../assets/yoga.png";
import strengthImg from "../assets/strength.png";
import cardioImg from "../assets/cardio.png";

export const classes = [
  {
    id: "yoga-mindfulness",
    title: "Yoga & Mindfulness",
    img: yogaImg,
    shortDesc:
      "Find your balance and inner peace with our expert-led yoga sessions.",
    longDesc:
      "Our Yoga & Mindfulness classes are designed to help you reconnect with your body and mind. Whether you're a beginner or an advanced practitioner, our certified instructors will guide you through flows that improve flexibility, strength, and mental clarity. We offer various styles including Vinyasa, Hatha, and Yin Yoga.",
    benefits: [
      "Improved flexibility and balance",
      "Stress reduction and mental clarity",
      "Core strength development",
      "Better posture and body awareness",
    ],
    schedule: "Daily: 7:00 AM, 12:00 PM, 6:00 PM",
    intensity: "Low to Moderate",
    duration: "60 mins",
  },
  {
    id: "strength-training",
    title: "Strength Training",
    img: strengthImg,
    shortDesc:
      "Build muscle and power with our state-of-the-art free weights and machines.",
    longDesc:
      "Unleash your inner power with our comprehensive Strength Training program. Focusing on compound movements and progressive overload, these classes are perfect for building lean muscle mass and increasing overall strength. Our trainers ensure proper form and technique to maximize results and prevent injury.",
    benefits: [
      "Increased muscle mass and metabolism",
      "Improved bone density",
      "Enhanced functional strength",
      "Injury prevention",
    ],
    schedule: "Mon, Wed, Fri: 6:00 AM, 5:30 PM, 7:00 PM",
    intensity: "High",
    duration: "45-60 mins",
  },
  {
    id: "hiit-cardio",
    title: "HIIT & Cardio",
    img: cardioImg,
    shortDesc:
      "Burn calories and boost endurance in our high-energy cardio zones.",
    longDesc:
      "Get your heart racing with our High-Intensity Interval Training (HIIT) and Cardio classes. These sessions are designed to maximize calorie burn and improve cardiovascular health in a short amount of time. Expect a mix of sprinting, jumping, rowing, and bodyweight exercises that will push you to your limits.",
    benefits: [
      "Maximum calorie burn",
      "Improved cardiovascular health",
      "Increased endurance and stamina",
      "Afterburn effect (EPOC)",
    ],
    schedule: "Tue, Thu, Sat: 6:30 AM, 6:00 PM",
    intensity: "Very High",
    duration: "30-45 mins",
  },
];
