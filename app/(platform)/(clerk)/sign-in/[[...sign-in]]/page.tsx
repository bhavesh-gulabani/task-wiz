import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <section className='flex min-h-screen w-full items-center justify-center bg-auth-background bg-cover bg-center bg-no-repeat'>
      <SignIn />
    </section>
  );
};
export default SignInPage;
