import { useForm } from "react-hook-form";
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
  profileWalpaper: string;
};
export default function RegisterFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log(errors);

  return (
    <form
      className="flex flex-col m-auto border-8 p-5 w-[20rem]"
      onSubmit={onSubmit}
    >
      <input
        className="border-2 border-grey-500 "
        type="text"
        placeholder="User Handle"
        {...register("userHandle", { maxLength: 40 })}
      />
      <input
        className="border-2 border-grey-500 "
        type="text"
        placeholder="First name"
        {...register("firstName", { required: true, maxLength: 80 })}
      />
      <input
        className="border-2 border-grey-500 "
        type="text"
        placeholder="Last name"
        {...register("lastName", { required: true, maxLength: 100 })}
      />
      <input
        className="border-2 border-grey-500 "
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className="border-2 border-grey-500 "
        type="password"
        placeholder="Password"
        {...register("password", { min: 8, maxLength: 150 })}
      />
      <input
        className="border-2 border-grey-500 "
        type="tel"
        placeholder="Cellular"
        {...register("cellular", { required: true, min: 10 })}
      />
      <input
        className="border-2 border-grey-500 "
        type="datetime"
        placeholder="Birthday"
        {...register("birthday", { valueAsDate: true })}
      />
      <input
        className="border-2 border-grey-500 "
        type="text"
        placeholder="Location"
        {...register("location", { maxLength: 30 })}
      />
      <input
        className="border-2 border-grey-500 "
        type="url"
        placeholder="Profile Picture"
        {...register("profilePicture")}
      />
      <input
        className="mb-5 border-2 border-grey-500 "
        type="url"
        placeholder="ProfileWalpaper"
        {...register("profileWalpaper")}
      />

      <input
        className="bg-[#007bff] w-[10rem] text-white text-center p-2 rounded-md m-auto"
        type="submit"
      />
    </form>
  );
}
