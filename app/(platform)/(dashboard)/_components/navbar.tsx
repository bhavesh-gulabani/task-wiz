import { Plus } from 'lucide-react';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { MobileSidebar } from './mobile-sidebar';

export const Navbar = () => {
  return (
    <nav className='fixed z-50 px-4 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <MobileSidebar />
        <div className='flex items-end gap-x-4'>
          <div className='hidden md:flex'>
            <Logo />
          </div>
          <Button
            size='sm'
            className='rounded-sm hidden md:block h-auto py-1.5 px-2'
            variant='primary'
          >
            Create
          </Button>
          <Button
            size='sm'
            className='rounded-sm block md:hidden'
            variant='primary'
          >
            <Plus className='h-4 w-4' />
          </Button>
        </div>
        <div className='ml-auto flex items-center gap-x-2'>
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl='/organization/:id'
            afterSelectOrganizationUrl='/organization/:id'
            afterLeaveOrganizationUrl='/select-org'
            appearance={{
              elements: {
                rootBox: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};
