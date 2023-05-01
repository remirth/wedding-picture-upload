import {type ChildrenProps} from '~/types/generic';

export const Main = ({children}: ChildrenProps) => {
  return (
    <main className='static top-16 grid w-full grid-cols-12 gap-0'>
      {children}
    </main>
  );
};
