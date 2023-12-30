import Preview from "./Preview";
import QuizList from "./QuizList";

import "../../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <QuizList />
      <Preview />
    </div>
  );
}

export default Home;
