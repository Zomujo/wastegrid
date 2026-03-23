export default function ContactCTA() {
  return (
    <div
      className="mt-24 rounded-xl p-10 text-center"
      style={{
        background: "linear-gradient(135deg, #112117 0%, #0d1a13 100%)",
        border: "1px solid rgba(29, 201, 98, 0.15)",
      }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white">
        Ready to build Africa&apos;s industrial future?
      </h2>
      <p className="mx-auto mt-3 max-w-2xl leading-relaxed" style={{ color: "#94a3b8" }}>
        We are creating the systems that power industries, support economies,
        and define long-term growth. If that is the work you want to be part of,
        we want to hear from you.
      </p>
      <div className="mt-8 flex justify-center">
        <button
          className="flex h-12 items-center justify-center rounded-lg px-8 font-bold text-white transition-all hover:scale-105"
          style={{ backgroundColor: "#1dc962" }}
        >
          Start a Conversation
        </button>
      </div>
    </div>
  );
}
