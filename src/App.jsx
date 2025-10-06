import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { Suspense, lazy } from "react";

const ErrorFallback = ({ error }) => {
  console.error(error);
  return (
    <div
      role="alert"
      className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mx-auto mt-8 max-w-lg"
    >
      <p className="font-bold">Terjadi Kesalahan Tak Terduga</p>
      <p className="text-sm">Gagal memuat halaman. Silakan coba muat ulang.</p>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Definisikan komponen halaman yang akan di-lazy load
const RegistrationPage = lazy(() =>
  import("./pages/registration/registration")
);

const LazyToastContainer = lazy(() =>
  import("./assets/components/lazyToasContainer")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/registration"
          element={
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="p-4 text-center">
                    Memuat Halaman Pendaftaran...
                  </div>
                }
              >
                <RegistrationPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
      <Suspense fallback={null}>
        <LazyToastContainer />
      </Suspense>

      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
