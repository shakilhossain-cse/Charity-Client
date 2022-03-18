import AuthProvider from "./context/AuthProvider";
import AllRoutes from "./Routes/Routes";

const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </div>
  );
};

export default App;
