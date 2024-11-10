import "./App.css";
import { useRandom } from "./hooks/useRandom";

//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function App() {
  const { randomQuery } = useRandom();

  return (
    <>
      <div>{randomQuery.error && JSON.stringify(randomQuery.error)}</div>
      {/* <RandomNumber /> */}
      {randomQuery.isFetching ? (
        <h1>Is loading...</h1>
      ) : (
        <h1>Number: {randomQuery.data}</h1>
      )}
      <button onClick={() => randomQuery.refetch()}>New number</button>
    </>
  );
}

export default App;
