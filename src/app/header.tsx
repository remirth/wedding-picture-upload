import {type ChildrenProps} from '~/types/generic';

export const Header = ({}: ChildrenProps) => {
  return (
    <div className='navbar bg-secondary p-0'>
      <ul className='grid h-16 w-full grid-cols-3 text-primary'>
        <ListItem title='Galleri' />
        <ListItem title='Ladda upp' />
        <ListItem title='Collage' />
      </ul>
    </div>
  );
};

const ListItem = ({title}: {title: string}) => {
  return (
    <li className='h-full w-full hover:cursor-pointer hover:bg-secondary-focus'>
      <p className='mx-auto flex h-full w-fit place-items-center'>{title}</p>
    </li>
  );
};
