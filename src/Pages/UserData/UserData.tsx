import { Button } from "@/Atoms";
import type { User } from "@/Interfaces";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import type { RootState } from "@/store/store";

export const UserData = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { general, selected } = useSelector((state: RootState) => state.users);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (params.box === "general") {
      setUserData(general.find((element: User) => element.id === params.id) ?? null);
    }

    if (params.box === "selected") {
      setUserData(selected.find((element: User) => element.id === params.id) ?? null);
    }

  }, [params, general, selected]);

  useEffect(() => {
  // Solo verificar cuando ya se intentó buscar el usuario
  if (userData === null) {
    const foundInGeneral = general.some((u) => u.id === params.id);
    const foundInSelected = selected.some((u) => u.id === params.id);

    // Si no existe en ninguno → lanzar error
    if (!foundInGeneral && !foundInSelected) {
      throw new Response("Usuario no encontrado", { status: 404 });
    }
  }
}, [userData, params, general, selected]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-paper dark:bg-darkpaper w-[400px] min-h-[400px] rounded-2xl shadow-2xl pb-8">
        <img
          className="w-[145px] h-[145px] rounded-full border-15 border-background dark:border-darkbackground m-auto mt-[-73px]"
          src={userData?.avatar}
          alt="avatar"
        />
        <h2 className="text-center mt-2.5 text-4xl dark:text-white">{userData?.name}</h2>
        <h3 className="text-center mt-2.5 text-xl dark:text-white">{userData?.email}</h3>
        <div className="w-[300px] p-2.5 flex justify-between m-auto text-xl mt-5">
          <div>
            <p className="dark:text-white"><b>Genero:</b></p>
            <p className="dark:text-white"><b>País:</b></p>
            <p className="dark:text-white"><b>Estado:</b></p>
            <p className="dark:text-white"><b>Ciudad:</b></p>
          </div>
          <div>
            <p className="dark:text-white">{userData?.gender === "female" ? "Mujer" : "Hombre"}</p>
            <p className="dark:text-white">{userData?.country}</p>
            <p className="dark:text-white">{userData?.state}</p>
            <p className="dark:text-white">{userData?.city}</p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button onClick={() => navigate(-1)}>Regresar</Button>
        </div>
      </div>
    </div>
  );
};
