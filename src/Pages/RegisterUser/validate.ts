import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  city: Yup.string().required("La Ciudad es obligatorio"),
  state: Yup.string().required("El estado es obligatorio"),
  country: Yup.string().required("El país es obligatorio"),
});