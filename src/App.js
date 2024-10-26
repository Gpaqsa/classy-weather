import { useState } from "react";
import Input from "./components/Input";
import { useFetch } from "./useFetch";
import Weather from "./components/Weather";

function App() {
  const [location, setLocation] = useState("");

  // Fetch weather data based on the location
  const { isLoading, data, error } = useFetch(location);

  return (
    <div className="app">
      <h1>Functional Weather</h1>
      <Input
        onChangeLocation={(e) => setLocation(e.target.value)}
        location={location}
      />

      {isLoading && <p className="loader">Loading...</p>}
      {error && <p className="error">Error fetching data: {error.message}</p>}
      {data && <Weather location={location} data={data} />}
    </div>
  );
}

export default App;
