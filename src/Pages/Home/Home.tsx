import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import type { RootState } from "@/store/store";
import { addUser } from "@/store/userSlice";
import { useUser } from "@/Hooks";
import { Loading } from "@/Atoms";
import { Dashboard } from "@templates";
import { optionsSidebar } from "./Home.dummy";
import logo from "../../assets/logo.png";

export const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { userData, loading, error } = useUser(10);
  const { general } = useSelector((state: RootState) => state.users);
  const [title, setTitle] = useState<string>("Lista de usuarios")


  useEffect(() => {
    if (location.pathname.match('/User/')) {
      setTitle('Detalle del usuario');
    }

    if (location.pathname ==='/register') {
      setTitle('Alta de nuevos usuario');
    }

    if (location.pathname ==='/') {
      setTitle('Lista de usuarios');
    }
  }, [location.pathname])

  useEffect(() => {
    if (general.length === 0 && !error && userData) {
      userData.forEach((element) =>
        dispatch(
          addUser({
            id: uuidv4(),
            name: `${element.name.first} ${element.name.last}`,
            email: element.email,
            avatar: element.picture?.large,
            gender: element.gender,
            city: element.location.city,
            state: element.location.state,
            country: element.location.country,
          })
        )
      );
    }
  }, [general, error, userData, dispatch]);

  return (
    <div>
      <Dashboard
        optionsSidebar={optionsSidebar}
        logo={logo}
        color="primary"
        to="/"
        title={title}
      >
        {loading && <Loading variant="letters" />}
        {error && <p>Error</p>}
        {!loading && !error && <Outlet />}
      </Dashboard>
    </div>
  );
};
