import Header from "./Header.js";
import Form from "./Form.js";
import Flashcards from "./Flashcards.js";
import Footer from "./Footer.js";
import { useState } from "react";

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
    question: "What iconic neoclassical structure serves as a symbol of the United States and is located in Washington, D.C.?",
    answer:
      "The iconic neoclassical structure is the United States Capitol, situated in Washington, D.C. The Capitol is not only the meeting place of the U.S. Congress but also a symbol of the country's democratic principles and governance.",
  },
  {
    id: "q5",
    question: "What historic thermal bath, recognized as a UNESCO World Heritage site, attracts visitors seeking relaxation and wellness in Budapest?",
    answer:
      "The Gellért Baths in Budapest, Hungary, is a renowned thermal bath complex with a rich history and stunning architecture. It has been a popular destination for those seeking relaxation, spa treatments, and the therapeutic benefits of its thermal waters.",
  },
  {
    id: "q6",
    question: "What is the name of the famous Berlin wall that divided East and West Berlin during the Cold War?",
    answer:
      "The Berlin Wall was the historical barrier that separated East and West Berlin. Its remnants and a preserved section, known as the East Side Gallery, remain as a poignant reminder of the city's history.",
  },
  {
    id: "q7",
    question: "What popular Viennese dessert, consisting of layers of sponge cake, chocolate, and apricot jam, is often topped with a shiny chocolate glaze?",
    answer:
      "The delightful Sachertorte is a famous Viennese dessert renowned for its exquisite combination of flavors. This indulgent cake, often enjoyed with a dollop of whipped cream, has become a symbol of Austrian culinary excellence.",
  },
  {
    id: "q8",
    question: " In Prague, what picturesque district is famous for its narrow winding streets, colorful buildings, and artisan shops, creating a charming atmosphere reminiscent of a fairytale?",
    answer:
      "Mala Strana, or the Lesser Town, is renowned in Prague for its enchanting ambiance. With its narrow winding streets, colorful facades, and artisan shops, this district offers a fairytale-like setting that captivates the hearts of those exploring its historic charm.",
  },
  {
    id: "q9",
    question: "What unique feature characterizes Tokyo's public transportation system?",
    answer: "Tokyo's public transportation system stands out for its efficiency, and during rush hours, uniformed staff known as 'pushers' help cram as many passengers as possible into trains by literally pushing and shoving, showcasing the city's commitment to maximizing space and maintaining punctuality.",
  },
  {
    id: "q10",
    question: "Which traditional Chinese performing art, featuring colorful costumes, intricate choreography, and symbolic gestures, is often performed in Beijing's cultural events and theaters?",
    answer:
      "Peking Opera, with its vibrant costumes, elaborate makeup, and stylized movements, is a traditional Chinese performing art form often featured at cultural events and theaters in Beijing. Its combination of music, vocal performance, mime, dance, and acrobatics makes it a captivating cultural experience.",
  },
  {
    id: "q11",
    question: "What is the significance of the Anne Frank House in Amsterdam?",
    answer:
      "The Anne Frank House in Amsterdam holds historical importance as it preserves the hiding place where Anne Frank, a Jewish girl, wrote her famous diary during World War II. The museum serves as a poignant reminder of the Holocaust and the impact of intolerance.",
  },
  {
    id: "q12",
    question: "What iconic structure stands at the heart of Rome, Italy?",
    answer:
      "The Colosseum, located in the center of Rome, is an ancient amphitheater known for its historical significance and architectural grandeur. It was used for gladiatorial contests and public spectacles in ancient Rome.",
  },
];
export default function App() {
  const [flashcardObjects, setflashcardObjects] = useState(flashCardArray);

  function deleteFlashcardObjectById(idToDelete) {
    setflashcardObjects((prev) => {
      return prev.filter((obj) => obj.id !== idToDelete);
    });
  }
  function addFlashcardObject(flashcardObject) {
    setflashcardObjects((prev) => {
      const created = {
        id: window.crypto.randomUUID(),
        question: flashcardObject.question,
        answer: flashcardObject.answer,
      };
      const appended = prev.concat(created);
      return appended;
    });
  }

  return (
    <>
      <Header />
      <Form addFlashcard={addFlashcardObject} />
      <Flashcards
        flashcardList={flashcardObjects}
        deleteFlashcard={deleteFlashcardObjectById}
      />
      <Footer />
    </>
  );
}




