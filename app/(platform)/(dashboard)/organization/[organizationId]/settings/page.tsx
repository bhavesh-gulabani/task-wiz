import { OrganizationProfile } from '@clerk/nextjs';

const SettingsPage = () => {
  return (
    <div className='w-full'>
      <OrganizationProfile
        routing='hash'
        appearance={{
          elements: {
            rootBox: {
              width: '100%',
            },
            cardBox: {
              boxShadow: 'none',
              maxWidth: '100%',
              width: '100%',
              border: '1px solid #e5e5e5',
            },
            navbar: {
              width: '100%',
              maxWidth: '100%',
            },
            card: {
              boxShadow: 'none',
              width: '100%',
            },
            scrollBox: {
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
