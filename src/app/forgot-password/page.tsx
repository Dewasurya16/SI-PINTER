export default function ForgotPasswordPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 bg-black">
      <div className="w-full max-w-md rounded-xl bg-black/80 p-8 text-white shadow-xl">
        <h1 className="mb-2 text-center text-2xl font-semibold">
          Lupa Password
        </h1>
        <p className="mb-6 text-center text-sm text-gray-400">
          Masukkan email atau username terdaftar
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Email / Username"
            className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-sm"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-white py-3 text-black font-semibold hover:bg-gray-200"
          >
            Kirim OTP
          </button>
        </form>
      </div>
    </div>
  );
}
