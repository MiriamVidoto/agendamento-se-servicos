import { AuthEmailProvider } from './contexts/authEmail/authEmail';
import { AuthGoogleProvider } from './contexts/authGoogle/authGoogle';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AuthGoogleProvider>
      <AuthEmailProvider>
        <AppRoutes />
      </AuthEmailProvider>
    </AuthGoogleProvider>
  );
}

export default App;
