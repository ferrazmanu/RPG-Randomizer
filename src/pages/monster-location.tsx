import Head from 'next/head';
import { FieldValues, useForm } from 'react-hook-form';

import { Container } from '@/components/Elements/Container';
import { Select } from '@/components/Elements/Select';
import { Label, LabelContainer } from '@/components/Elements/Label';
import * as Table from '@/components/Elements/Table';

import { challangeRating } from '@/data/challange-rating';
import {
  arctic,
  coast,
  hill,
  desert,
  forest,
  mountain,
  swamp,
  lowland,
  underwater,
  underground,
  urban,
} from '@/data/monster-list';

import { ListTypes } from '@/types';
import * as S from '../styles/shared-styles';

export default function MonsterPerLocation() {
  const hookForm = useForm<FieldValues>({
    defaultValues: {
      location: 'arctic',
    },
  });
  const selectedLocation = hookForm.watch('location');

  const thead = [
    {
      id: 0,
      title: 'Monsters',
    },

    {
      id: 1,
      alignment: 'flex-end',
      title: 'Challange Rating (XP)',
    },
  ];

  const selectOptions = [
    {
      id: 0,
      title: 'Arctic',
      value: 'arctic',
    },
    {
      id: 1,
      title: 'Coast',
      value: 'coast',
    },
    {
      id: 2,
      title: 'Hill',
      value: 'hill',
    },
    {
      id: 3,
      title: 'Desert',
      value: 'desert',
    },
    {
      id: 4,
      title: 'Forest',
      value: 'forest',
    },
    {
      id: 5,
      title: 'Mountain',
      value: 'mountain',
    },
    {
      id: 6,
      title: 'Swamp',
      value: 'swamp',
    },
    {
      id: 7,
      title: 'Lowland',
      value: 'lowland',
    },
    {
      id: 8,
      title: 'Underwater',
      value: 'underwater',
    },
    {
      id: 9,
      title: 'Underground',
      value: 'underground',
    },
    {
      id: 10,
      title: 'Urban',
      value: 'urban',
    },
  ];

  const renderList = () => {
    let selectedData: ListTypes[] = [];
    switch (selectedLocation) {
      case 'arctic':
        selectedData = arctic;
        break;
      case 'coast':
        selectedData = coast;
        break;
      case 'hill':
        selectedData = hill;
        break;
      case 'desert':
        selectedData = desert;
        break;
      case 'forest':
        selectedData = forest;
        break;
      case 'mountain':
        selectedData = mountain;
        break;
      case 'swamp':
        selectedData = swamp;
        break;
      case 'lowland':
        selectedData = lowland;
        break;
      case 'underwater':
        selectedData = underwater;
        break;
      case 'underground':
        selectedData = underground;
        break;
      case 'urban':
        selectedData = urban;
        break;
      default:
        selectedData = [];
    }

    return selectedData.map((item) => (
      <Table.Row key={item.rating}>
        <Table.Data>{item.monsters}</Table.Data>
        <Table.Data style={{ justifyContent: 'flex-end' }}>
          {challangeRating.find((challange) => challange.id === item.rating)?.rating}
        </Table.Data>
      </Table.Row>
    ));
  };

  return (
    <>
      <Head>
        <title> Monster Per Location | Dungeon Tools</title>
        <meta name="description" content="Monstro por localização" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>

      <main>
        <Container>
          <LabelContainer>
            <Label htmlFor="location">Choose a Location</Label>
            <Select options={selectOptions} hookForm={hookForm} name={'location'} />
          </LabelContainer>

          <h3>{selectOptions.find((item) => item.value === selectedLocation)?.title} Location</h3>

          <Table.Table marked>
            <Table.Header marked>
              <Table.Row>
                {thead.map((item) => {
                  return (
                    <Table.Data key={item.id} style={{ justifyContent: item.alignment }}>
                      {item.title}
                    </Table.Data>
                  );
                })}
              </Table.Row>
            </Table.Header>

            <Table.Body>{renderList()}</Table.Body>
          </Table.Table>

          <S.Rules>
            <p>Each table was based on the DMG book.</p>
          </S.Rules>
        </Container>
      </main>
    </>
  );
}
