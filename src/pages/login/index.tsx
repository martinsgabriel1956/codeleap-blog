import { useLogin } from "./useLogin"

export function Login(){
  const { errors, handleSubmit, onSubmit, register } = useLogin();

  return (
    <main className="flex items-center justify-center flex-col min-h-screen">
      <div className="max-w-[400px] w-full border border-amber-950 rounded-lg p-4 bg-amber-500/50">
        <h2 className="text-3xl pb-2">Welcome to CodeLeap network!</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <span className="text-lg">Please enter your username</span>
          <div className="w-full">
            <label htmlFor="username" className="sr-only">Username</label>
            <input 
              className="w-full border border-amber-600 py-2 px-4 rounded-lg outline-amber-600 mt-2"
              type="text"
              {...register("username")}
            />
            {errors.username && <span className="text-md mt-1 inline-block text-red-700">{errors.username.message}</span>}
          </div>
          <button
            type="submit"
            title="Enter"
            className="w-full bg-amber-600 p-2 rounded-lg text-lg font-semibold text-white hover:bg-amber-700 cursor-pointer transition-colors delay-75 disabled:hover:bg-amber-700 disabled:pointer-events-none"
            disabled={!!errors.username}
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  )
}
