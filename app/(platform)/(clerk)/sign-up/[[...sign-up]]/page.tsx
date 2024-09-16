import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <section className='flex min-h-screen w-full items-center justify-center bg-auth-background bg-cover bg-center bg-no-repeat'>
      <SignUp />
    </section>
  );
};
export default SignUpPage;
