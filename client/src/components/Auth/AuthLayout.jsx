const AuthLayout = ({ title, subtitle, children }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-neutral-200">
          <h1 className="text-2xl font-semibold text-neutral-900 text-center">
            {title}
          </h1>
          <p className="text-sm text-neutral-500 mt-1 mb-6 text-center">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    );
  };
  
  export default AuthLayout;
  