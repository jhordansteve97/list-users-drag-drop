import { useActionState, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "@/store/userSlice";
import type { RootState } from "@/store/store";
import { Button, Outlined, Switch } from "@/Atoms";
import { useAlert } from "@/Atoms/Alert/useAlert";
import type { FormState, FormValues } from "./RegisterUser.interface";
import { schema } from "./validate";
import { img } from "./Register.dummy";


export const RegisterUser = () => {
  const { addAlert } = useAlert();
  const dispatch = useDispatch();
  const { general, selected } = useSelector((state: RootState) => state.users);
  const [value, setValue] = useState(false);

  const [state, submitAction, isPending] = useActionState<FormState, FormData>(
    async (_, formData) => {
      try {
        const values = {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          city: formData.get("city") as string,
          state: formData.get("state") as string,
          country: formData.get("country") as string,
        };

        await schema.validate(values, { abortEarly: false });

        const userGeneralExists = general.some(
          (user) => user.email.toLowerCase() === values.email.toLowerCase()
        );

        const userSelectedExists = selected.some(
          (user) => user.email.toLowerCase() === values.email.toLowerCase()
        );

        if (userGeneralExists || userSelectedExists) {
          addAlert("El usuario ya existe", "error");
          setValue(false);
          return {
            message: "El usuario ya existe",
            errors: {},
          };
        }

        dispatch(
          addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email,
            avatar: img[value ? "male" : "female"],
            gender: value ? "male" : "female",
            city: values.city,
            state: values.state,
            country: values.country,
          })
        );

        setValue(false);

        addAlert("Usuario registrado correctamente", "success");

        return {
          message: "Formulario enviado correctamente",
          value: values,
          errors: {},
        };
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors: Partial<Record<keyof FormValues, string>> = {};

          err.inner.forEach((e) => {
            if (e.path) {
              errors[e.path as keyof FormValues] = e.message;
            }
          });

          addAlert("Corrige los errores", "error");

          return {
            message: "Corrige los errores",
            errors,
          };
        }
        return { message: "Error inesperado", errors: {} };
      }
    },
    { message: "", errors: {} } // Estado inicial
  );

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-paper dark:bg-darkpaper lg:w-[700px] md:w-auto h-auto rounded-2xl shadow-2xl p-2.5 pb-6">
        <img
          className="w-[145px] h-[145px] rounded-full border-15 border-background dark:border-darkbackground m-auto mt-[-73px]"
          src={img[value ? "male" : "female"]}
          alt="avatar"
        />
        <form action={submitAction}>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 mt-8 p-2.5">
            <Outlined
              id="name"
              label="Nombre completo"
              error={!!state.errors.name}
              textField={state.errors.name}
              autoComplete="on"
              defaultValue=""
            />
            <Outlined
              id="email"
              label="Correo electronico"
              error={!!state.errors.email}
              textField={state.errors.email}
              autoComplete="on"
              defaultValue=""
            />
            <Switch
              className="text-black"
              name="gender"
              labelLeft="Femenino"
              labelRight="Masculino"
              checked={value}
              onChange={setValue}
            />
            <Outlined
              id="city"
              label="Ciudad"
              error={!!state.errors.city}
              textField={state.errors.city}
              autoComplete="on"
              defaultValue=""
            />
            <Outlined
              id="state"
              label="Estado"
              error={!!state.errors.state}
              textField={state.errors.state}
              autoComplete="on"
              defaultValue=""
            />
            <Outlined
              id="country"
              label="País"
              error={!!state.errors.country}
              textField={state.errors.country}
              autoComplete="on"
              defaultValue=""
            />
          </div>
          <div className="flex justify-center mt-8">
            <div className="w-[80%]">
              <Button fullWidth type="submit" disabled={isPending}>
                {isPending ? "Enviando..." : "Registrar"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
