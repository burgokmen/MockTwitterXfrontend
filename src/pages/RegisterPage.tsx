import { useForm } from "react-hook-form";
import twitterL from "../assets/twitterLogo.png";
import { useNavigate } from "react-router-dom";
type FormValues = {
  userHandle: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cellular: string;
  birthday: Date;
  location: string;
  profilePicture: string;
  profileWallpaper: string;
};
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    history("/login");
  });
  console.log(errors);
  const history = useNavigate();

  return (
    <div>
      <img className="m-auto mt-5" src={twitterL} alt="xlogo" />
      <form
        className="flex flex-col gap-2 m-auto p-5 w-[20rem] mt-5 shadow-2xl"
        onSubmit={onSubmit}
      >
        <h1 className="text-center text-2xl mb-1 font-bold">
          Create an account
        </h1>
        <input
          className="m-auto "
          type="text"
          placeholder="User Handle"
          {...register("userHandle", { maxLength: 40 })}
        />
        <input
          className="m-auto "
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          className="m-auto "
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input
          className="m-auto "
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="m-auto "
          type="password"
          placeholder="Password"
          {...register("password", { min: 8, maxLength: 150 })}
        />
        <input
          className="m-auto "
          type="tel"
          placeholder="Cellular"
          {...register("cellular", { required: true, min: 10 })}
        />
        <input
          className="m-auto "
          type="text"
          placeholder="Location"
          {...register("location", { maxLength: 30 })}
        />
        <input
          className="m-auto "
          type="url"
          placeholder="Profile Picture"
          {...register("profilePicture")}
        />
        <input
          className="m-auto mb-1"
          type="url"
          placeholder="ProfileWallpaper"
          {...register("profileWallpaper")}
        />
        <div className="m-auto mb-3 ">
          <label className="text-slate-400">Birthday:</label>
          <input
            className="text-slate-400"
            type="date"
            placeholder="Birthday"
            {...register("birthday", { valueAsDate: true })}
          />
        </div>

        <input
          className="bg-[#007bff] w-[10rem] text-white text-center p-2 rounded-md m-auto"
          type="submit"
        />
      </form>
      <p className="mt-5 mr-[80px] text-center">
        <a className="text-[#007bff]" href="/login">
          Click here
        </a>{" "}
        if you need to login...
      </p>
    </div>
  );
}
