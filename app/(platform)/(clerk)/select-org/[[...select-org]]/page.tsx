import { OrganizationList } from '@clerk/nextjs';

export default function CreateOrganizationPage() {
  return (
    <section className='flex min-h-screen w-full items-center justify-center bg-auth-background bg-cover bg-center bg-no-repeat'>
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl='/organization/:id'
        afterCreateOrganizationUrl='/organization/:id'
      />
    </section>
  );
}
