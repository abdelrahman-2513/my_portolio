import { useState } from 'react';
import Part1 from './part_1';
import Part2 from './part_2';

function App() {
  const [part, setPart] = useState("about");
  return (
    <div className="App">
      <Part1 part={part} setPart={setPart} />
      <Part2 />
    </div>
  );
}

export default App;
