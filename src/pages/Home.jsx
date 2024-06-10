
// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Cards from "../components/Cards";
// import { useDispatch, useSelector } from "react-redux";
// import { newBoardDispatch, addCard } from "../redux/todoSlice";
// import toast, { Toaster } from "react-hot-toast";

// const Home = () => {
//   const dispatch = useDispatch();
//   const states = useSelector((card) => card.todo);

//   const [stateToMap, setStateToMap] = useState(
//     states?.currState === "mainCard" ? states.mainCard : states.newBoard
//   );

//   const changeState = () => {
//     dispatch(newBoardDispatch());

//     if (states.currState === "mainCard") {
//       setStateToMap(states.newBoard);
//     } else {
//       setStateToMap(states.mainCard);
//     }
//   };

//   const [addCardTitle, setAddCardTitle] = useState("");

//   const handleAddCard = () => {
//     if (addCardTitle === "") {
//       toast.error("Add a Card Title");
//     } else {
//       dispatch(addCard({ title: addCardTitle }));
//       setAddCardTitle("");
//     }
//   };

//   useEffect(() => {
//     setStateToMap(
//       states.currState === "mainCard" ? states.mainCard : states.newBoard
//     );
//   }, [states]);

//   useEffect(() => {
//     if (!states.mainCard.length) {
//       const defaultCards = [
//         { id: 'myresources', groupName: 'Myresources' },
//         { id: 'todo', groupName: 'Todo' },
//         { id: 'doing', groupName: 'Doing' },
//         { id: 'done', groupName: 'Done' },
//       ];
//       defaultCards.forEach(card => dispatch(addCard(card)));
//     }
//   }, [dispatch, states.mainCard.length]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-100 px-10 py-6">
//       <Navbar changeState={changeState} />
//       <div>
//         <Cards stateToMap={stateToMap} />
//       </div>
//       <div className="bg-white p-4 mt-6 rounded-lg shadow-lg flex items-center gap-4">
//         <h2 className="text-xl font-medium text-gray-800">Add Card</h2>
//         <input
//           value={addCardTitle}
//           onChange={(e) => setAddCardTitle(e.target.value)}
//           type="text"
//           className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Add a new card title"
//         />
//         <button
//           onClick={handleAddCard}
//           className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//         >
//           Submit
//         </button>
//       </div>
//       <Toaster />
//     </div>
//   );
// };

// export default Home;
// Home.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { newBoardDispatch, addCard } from "../redux/todoSlice";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const states = useSelector((card) => card.todo);

  const [stateToMap, setStateToMap] = useState(
    states?.currState === "mainCard" ? states.mainCard : states.newBoard
  );

  const changeState = () => {
    dispatch(newBoardDispatch());

    if (states.currState === "mainCard") {
      setStateToMap(states.newBoard);
    } else {
      setStateToMap(states.mainCard);
    }
  };

  const [addCardTitle, setAddCardTitle] = useState("");

  const handleAddCard = () => {
    if (addCardTitle === "") {
      toast.error("Add a Card Title");
    } else {
      dispatch(addCard({ title: addCardTitle }));
      setAddCardTitle("");
    }
  };

  useEffect(() => {
    setStateToMap(
      states.currState === "mainCard" ? states.mainCard : states.newBoard
    );
  }, [states]);

  useEffect(() => {
    if (!states.mainCard.length) {
      const defaultCards = [
        { id: "myresources", groupName: "Myresources" },
        { id: "todo", groupName: "Todo" },
        { id: "doing", groupName: "Doing" },
        { id: "done", groupName: "Done" },
      ];
      defaultCards.forEach((card) => dispatch(addCard(card)));
    }
  }, [dispatch, states.mainCard.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-100 px-10 py-6">
      <Navbar changeState={changeState} />
      <div>
        <Cards stateToMap={stateToMap} />
      </div>
      <div className="bg-white p-6 mt-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Creat Card</h2>
        <input
          value={addCardTitle}
          onChange={(e) => setAddCardTitle(e.target.value)}
          type="text"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new card title"
        />
        <button
          onClick={handleAddCard}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
