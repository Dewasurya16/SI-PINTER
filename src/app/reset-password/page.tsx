export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-xl bg-black/80 p-8 text-white">
        <h1 className="text-center text-2xl font-semibold mb-6">
          Reset Password
        </h1>

        <form className="space-y-4">
          <input
            type="password"
            placeholder="Password Baru"
            className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3"
          />
          <input
            type="password"
            placeholder="Konfirmasi Password"
            className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3"
          />

          <button className="w-full rounded-full bg-white py-3 text-black font-semibold">
            Simpan Password
          </button>
        </form>
      </div>
    </div>
  );
}
