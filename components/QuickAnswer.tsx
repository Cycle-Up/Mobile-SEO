function InfoIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 text-[#005F8A]" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

interface QuickAnswerProps {
  answer: string;
  question?: string;
}

export function QuickAnswer({ answer, question }: QuickAnswerProps) {
  return (
    <div
      className="quick-answer bg-[#F0F9FF] border border-[#BAE6FD] border-l-4 border-l-[#005F8A] rounded-xl px-5 py-4 my-6 shadow-sm"
      itemScope
      itemType="https://schema.org/Question"
      data-speakable="true"
    >
      <p className="flex items-center gap-1.5 text-xs font-semibold text-[#005F8A] mb-2">
        <InfoIcon />
        Kort antwoord
      </p>
      {question && (
        <p className="sr-only" itemProp="name">
          {question}
        </p>
      )}
      <div
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
      >
        <p
          className="text-gray-800 text-sm leading-relaxed"
          itemProp="text"
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
