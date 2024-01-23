import Header from "./Header.js";
import Form from "./Form.js";
import Flashcards from "./Flashcards.js";
import Footer from "./Footer.js";

export const flashCardArray = [
  {
    id: "q1",
    question: "What is an interesting fact about the capital city of France, Paris?",
    answer: "Paris, the capital of France, is known as the City of Light (La Ville Lumière) because it was one of the first cities in the world to have street lighting.",
  },
  {
    id: "q2",
    question: " What historic temple in Bangkok is known for its intricate architecture and houses the Emerald Buddha, a revered religious icon?",
    answer:
      "Wat Phra Kaew, located in Bangkok, is a historic temple renowned for its intricate architecture and is home to the Emerald Buddha, a revered religious icon in Thai culture.",
  },
  {
    id: "q3",
    question: "What iconic river flows through London and is crossed by numerous historic bridges?",
    answer:
      "The River Thames flows through London, and its banks are adorned with numerous historic bridges, including the famous Tower Bridge and the picturesque Millennium Bridge.",
  },
  {
    id: "q4",
    question: "Which world-famous park in New York City features iconic landmarks such as Bethesda Terrace, Bow Bridge, and Strawberry Fields?",
    answer:
      "Central Park in New York City is a world-famous urban oasis, home to iconic landmarks like Bethesda Terrace, Bow Bridge, and Strawberry Fields, offering a retreat from the city's hustle with its scenic beauty and cultural significance.",
  },
  {
    id: "q5",
    question: "What architectural wonder defines Dubai's skyline?",
    answer:
      "Dubai's skyline is characterized by the Burj Khalifa, the world's tallest skyscraper at 828 meters (2,717 feet), symbolizing the city's commitment to architectural innovation and modernity.",
  },
  {
    id: "q6",
    question: "What stunning garden in Singapore showcases the city-state's commitment to sustainability and nature amidst urban development?",
    answer:
      "Gardens by the Bay in Singapore, with its impressive Supertree Grove and Flower Dome, exemplifies the city-state's dedication to sustainability and blending nature with urban living.",
  },
  {
    id: "q7",
    question: "What iconic tower in Kuala Lumpur held the title of the world's tallest twin towers upon its completion?",
    answer:
      "The Petronas Towers in Kuala Lumpur, once the world's tallest twin towers, stand as a remarkable symbol of Malaysia's modern architectural achievements.",
  },
  {
    id: "q8",
    question: " What landmark in Istanbul connects Europe and Asia?",
    answer:
      "The Bosporus Bridge links Europe and Asia, serving as a symbolic and vital connection in Istanbul.",
  },
  {
    id: "q9",
    question: "What unique feature characterizes Tokyo's public transportation system?",
    answer: "Tokyo's public transportation system stands out for its efficiency, and during rush hours, uniformed staff known as 'pushers' help cram as many passengers as possible into trains by literally pushing and shoving, showcasing the city's commitment to maximizing space and maintaining punctuality.",
  },
  {
    id: "q10",
    question: "What vibrant avenue in Barcelona is renowned for its unique architecture and lively atmosphere?",
    answer:
      "La Rambla in Barcelona is a vibrant avenue celebrated for its distinctive architecture, bustling street life, and diverse cultural attractions, making it a focal point for locals and tourists alike.",
  },
];
function App() {
  return (
    <>
      <Header />
      <Form />
      <Flashcards />
      <Footer />
    </>
  );
}

export default App;
