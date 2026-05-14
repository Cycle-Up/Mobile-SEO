interface QuickAnswerProps {
  answer: string;
}

export function QuickAnswer({ answer }: QuickAnswerProps) {
  return (
    <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-r-xl px-5 py-4 my-6">
      <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1.5">
        Kort antwoord
      </p>
      <p className="text-gray-800 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}
