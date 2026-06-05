const imgVector =
  "https://www.figma.com/api/mcp/asset/21b30f6f-3b7a-43bb-bb12-4f19d55f6a36";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/97f76ac6-6ed6-4706-bf66-408b3a538c7a";
const imgLine1 =
  "https://www.figma.com/api/mcp/asset/d9868a28-5d2c-4df3-8c31-83ddbd0b3980";
const imgLine2 =
  "https://www.figma.com/api/mcp/asset/04145751-dff4-4699-af33-e11898baf784";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-[352px] flex flex-col gap-6">
        <header className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5">
            <img
              src={imgVector}
              alt=""
              className="h-6 w-[23px] shrink-0"
            />
            <span className="font-display text-[13.5px] font-semibold tracking-[-0.27px] text-[#03161c] leading-[1.1]">
              Superhands
            </span>
          </div>
          <button
            type="button"
            className="font-body text-sm font-medium text-[#03161c] leading-[1.44] hover:opacity-70 transition-opacity"
          >
            Log in
          </button>
        </header>

        <div className="flex flex-col gap-0.5">
          <h1 className="font-display text-2xl font-semibold text-[#03161c] leading-[1.1]">
            Join Waitlist
          </h1>
          <p className="font-body text-sm font-medium text-[rgba(3,22,28,0.8)] leading-[1.44]">
            We&apos;re phasing our users, enter your details and we&apos;ll be
            in touch as soon as its your turn.
          </p>
        </div>

        <button
          type="button"
          className="flex h-11 w-full items-center justify-center gap-3 rounded-[14px] border border-[rgba(82,82,84,0.1)] px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <img src={imgLogo} alt="" className="h-5 w-5 shrink-0" />
          <span className="font-body text-sm font-medium text-[#03161c] leading-[1.44]">
            Continue with Google
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px relative">
            <img src={imgLine1} alt="" className="block w-full" />
          </div>
          <span className="font-body text-sm text-[#03161c]">Or</span>
          <div className="flex-1 h-px relative">
            <img src={imgLine1} alt="" className="block w-full" />
          </div>
        </div>

        <form
          className="flex flex-col gap-[21px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-body text-sm font-medium text-[#03161c] leading-[1.44]"
            >
              Your email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              className="h-11 w-full rounded-none border border-[rgba(82,82,84,0.05)] bg-[#f7f7f7] px-3 font-body text-sm text-[#03161c] placeholder:text-[rgba(3,22,28,0.5)] outline-none focus:border-[rgba(82,82,84,0.2)]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-body text-sm font-medium text-[#03161c] leading-[1.44]"
            >
              Create a password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Min 6 characters"
              className="h-11 w-full rounded-none border border-[rgba(82,82,84,0.05)] bg-[#f7f7f7] px-3 font-body text-sm text-[#03161c] placeholder:text-[rgba(3,22,28,0.5)] outline-none focus:border-[rgba(82,82,84,0.2)]"
            />
          </div>

          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center rounded-[14px] border border-[rgba(82,82,84,0.05)] bg-gradient-to-b from-[#c4f2ff] to-[#b2eeff] px-4 py-3 font-body text-sm font-semibold text-[#009eca] leading-[1.44] hover:from-[#b8ecff] hover:to-[#a6e8ff] transition-colors"
          >
            Join the Waitlist
          </button>
        </form>

        <div className="h-px w-full relative">
          <img src={imgLine2} alt="" className="block w-full" />
        </div>

        <p className="font-body text-sm text-[rgba(3,22,28,0.5)] leading-[1.44]">
          By signing up, you agree to our{" "}
          <a href="#" className="underline decoration-solid">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline decoration-solid">
            Privacy Policy
          </a>
        </p>
      </div>
    </main>
  );
}
