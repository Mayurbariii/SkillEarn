import AuthLayout from "../../components/Auth/AuthLayout";
import AuthForm from "../../components/Auth/AuthForm";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to continue your SkillEarn journey"
    >
      <AuthForm
        buttonText="Login"
        isRegister={false}
        onSubmit={(data) => console.log("Login:", data)}
        />

    </AuthLayout>
  );
};

export default Login;
