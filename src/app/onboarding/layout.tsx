import Image from 'next/image';
import { type ReactNode } from 'react';

function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <div className='lg:grid grid-cols-2 h-screen'>
      <div className='p-5 flex flex-col items-center justify-center'>
        <div className='max-w-md'>
          <h1>Let&apos; get you started</h1>
          <p>
            Onboarding a patient involves collecting information to ensure their
            medical care is personalized and effective.
          </p>
        </div>
      </div>
      <div className='hidden lg:block'>
        <Image
          alt=''
          src='/onboarding-desktop-bg.png'
          width={690}
          height={990}
          className=''
        />
      </div>
    </div>
  );
}

export default OnboardingLayout;