import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-black text-white"
      style={{
        backgroundImage: "url('/bg-login.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay agar teks jelas */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex min-h-screen items-center px-8">
        <div className="space-y-8 max-w-3xl">
          <Image
          src="/logo.png"
          alt="Kejaksaan logo"
          width={87}
          height={20}
          priority
        />
          
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Sistem Informasi
            <span className="block text-primary">
              Pelaporan IT & Helpdesk Internal
            </span>
          </h1>

          <p className="text-gray-300">
            Platform internal untuk pelaporan gangguan IT, permintaan bantuan,
            serta monitoring penanganan melalui tiket secara terpusat dan real-time.
          </p>

          <a
            href="/login"
            className="
              inline-flex h-12 items-center justify-center
              rounded-full px-8
              bg-white text-black font-bold
              shadow-lg transition
              hover:-translate-y-0.5 hover:bg-gray-200
            "
          >
            Login ke Sistem
          </a>
        </div>
        <div className="absolute bottom-4 left-0 w-full text-center">
        <p className="text-[11px] text-gray-400">
          © {new Date().getFullYear()} Hak Cipta Kejaksaan Agung RI
        </p>
      </div>

      </div>
    </main>
  );
}
