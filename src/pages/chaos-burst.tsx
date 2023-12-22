import Head from "next/head";
import { useState } from "react";

import { data } from "../data/chaos-burst";

import { RandomizerBox } from "@/components/Elements/RandomizerBox";
import { Container } from "@/components/Elements/Container";
import { Button } from "@/components/Elements/Button";

import * as S from "@/styles/shared-styles";

export default function ChaosBurst() {
  const [activePhrase, setActivePhrase] = useState(0);

  const phrases = data;

  const randomPhrase = () => {
    setActivePhrase(Math.floor(Math.random() * phrases.length));
  };

  return (
    <>
      <Head>
        <title> Chaos Burst | RPG Tools</title>
        <meta name="description" content="Randomizador de surto de caos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Container>
          <RandomizerBox>
            <h2>Your chaos burst is:</h2>
            <div className="phrase" key={activePhrase}>
              {phrases[activePhrase]}
            </div>
            <Button margin="0 auto" onClick={randomPhrase} text="Change" />
          </RandomizerBox>

          <S.Rules>
            <ul>
              <li>
                <h3>First things first!</h3>
                <p>
                  This list describes 10,000 Chaos Bursts, which may be thought
                  of as eruptions of disorder resulting from poorly controlled
                  magic use. The reader is encouraged to substitute more a
                  mellifluous term in place of ìChaos Burstî if so inclined, but
                  thatís what Iím calling them here.
                </p>
              </li>
              <li>
                <h3>Why do Chaos Bursts happen?</h3>
                <p>
                  Some would suggest that casting a spell is analogous to going
                  to a faucet for a drink of water. A conventional mage is like
                  a normal person. He holds his glass beneath the spigot, turns
                  on the tap, fills his glass to the desired level, and turns
                  off the tap. Simple, efficient, and orderly. However, the wild
                  mage doesn&apos;t work that way. Instead, he smashes the
                  spigot with a hammer, tries to catch as much water as he wants
                  in his glass, and then tries to reseal the ruptured faucet.
                  Complicated, inefficient, and chaotic. And very likely to get
                  the wild mage soaked in the process. So it is with magic.
                  Instead of opening a precise channel for magical energy, the
                  wild mage tears a gaping hole in reality and hopes to get a
                  particular effect. If he can reseal the hole, great. If not,
                  the result is a Chaos Burst.
                </p>
              </li>
              <li>
                <h3>What happened to the spell I tried to cast?</h3>
                <p>
                  In the previous edition I suggested that the intended spell be
                  allowed to function unless directly contradicted by the Burst.
                  I now feel this approach to be flawed and propose an
                  alternative: the chance that a spell succeeds despite a Burst
                  is equal to 10% per caster level minus 5% per level of the
                  spell. Thus a 5th level mage who triggers a Burst when casting
                  fireball has a 35% (that is, (5 x 10) - (3 x 5)) chance to
                  succeed. Otherwise, the spell fails and is lost from memory.
                  Feel free to devise similar methods as you see fit.
                </p>
              </li>
              <li>
                <h3>Can conventional mages cause Chaos Bursts?</h3>
                <p>
                  Sure! In addition to Wild Magic regions, normal mages can
                  cause Bursts if they are disrupted during the casting of a
                  normal spell. Though unlikely at low levels, higher-power
                  spells can wreak havoc if not properly cast. To represent
                  this, consider that a miscast spell has a percent chance equal
                  to the square of one plus its level to cause a Burst. That is,
                  a 1st level spell has a 4% (1+1)² chance, but a 9th level
                  spell has a 100% (9+1)² chance. This can be modified by the
                  mageís level or some similar value, as determined by the GM.
                </p>
              </li>
              <li>
                <h3>
                  The description didn&apos;t give a duration. How long does the
                  effect last?
                </h3>
                <p>
                  In general, if no duration is specified, then a Burst should
                  be considered permanent until dispelled. Alternatively, it may
                  be appropriate for a Burst to persist for as long as the
                  intended spell would have done, or one round per caster
                  levelówhichever is greater. A third possibility is to roll
                  dice to determine the Burstís duration in turns, hours, days,
                  weeks, or whatever. Yet another option is to assume that the
                  Burst will last until some apparently random condition is met,
                  (a brief list of possible conditions is provided at the end of
                  this document). However, if a Burst has an explicit duration,
                  then it should be assumed that nothing short of divine
                  intervention or a full Wish can cancel the effect before that
                  time. Similarly, if a Burst has an instantaneous duration but
                  a permanent effect, such as 1d10 of the targetís fingers
                  vanishing, then the effect can&apos;t be Dispelled per se; the
                  target might be Healed, but there is no lingering magical
                  effect to Dispel, so other remedies must be sought. As in the
                  previous edition, any effort to dispel a Burst should be
                  considered at least as difficult as an attempt to dispel magic
                  cast by a mage twice the level of the caster who triggered the
                  Burst. Also, it must be noted that many Bursts produce a
                  beneficial effect in exchange for a heavy price; if the price
                  is negated, then the benefit should also be negated. For
                  example, if the caster becomes immune to disease by cutting
                  off his thumbs, then he should lose that immunity if his
                  thumbs are restored
                </p>
              </li>

              <li>
                <h3>What about Bursts that just don&apos;t make sense?</h3>
                <p>
                  Effects with invisible or inappropriate results should be kept
                  secret by the GM (at least from the characters) to preserve
                  the mystery and danger of wild magic. If a fish has its feet
                  enlarged or an aerial servant has half of its body turned
                  invisible, the players should be told that nothing seems to
                  happen. Such a statement could as easily mean a red dragon is
                  now stalking the party but is not yet nearby. Likewise, a
                  delayed effect should not be revealed until it occurs; if the
                  caster is to turn into a duck under the next full moon, let
                  him find out when the time comes.
                </p>
              </li>

              <li>
                <h3>LEGAL DISCLAIMER STUFF</h3>
                <p>
                  This is a work by the Net Libram of Random Magical Effects
                  v2.00 (copyright by Orrex) and by the Tome of Magic,
                  (copyright 1991 by TSR). No challenge to the status of these
                  or any other copyrights is intended or implied.
                </p>
              </li>
            </ul>
          </S.Rules>
        </Container>
      </main>
    </>
  );
}
