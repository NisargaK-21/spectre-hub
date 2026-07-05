"use client";

export default function InputField({
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white placeholder:text-zinc-400 focus:border-purple-500 focus:outline-none"
    />
  );
}