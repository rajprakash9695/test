import './App.css';
import { Profiler, useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState();
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert('please tick the checkbox');
      return;
    } else {
      setIsLoading(true);
      setState(data);
      setData('');
      setIsLoading(false);
      setIsChecked(false);
    }
  };

  return (
    <div className="App" id="App">
      <div>
        <form onSubmit={submit}>
          <input
            type="text"
            onChange={(e) => setData(e.target.value)}
            value={data}
          />
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => e.timeStamp.toLocaleString()}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'loading' : 'submit'}
          </button>
        </form>
        <p>{state}</p>
      </div>
    </div>
  );
}

export default App;
