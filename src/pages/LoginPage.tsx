import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import twitterL from "../assets/twitterLogo.png";
import axios from "axios";
import { useContext } from "react";
import { ProfileContext } from "../contexts/DataContext";

type FormValues = {
  email: string;
  password: string;
};

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("User Handle is required.")
      .min(3, "User Handle must be at least 3 characters."),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters."),
  })
  .required();

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email && values.password ? values : {},
    errors: {
      ...(values.email
        ? {}
        : {
            email: {
              type: "required",
              message: "User Handle is required.",
            },
          }),
      ...(values.password
        ? {}
        : {
            password: {
              type: "required",
              message: "Password is required.",
            },
          }),
    },
  };
};

export default function LoginPage() {
  const history = useNavigate();
  const { profile, setProfile } = useContext(ProfileContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    axios
      .post("http://localhost:9000/profile/login", data)
      .then((res) => {
        console.log(res);
        setProfile(res.data);
        console.log("profile", profile);
        history(`/profile/${res.data.userHandle}`);
      })
      .catch((err) => {
        console.log("data", data);
        console.log(err);
      });
  });

  const isSubmitDisabled =
    !isDirty ||
    errors.email?.type === "required" ||
    errors.password?.type === "required";
  isDirty && (errors.email?.type === "min" || errors.password?.type === "min");

  return (
    <div>
      <img className="m-auto my-5 " src={twitterL} alt="xlogo" />

      <form
        className="flex flex-col gap-2 m-auto p-5 w-[20rem] mt-5 shadow-2xl"
        onSubmit={onSubmit}
      >
        <h1 className="text-center text-2xl mb-1 font-bold">
          Login to BruTwitter
        </h1>
        <input
          placeholder="User Handle"
          {...register("email", { min: 3, maxLength: 50 })}
        />
        {errors?.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
        <input
          placeholder="Password"
          {...register("password", { min: 8, maxLength: 150 })}
        />
        {errors?.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <input
          className="bg-[#007bff] disabled:bg-[#007bff64] w-[10rem] text-white text-center p-2 rounded-md m-auto"
          type="submit"
          disabled={isSubmitDisabled}
        />
      </form>
      <p className="mt-5 mr-[80px] text-center">
        <a className="text-[#007bff]" href="/register">
          Click here
        </a>{" "}
        if you need to register...
      </p>
    </div>
  );
}
