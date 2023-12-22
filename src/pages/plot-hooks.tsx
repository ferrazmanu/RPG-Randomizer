import Head from "next/head";
import { useState } from "react";

import { data } from "../data/plot-hooks";

import { RandomizerBox } from "@/components/Elements/RandomizerBox";
import { Container } from "@/components/Elements/Container";

import * as S from "../styles/shared-styles";
import Link from "next/link";
import { Button } from "@/components/Elements/Button";

export default function PlotHooks() {
  const [activePhrase, setActivePhrase] = useState(0);

  const phrases = data;

  const randomPhrase = () => {
    setActivePhrase(Math.floor(Math.random() * phrases.length));
  };

  return (
    <>
      <Head>
        <title> Plot Hooks | RPG Tools</title>
        <meta name="description" content="Randomizador de surto de caos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Container>
          <RandomizerBox>
            <h2>Your plot hook is:</h2>
            <div className="phrase" key={activePhrase}>
              {phrases[activePhrase]}
            </div>
            <Button margin="0 auto" onClick={randomPhrase} text="Change" />
          </RandomizerBox>

          <S.Rules>
            <ul>
              <li>
                <p>
                  This list was posted and created by a reddit user called
                  famoushippopotamus, available at:
                  <Link
                    href={
                      "https://www.reddit.com/r/DnDBehindTheScreen/comments/bwtqod/120_urban_hooks/"
                    }
                    target="_blank"
                  >
                    {" "}
                    link
                  </Link>{" "}
                  on 09/08/2023
                </p>
              </li>
            </ul>
          </S.Rules>
        </Container>
      </main>
    </>
  );
}
