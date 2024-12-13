import React, { Suspense } from "react";
// Attempt to import the remote component and catch errors.
const RemoteButton = React.lazy(() =>
  import("remoteApp/Button").catch(() => {
    console.error("Failed to load remote component");
    // Return a fallback component when the remote fails
    return { default: () => <div>Error loading button.</div> };
  })
);
const App = () => (
  <div>
    <h1>Host App</h1>
    <Suspense fallback={<div>Loading remote button...</div>}>
      <RemoteButton />
    </Suspense>
  </div>
);
export default App;