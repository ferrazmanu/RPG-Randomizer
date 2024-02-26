import { Container } from '@/components/Elements/Container';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dungeon Tools</title>
        <meta name="description" content="Tools for RPG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>

      <Container>
        <main>
          <div className="presentation">
            <h1>Dungeon Tools!</h1>
            <h3>A few Dungeons and Dragons based tools that you can use in your games!</h3>
          </div>
        </main>
      </Container>
    </>
  );
}
