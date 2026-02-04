import AuthLayout from "../../components/Auth/AuthLayout";
import AuthForm from "../../components/Auth/AuthForm";

const Register = () => {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start learning skills and earning"
    >
      <AuthForm
        buttonText="Register"
        isRegister={true}
        onSubmit={(data) => console.log("Register:", data)}
        />

    </AuthLayout>
  );
};

export default Register;
