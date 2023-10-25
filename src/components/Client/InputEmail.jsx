"use client";

import { useForm } from "react-hook-form";

export default function InputEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="xyz@gmail.com"
        className="pl-6 pr-2 py-3 text-lg placeholder:dark:text-white/70 text-black placeholder:text-dark/70 dark:text-white dark:bg-black  rounded-l-lg  outline-none max-[370px]:w-36 max-[415px]:w-48"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <div className="bg-white dark:bg-black py-2 text-lg px-2 text-white rounded-r-lg inline-block">
        <input
          type="submit"
          className="px-3 py-1 bg-black dark:bg-white/90 dark:text-black text-lg font-semibold rounded-md cursor-pointer"
        />
      </div>
    </form>
  );
}
