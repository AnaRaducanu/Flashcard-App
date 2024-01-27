export default function Header() {
  return (
    <header style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <img id="header-logo" src="capitals.webp" alt="Logo" />
      <h1 style={{ color: "white", fontSize: "50px" }}>
        Most visited capitals in the world!
      </h1>
      <p style={{ color: "white", margin: "0", fontSize: "25px" }}>
        {" "}
        🧠Expand Your Capitals Knowlegde, One Flashcard at a Time!🚀{" "}
      </p>
    </header>
  );
}
