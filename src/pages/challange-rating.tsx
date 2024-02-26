import Head from 'next/head';

import { Container } from '@/components/Elements/Container';

import * as Table from '@/components/Elements/Table';
import * as S from '../styles/shared-styles';
import { challangeRating } from '@/data/challange-rating';

export default function MonsterPerLocation() {
  const thead = [
    {
      id: 0,
      title: 'Challange Rating (XP)',
    },
  ];

  return (
    <>
      <Head>
        <title> Challange Rating | Dungeon Tools</title>
        <meta name="description" content="Nível de Desafio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Table.Table marked>
            <Table.Header marked>
              <Table.Row>
                {thead.map((item) => {
                  return <Table.Data key={item.id}>{item.title}</Table.Data>;
                })}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {challangeRating.map((item) => {
                return (
                  <Table.Row key={item.rating}>
                    <Table.Data>{item.rating}</Table.Data>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Table>

          <S.Rules>
            <p>Each table was based on the DMG book.</p>
          </S.Rules>
        </Container>
      </main>
    </>
  );
}
