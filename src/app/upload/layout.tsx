import {type ChildrenProps} from '~/types/generic';

export default function Layout({children}: ChildrenProps) {
  return (
    <section className='col-span-10 col-start-2 mt-20 sm:col-span-8 sm:col-start-3 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5'>
      <div className='mockup-window border bg-base-300'>
        <div className='mx-auto flex flex-col bg-base-200 px-4 md:px-8'>
          {children}
        </div>
      </div>
    </section>
  );
}
