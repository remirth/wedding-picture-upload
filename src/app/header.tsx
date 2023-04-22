'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {type ChildrenProps} from '~/types/generic';

export const Header = () => {
  return (
    <div className='navbar menu sticky z-50 bg-secondary p-0'>
      <ul className='grid h-16 w-full grid-cols-3'>
        <ListItem title='Galleri' to='/gallery' />
        <ListItem title='Ladda upp' to='/upload' />
        <ListItem title='Collage' to='/collage' />
      </ul>
    </div>
  );
};

type ListItemProps = {
  title: string;
  to: string;
};

const ListItemClasses = {
  true: 'bg-secondary-focus border-primary text-primary',
  false: 'hover:bg-secondary-focus border-secondary-focus',
} as const satisfies Record<'true' | 'false', string>;

const ListItem = ({title, to}: ListItemProps) => {
  const isSelected = !!usePathname()?.startsWith(to);

  return (
    <li
      className={`custom-fade h-full w-full border-b-4 border-solid ${
        ListItemClasses[String(isSelected) as 'true' | 'false']
      }`}
    >
      <NavLink to={to} isSelected={isSelected}>
        <p className='mx-auto flex h-full w-fit place-items-center'>{title}</p>
      </NavLink>
    </li>
  );
};

const NavLink = ({
  to,
  isSelected,
  children,
}: {to: string; isSelected: boolean} & ChildrenProps) => {
  if (isSelected) return <>{children}</>;

  return (
    <Link className='h-full w-full p-0' href={to}>
      {children}
    </Link>
  );
};
