'use client'
// import React from 'react'
// import {useForm} from 'react-hook-form'
// export default function page() {
//   const {register,handleSubmit,formState} = useForm()
  



//   return (
//     <div>
// <div>
//   <form action="">
//     <label htmlFor="email">email</label>
//     <input type="text" value={email} onClick={handleEmail} />



//     <label htmlFor="password">Password</label>
//     <input type="password" value={password} onClick={handlePassword} />
//   </form>
// </div>





//     </div>
//   )
// }
import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
  firstName: string
  lastName: string
  age: number
}


export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)


  return (
    <div className="rounded-md  bg-purple-500 w-[300px] h-[400px] border border-black my-3 mx-auto">
    <p className="text-center text-lg font-bold">dataForm</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="my-3 p-3 border border-black rounded-md bg-slate-300 mx-3" placeholder="firstname" {...register("firstName", { required: true, maxLength: 20 })} />
      <input className="my-3 p-3 border border-black rounded-md bg-slate-300 mx-3" placeholder="lastname" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input className="my-3 p-3 border border-black rounded-md bg-slate-300 mx-3" placeholder="age" type="number" {...register("age", { min: 18, max: 99 })} />
      <br />
      <input  className="my-3 p-3 border border-black rounded-md bg-slate-00 mx-5 bg-yellow-300" type="submit" />
    </form>
    </div>
  )
}