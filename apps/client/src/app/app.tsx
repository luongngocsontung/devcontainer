// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { useEffect } from 'react';
import NxWelcome from './nx-welcome';
import { createScenarioSchema } from '@playstation/shared';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  useEffect(() => {
    const response = createScenarioSchema.parse({
      name: 'test',
    });
    console.log('>>>> zod validation', response);
  }, []);

  return (
    <div>
      <NxWelcome title="@playstation/client" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
