export default function OtpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm rounded-xl bg-black/80 p-8 text-white">
        <h1 className="text-center text-xl font-semibold mb-6">
          Verifikasi OTP
        </h1>

        <div className="flex justify-center gap-3 mb-6">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              maxLength={1}
              className="h-12 w-10 rounded-md bg-black/60 border border-white/20 text-center text-lg"
            />
          ))}
        </div>

        <button className="w-full rounded-full bg-white py-3 text-black font-semibold">
          Verifikasi
        </button>
      </div>
    </div>
  );
}
