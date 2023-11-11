import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import twitterL from "../assets/twitterLogo.png";

type FormValues = {
  userHandle: string;
  password: string;
};

const schema = yup
  .object()
  .shape({
    userHandle: yup
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
    values: values.userHandle && values.password ? values : {},
    errors: {
      ...(values.userHandle
        ? {}
        : {
            userHandle: {
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
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      userHandle: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  const isSubmitDisabled =
    isDirty &&
    (errors.userHandle?.type === "min" || errors.password?.type === "min");

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
          {...register("userHandle", { min: 3, maxLength: 50 })}
        />
        {errors?.userHandle && (
          <p className="text-red-500">{errors.userHandle.message}</p>
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
