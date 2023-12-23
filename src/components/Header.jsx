import { useState } from "react";
import StyledLink from "./StyledLink";

export default function Header({ children, setFilteredQuizes, quizes }) {
  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filtered = quizes.filter((quiz) =>
      quiz.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuizes(filtered);
  }

  return (
    <div className="header">
      <form>
        <input
          type="text"
          placeholder="Search for quiz/flashcards"
          value={search}
          onChange={handleInputChange}
        />
      </form>
      <h1>
        <StyledLink to={"/"}>{children}</StyledLink>
      </h1>
      <button>
        <StyledLink to={"/newQuiz"}>+ New</StyledLink>
      </button>
    </div>
  );
}
