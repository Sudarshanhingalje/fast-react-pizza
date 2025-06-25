import { useState } from "react";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="loader">
      <div className="loader__spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
