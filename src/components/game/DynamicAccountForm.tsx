"use client";

import { Input } from "@/components/ui/Input";

export interface InputFieldSchema {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

export interface DynamicAccountFormProps {
  fields: InputFieldSchema[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
  errors?: Record<string, string>;
}

export function DynamicAccountForm({
  fields,
  values,
  onChange,
  errors = {},
}: DynamicAccountFormProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((f) => (
          <Input
            key={f.name}
            label={f.label}
            placeholder={f.placeholder || `Masukkan ${f.label}`}
            type={f.type || "text"}
            value={values[f.name] || ""}
            onChange={(e) => onChange(f.name, e.target.value)}
            error={errors[f.name]}
          />
        ))}
      </div>
      <p className="text-xs text-slate-400">
        Pastikan User ID dan Server ID sesuai di dalam game sebelum melanjutkan transaksi.
      </p>
    </div>
  );
}
