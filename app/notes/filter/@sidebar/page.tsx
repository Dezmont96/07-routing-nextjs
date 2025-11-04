'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './SidebarNotes.module.css';

const tags = ['Work', 'Personal', 'Todo', 'Meeting', 'Shopping'];

export default function SidebarNotes() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link
            href="/notes/filter/all"
            className={`${css.menuLink} ${pathname === '/notes/filter/all' ? css.active : ''}`}
          >
            All notes
          </Link>
        </li>
        {tags.map(tag => {
          const href = `/notes/filter/${tag}`;
          return (
            <li key={tag} className={css.menuItem}>
              <Link
                href={href}
                className={`${css.menuLink} ${pathname === href ? css.active : ''}`}
              >
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}