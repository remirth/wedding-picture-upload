import {type ChildrenProps} from '~/types';

export default function Layout({children}: ChildrenProps) {
  return (
    <section className='col-span-10 col-start-2'>
      <div className='mockup-window border bg-base-300'>
        <div className='mx-auto flex flex-col bg-base-200 py-4 md:px-8'>
          {children}
        </div>
      </div>
    </section>
  );
}
