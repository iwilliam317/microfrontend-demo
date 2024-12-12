import React, { Suspense } from "react";
const RemoteButton = React.lazy(() => import("remoteApp/Button"));
const App = () => (
  <div>
    <h1>Host App</h1>
    <Suspense fallback={<div>Loading remote button...</div>}>
      <RemoteButton />
    </Suspense>
  </div>
);
export default App;
