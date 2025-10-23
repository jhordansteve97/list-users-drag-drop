import { useActionState, useState } from "react";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Button, Input, Switch } from "@/Atoms";
import { useAlert } from "@/Atoms/Alert/useAlert";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/userSlice";

interface Img {
  male: string;
  female: string;
}

const schema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  city: Yup.string().required("La Ciudad es obligatorio"),
  state: Yup.string().required("El estado es obligatorio"),
  country: Yup.string().required("El país es obligatorio"),
});

type FormValues = Yup.InferType<typeof schema>;

interface FormState {
  message: string;
  errors: Record<string, string>;
}

export const RegisterUser = () => {
  const { addAlert } = useAlert();
  const dispatch = useDispatch();
  const [value, setValue] = useState(false);
  const img: Img = {
    male: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
    female:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80",
  };

  const [state, submitAction, isPending] = useActionState<FormState, FormData>(
    async (prevState, formData) => {
      try {
        console.log(prevState);

        const values = {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          city: formData.get("city") as string,
          state: formData.get("state") as string,
          country: formData.get("state") as string,
        };

        await schema.validate(values, { abortEarly: false });

        addAlert("Formulario enviado correctamente", "success");

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
      <div className="bg-paper dark:bg-darkpaper w-[700px] h-[500px] rounded-2xl shadow-2xl p-2.5">
        <img
          className="w-[145px] h-[145px] rounded-full border-15 border-background dark:border-darkbackground m-auto mt-[-73px]"
          src={img[value ? "male" : "female"]}
          alt="avatar"
        />
        <form action={submitAction}>
          <div className="grid grid-cols-2 gap-10 mt-8 p-2.5">
            <Input
              id="name"
              label="Nombre completo"
              variant="outlined"
              error={!!state.errors.name}
              textField={state.errors.name}
              autoComplete="on"
              defaultValue=""
            />
            <Input
              id="email"
              label="Correo electronico"
              variant="outlined"
              error={!!state.errors.email}
              textField={state.errors.email}
              autoComplete="on"
              defaultValue=""
            />
            <Switch
              className="text-black"
              variant="both"
              name="gender"
              labelLeft="Femenino"
              labelRight="Masculino"
              checked={value}
              onChange={setValue}
            />
            <Input
              id="city"
              label="Ciudad"
              variant="outlined"
              error={!!state.errors.city}
              textField={state.errors.city}
              autoComplete="on"
              defaultValue=""
            />
            <Input
              id="state"
              label="Estado"
              variant="outlined"
              error={!!state.errors.state}
              textField={state.errors.state}
              autoComplete="on"
              defaultValue=""
            />
            <Input
              id="country"
              label="País"
              variant="outlined"
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
