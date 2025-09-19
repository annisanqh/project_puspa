"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TerimakasihPage() {
  return (
    <main className="min-h-screen bg-[#B8E8DB] font-playpen">
      <header className="bg-white flex items-center px-8 py-3 shadow-md w-full">
        <Image
          src="/logo.png"
          alt="Logo Puspa"
          width={150}
          height={51}
          priority
        />
      </header>

      
      <div className="flex flex-col items-center justify-center text-center mt-32 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold text-2xl md:text-3xl text-[#36315B] mb-4"
        >
          Terimakasih telah mengisi Form !
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#36315B] text-base md:text-lg max-w-xl"
        >
          Kami senang dapat mendukung setiap langkah tumbuh kembang anak Anda.
          Admin akan menghubungi via whatsapp untuk informasi selanjutnya
        </motion.p>
      </div>
    </main>
  );
}
