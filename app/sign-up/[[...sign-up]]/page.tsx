import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] flex items-center justify-center p-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] animate-gradient" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
            Ghost-Tears
          </h1>
          <p className="text-[#888888] text-lg">Begin your journey</p>
        </div>
        <div className="bg-[#111111]/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/[0.08]">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-white text-black hover:bg-white/90 text-sm normal-case font-medium",
                card: "bg-transparent shadow-none",
                headerTitle: "text-white text-2xl font-bold tracking-tight",
                headerSubtitle: "text-[#888888]",
                socialButtonsBlockButton:
                  "bg-[#1A1A1A] hover:bg-[#222222] text-white border-white/[0.08]",
                formFieldLabel: "text-[#888888]",
                formFieldInput:
                  "bg-[#1A1A1A] border-white/[0.08] text-white placeholder-[#666666] focus:border-white/20",
                footerActionLink: "text-white hover:text-white/80",
                formFieldInputShowPasswordButton:
                  "text-[#888888] hover:text-white",
                identityPreviewEditButton: "text-white hover:text-white/80",
                formFieldAction: "text-white hover:text-white/80",
                footerAction: "text-[#888888]",
                formFieldWarningText: "text-[#FFB86C]",
                formFieldSuccessText: "text-[#50FA7B]",
                alertText: "text-[#888888]",
                alertIcon: "text-[#888888]",
                dividerLine: "bg-white/[0.08]",
                dividerText: "text-[#888888]",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
