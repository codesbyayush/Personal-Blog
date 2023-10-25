"use client";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
      <form onSubmit={handleSubmit(onSubmit)} className=" text-xl font-semibold [word-spacing:2px] leading-8">
          Hello! My name is
          <input type="text" placeholder="Name" {...register("Name", {required: true})} className='bg-transparent border-b max-w-min px-4 focus:outline-none text-center'/>
          ans I want to discuss a potential project. You can email me at
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className='bg-transparent border-b max-w-min px-4 focus:outline-none text-center'/>
        or reach out to me on
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
          className='bg-transparent border-b max-w-min px-4 focus:outline-none text-center'/>
        Here are some details about my project:
      <textarea
        type="text"
              placeholder="My project is about..."
              {...register("My project is about", {})}
      className='bg-transparent border-b max-w-min focus:outline-none block min-w-full'/>

      <input type="submit" className="block px-8 border-2 font-bold text-lg py-4 rounded-md my-8 cursor-pointer" value='Send Request'/>
    </form>
  );
}
