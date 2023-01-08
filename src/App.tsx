import { Suspense, lazy } from 'react';
import { LoadingComponent } from 'components';

const LazyMainPage = lazy(() => import('./pages/MainPage'));

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LazyMainPage />
    </Suspense>
  );
}

export default App;
