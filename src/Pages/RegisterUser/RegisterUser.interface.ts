import * as Yup from "yup";
import type { schema } from "./validate";

export interface Img {
  male: string;
  female: string;
}

export  type FormValues = Yup.InferType<typeof schema>;

export interface FormState {
  message: string;
  errors: Record<string, string>;
}
