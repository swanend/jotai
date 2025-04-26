import { atom, useAtom } from "jotai";
import Squares from "./components/Squares/Squares";

const countAtom = atom(0);

export default function DarkCounter() {
  const [count, setCount] = useAtom(countAtom);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-100 relative w-screen">
      <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl flex flex-col items-center w-80 h-96 z-10">
        <p className="text-7xl font-extrabold mb-10 tracking-tight">{count}</p>
        <div className="flex space-x-8 mb-8">
          <button
            onClick={decrement}
            className="bg-teal-600 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all text-white font-bold py-3 px-8 rounded-lg text-2xl shadow-md"
          >
            -
          </button>
          <button
            onClick={increment}
            className="bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all text-white font-bold py-3 px-8 rounded-lg text-2xl shadow-md"
          >
            +
          </button>
        </div>
        <button
          onClick={reset}
          className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all text-white font-semibold py-3 px-10 rounded-lg shadow-md"
        >
          Reset
        </button>
      </div>
      <div className="w-screen h-screen z-0 absolute">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#7c7979"
          hoverFillColor="#fb00ff"
        ></Squares>
      </div>
    </div>
  );
}
