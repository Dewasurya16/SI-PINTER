export default function LoginPage() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center px-4"
      style={{
        backgroundImage: "url('/bg-login.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Card Login */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-black/80 p-8 backdrop-blur shadow-xl">
        <h1 className="mb-2 text-center text-2xl font-semibold text-white">
          Login ke Sistem
        </h1>

        <p className="mb-8 text-center text-sm text-gray-400">
          Sistem Informasi Pelaporan IT & Helpdesk Internal
        </p>

        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukkan username"
              className="
                w-full rounded-lg border border-white/10
                bg-black/60 px-4 py-2.5 text-sm text-white
                placeholder-gray-500
                focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="
                w-full rounded-lg border border-white/10
                bg-black/60 px-4 py-2.5 text-sm text-white
                placeholder-gray-500
                focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              mt-4 w-full rounded-full bg-white py-3
              text-sm font-semibold text-black
              transition hover:-translate-y-0.5 hover:bg-gray-200
            "
          >
            Login
          </button>

{/* Lupa password & Daftar */}
<div className="mt-6 flex items-center justify-between text-sm">
  <a
    href="/forgot-password"
    className="text-gray-400 transition hover:text-white"
  >
    Lupa Password?
  </a>

  <a
    href="/register"
    className="font-medium text-primary transition hover:underline"
  >
    Daftar Akun
  </a>
</div>

        </form>
      </div>

      {/* Footer bawah */}
      <div className="absolute bottom-4 left-0 w-full text-center">
        <p className="text-[11px] text-gray-400">
          © {new Date().getFullYear()} Hak Cipta Kejaksaan Agung RI
        </p>
      </div>
    </div>
  );
}
