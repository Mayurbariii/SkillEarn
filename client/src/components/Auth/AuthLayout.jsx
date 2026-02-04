const AuthLayout = ({ title, subtitle, children }) => {
    return (
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Branding Section */}
        <div className="hidden md:flex flex-col justify-center px-16 bg-neutral-900 text-white">
          <h1 className="text-4xl font-semibold leading-tight">
            SkillEarn
          </h1>
          <p className="mt-4 text-neutral-300 text-lg">
            Learn skills. Prove your ability. Earn real opportunities.
          </p>
        </div>
  
        {/* Right Form Section */}
        <div className="flex items-center justify-center bg-neutral-100 px-6">
          <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-neutral-900">
              {title}
            </h2>
            <p className="text-sm text-neutral-500 mt-1 mb-6">
              {subtitle}
            </p>
            {children}
          </div>
        </div>
  
      </div>
    );
  };
  
  export default AuthLayout;
  