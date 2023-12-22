import { Container } from "@/components/Elements/Container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | RPG Tools</title>
        <meta name="description" content="Tools for RPG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>

      <Container>
        <main>
          <h1>RPG Tools!</h1>
        </main>
      </Container>
    </>
  );
}
