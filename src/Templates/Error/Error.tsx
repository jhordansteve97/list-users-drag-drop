import ImgError from "@/assets/imgError";
import { Link } from "react-router";

interface ErrorPageProps {
  numberError: string | number;
  message: string;
}

export const ErrorPage = ({numberError, message}: ErrorPageProps) => {
  return (
    <div className="h-screen w-screen bg-background flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-foreground">
        <div className="flex justify-center items-center h-full w-full lg:w-1/2 mx-8">
          <div>
            <div className="text-7xl text-primary font-dark font-extrabold mb-8">
              {numberError}
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              {message}
            </p>

            <Link
              to="/"
              className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-primary active:bg-red-600 hover:bg-red-700"
            >
              Regresar
            </Link>
          </div>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <ImgError className="h-full" />
        </div>
      </div>
    </div>
  );
};
