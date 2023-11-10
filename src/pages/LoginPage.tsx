import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import twitterL from "../assets/twitterLogo.png";

const schema = yup
  .object()
  .shape({
    userHandle: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function LoginPage() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      userHandle: "bru",
      password: "123",
    },
  });

  return (
    <div>
      <img className="m-auto my-5" src={twitterL} alt="xlogo" />

      <form
        className="flex flex-col gap-2 m-auto p-5 w-[20rem] mt-5 shadow-2xl"
        onSubmit={handleSubmit((d) => console.log(d))}
      >
        <h1 className="text-center text-2xl mb-1 font-bold">
          Login to BruTwitter
        </h1>
        <input {...register("userHandle")} />
        <input {...register("password")} />
        <input
          className="bg-[#007bff] w-[10rem] text-white text-center p-2 rounded-md m-auto"
          type="submit"
        />
      </form>
    </div>
  );
}
