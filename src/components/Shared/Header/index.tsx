import Link from 'next/link';
import * as S from './styles';
import { menuLinks } from '@/data/menu-links';
import { Container } from '@/components/Elements/Container';

export const Header = () => {
  return (
    <Container>
      <S.Header>
        <ul>
          {menuLinks.map((links) => {
            return (
              <li key={links.id}>
                <Link href={links.slug}>{links.title}</Link>
              </li>
            );
          })}
        </ul>
      </S.Header>
    </Container>
  );
};
