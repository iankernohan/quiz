import { Link } from "react-router-dom";

export default function StyledLink({ to, children }) {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      {children}
    </Link>
  );
}
