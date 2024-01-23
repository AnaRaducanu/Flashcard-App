import FlashcardItem from "./FlashcardItem.js";

export default function Flashcards(props) {
  const flashcardObjects = props.flashcardList;
  const deleteFlashcard = props.deleteFlashcard;
  return (
    <section className="flashcard-grid">
      {flashcardObjects.map((object) => {
        return (
          <FlashcardItem
            key={object.id}
            flashcard={object}
            deleteFlashcardObj={() => deleteFlashcard(object.id)}
          />
        );
      })}
    </section>
  );
}