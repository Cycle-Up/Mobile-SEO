interface QuickAnswerProps {
  answer: string;
  question?: string;
}

export function QuickAnswer({ answer, question }: QuickAnswerProps) {
  return (
    <div
      className="quick-answer bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-r-xl px-5 py-4 my-6"
      itemScope
      itemType="https://schema.org/Question"
      data-speakable="true"
    >
      <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1.5">
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
