// datepicker.tsx
"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { updateAssessmentDate } from "@/lib/api/observasiSubmit";

interface DatePickerProps {
  pasien: { id: number; observation_id: string; nama: string };
  initialDate?: string;
  onClose: () => void;
  onUpdate: () => void; // diganti dari onSave
}

export default function DatePicker({ pasien, initialDate, onClose, onUpdate }: DatePickerProps) {
  const [date, setDate] = useState<Date>(initialDate ? new Date(initialDate) : new Date());
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const formattedDate = date.toISOString().split("T")[0];
      const res = await updateAssessmentDate(pasien.observation_id, formattedDate);
      if (res.success) {
        alert(`Tanggal asesmen untuk ${pasien.nama} berhasil diperbarui ✅`);
        onUpdate(); // refresh data
        onClose();
      } else {
        alert("Gagal memperbarui tanggal asesmen ❌");
      }
    } catch {
      alert("Terjadi kesalahan saat menyimpan tanggal asesmen.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[420px]">
        <h2 className="text-lg font-semibold mb-4">Pilih tanggal asesment</h2>
        <p className="text-sm mb-2">
          Nama Pasien: <b>{pasien.nama}</b>
        </p>

        <Calendar
          onChange={(val: any) => setDate(val)}
          value={date}
          locale="id-ID"
          className="rounded-md border border-gray-300 p-2"
        />

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className={`px-4 py-2 rounded bg-[#81B7A9] text-white hover:bg-[#5f9d8f] ${saving ? "opacity-60" : ""}`}
          >
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}
