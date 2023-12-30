import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  quizes: [],
  filteredQuizes: [],
  selectedQuiz: null,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "getQuizes":
      return {
        ...state,
        quizes: action.payload,
        filteredQuizes: action.payload,
        isLoading: false,
      };
    case "selectQuiz":
      return {
        ...state,
        selectedQuiz: action.payload,
      };
    case "filtedQuizes":
      return {
        ...state,
        filteredQuizes: action.payload,
      };
    case "addQuiz":
      return {
        ...state,
        quizes: [...state.quizes, action.payload],
        filteredQuizes: [...state.filteredQuizes, action.payload],
      };
    case "isLoading":
      return {
        ...state,
        isLoading: true,
      };
    case "doneLoading":
      return {
        ...state,
        isLoading: false,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AppProvider({ children }) {
  const [{ quizes, filteredQuizes, selectedQuiz, isLoading }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    async function getQuizes() {
      dispatch({ type: "isLoading" });

      try {
        const res = await fetch("http://localhost:9000/quizes");
        const data = await res.json();
        dispatch({ type: "getQuizes", payload: data });
      } catch {
        dispatch({ type: "doneLoading" });
        alert("Could not retrieve quizes");
      }
    }
    getQuizes();
  }, []);

  function handleQuizSelect(quiz) {
    quiz.id === selectedQuiz?.id
      ? dispatch({ type: "selectQuiz", payload: "" })
      : dispatch({ type: "selectQuiz", payload: quiz });
    console.log(quiz);
  }

  return (
    <AppContext.Provider
      value={{
        quizes,
        filteredQuizes,
        selectedQuiz,
        isLoading,
        handleQuizSelect,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("useQuizes called outside of QuizProvider");
  return context;
}

export { AppProvider, useApp };
