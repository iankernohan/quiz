import StyledLink from "../StyledLink";
import "../../styles/Header.css";

export default function Header({ children }) {
  return (
    <div className="header">
      <h1>
        <StyledLink to={"/"}>{children}</StyledLink>
      </h1>

      <StyledLink to={"/newQuiz"}>
        <button>+ New</button>
      </StyledLink>
    </div>
  );
}
