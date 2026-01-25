"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-black/80 p-8 backdrop-blur shadow-xl text-white">
        <h1 className="mb-2 text-center text-2xl font-semibold">
          Daftar Akun
        </h1>

        <p className="mb-8 text-center text-sm text-gray-400">
          Sistem Informasi Pelaporan IT & Helpdesk Internal
        </p>

        <form className="space-y-5">
          {/* Nama Lengkap */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              className="
                w-full rounded-lg border border-white/10
                bg-black/60 px-4 py-2.5 text-sm text-white
                placeholder-gray-500
                focus:border-primary focus:outline-none
                focus:ring-2 focus:ring-primary/40
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="nama@email.com"
              className="
                w-full rounded-lg border border-white/10
                bg-black/60 px-4 py-2.5 text-sm text-white
                placeholder-gray-500
                focus:border-primary focus:outline-none
                focus:ring-2 focus:ring-primary/40
              "
            />
          </div>

          {/* Username */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="
                w-full rounded-lg border border-white/10
                bg-black/60 px-4 py-2.5 text-sm text-white
                placeholder-gray-500
                focus:border-primary focus:outline-none
                focus:ring-2 focus:ring-primary/40
              "
            />
          </div>

          {/* Password */}
          <div>
  <label className="mb-1 block text-sm text-gray-300">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className="
        w-full rounded-lg border border-white/10
        bg-black/60 px-4 py-2.5 pr-14
        text-sm text-white placeholder-gray-500
        focus:border-primary focus:outline-none
        focus:ring-2 focus:ring-primary/40
      "
    />

    <button
      type="button"
      onClick={() => setShowPassword(prev => !prev)}
      className="
        absolute right-3 top-1/2 -translate-y-1/2
        text-xs font-medium text-gray-400
        hover:text-white transition
        z-10
      "
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>
</div>


          {/* Konfirmasi Password */}
          <div>
  <label className="mb-1 block text-sm text-gray-300">
    Konfirmasi Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className="
        w-full rounded-lg border border-white/10
        bg-black/60 px-4 py-2.5 pr-14
        text-sm text-white placeholder-gray-500
        focus:border-primary focus:outline-none
        focus:ring-2 focus:ring-primary/40
      "
    />

    <button
      type="button"
      onClick={() => setShowPassword(prev => !prev)}
      className="
        absolute right-3 top-1/2 -translate-y-1/2
        text-xs font-medium text-gray-400
        hover:text-white transition
        z-10
      "
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>
</div>

          
          {/* Button Daftar */}
          <button
            type="submit"
            className="
              mt-4 w-full rounded-full bg-white py-3
              text-sm font-semibold text-black
              transition hover:-translate-y-0.5 hover:bg-gray-200
            "
          >
            Daftar
          </button>
        </form>

        {/* Info instansi */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Pendaftaran akun hanya untuk pengguna yang berwenang.
          <br />
          Jika mengalami kendala, hubungi Admin IT.
        </p>
      </div>
    </div>
  );
}
