import { Container } from "@/components/Elements/Container";
import { Header } from "@/components/Shared/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | RPG Randomizer</title>
        <meta name="description" content="Randomizador de atividades de RPG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container>
        <main>
          <h1>RPG Randomizer!</h1>
        </main>
      </Container>
    </>
  );
}
