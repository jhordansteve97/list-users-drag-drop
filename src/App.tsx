import { useEffect, useMemo, useState } from "react";
import { RouterProvider } from "react-router/dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { router } from "./Routers/routers";
import { AlertProvider } from "./Atoms";
import { ThemeContext } from "./Hooks";

function App() {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const darkStored = localStorage.getItem("dark");
      return darkStored ? JSON.parse(darkStored) : false;
    } catch (error) {
      console.log("dark -->", error);
      return false;
    }
  });

  // agregar el tema y si existe el modo oscuro
  useEffect(() => {
    if (dark)
      document.body.classList.add("dark"); // si existe el modo oscuro agregarlo
    else document.body.classList.remove("dark"); // si no esta eliminarlo si es que existe la clase en body
  }, [dark]);

  const value = useMemo(
    () => ({
      dark,
      setDark,
    }),
    [dark]
  ); // memorizar el color primario

  return (
    <div className="bg-background dark:bg-darkbackground">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext.Provider value={value}>
            {/** Proveedor del contexto del color primario */}
            <AlertProvider position="bottom-right">
              {/** Proveedor de las alertas y por defecto la posicion de abajo a la derecha */}
              <RouterProvider router={router} />
              {/** Proveedor del react router */}
            </AlertProvider>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
