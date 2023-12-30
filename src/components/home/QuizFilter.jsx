import { useState } from "react";
import { useApp } from "../contexts/AppContext";

export default function QuizFilter() {
  const [search, setSearch] = useState("");

  const { quizes, dispatch } = useApp();

  function handleInputChange(e) {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filtered = quizes.filter((quiz) =>
      quiz.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch({ type: "filtedQuizes", payload: filtered });
  }

  return (
    <form className="filter" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Filter quizes"
        value={search}
        onChange={handleInputChange}
      />
    </form>
  );
}
