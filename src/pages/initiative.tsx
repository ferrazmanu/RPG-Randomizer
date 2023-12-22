import Head from "next/head";
import { MouseEvent, useEffect, useState } from "react";

import { RandomizerBox } from "@/components/Elements/RandomizerBox";
import { Container } from "@/components/Elements/Container";
import { Input, MaskedInput } from "@/components/Elements/Input";
import * as Table from "@/components/Elements/Table";
import { Button } from "@/components/Elements/Button";
import { ErrorMessage } from "@/components/Elements/ErrorMessage";

interface CharacterProps {
  initiative: number;
  name: string;
  hp: number;
  ac: number;
  [key: string]: number | string;
}

export default function InitiativeTracker() {
  const [charactersList, setCharactersList] = useState<CharacterProps[]>([]);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<CharacterProps>({
    initiative: 0,
    name: "",
    hp: 0,
    ac: 0,
    key: "",
  });

  const updateData = (e: any) => {
    setData({
      ...data,
      key: e.target.name,
      [e.target.name]: e.target.value,
    });
  };

  const inputList = [
    {
      placeholder: "Initiative",
      name: "initiative",
      mask: "9999",
    },
    {
      placeholder: "Name",
      name: "name",
    },
    {
      placeholder: "HP",
      name: "hp",
      mask: "999999",
    },
    {
      placeholder: "AC",
      name: "ac",
      mask: "9999",
    },
  ];

  const handleCharacterEdit = (e: any, index: number, propertyName: string) => {
    const updatedList = charactersList.map((character, i) => {
      if (i === index) {
        return {
          ...character,
          [propertyName]: e.target.value,
        };
      }
      return character;
    });

    const sortedList = [...updatedList].sort(
      (a, b) => b.initiative - a.initiative
    );
    setCharactersList(sortedList);
  };

  const handleSubmit = () => {
    setError("");

    const newCharacter: CharacterProps = {
      initiative: data.initiative || 0,
      name: data.name || "",
      hp: data.hp || 0,
      ac: data.ac || 0,
      key: `${data.name}${data.ac}`,
    };

    if (
      newCharacter.initiative === 0 ||
      newCharacter.ac === 0 ||
      newCharacter.name === ""
    ) {
      setError("Please, add a value before continuing.");
    } else if (
      charactersList.find((character) => character.key === newCharacter.key)
    ) {
      setError("This character is already listed!");
    } else {
      const newList = [...charactersList, newCharacter];
      const sortedList = [...newList].sort(
        (a, b) => b.initiative - a.initiative
      );
      setCharactersList(sortedList);
    }

    setData({ initiative: 0, name: "", hp: 0, ac: 0, key: "" });
  };

  const removeData = (id: string) => {
    const cleanList = charactersList.filter((item) => item.key !== id);

    setCharactersList(cleanList);
    setError("");
  };

  return (
    <>
      <Head>
        <title> Initiative Tracker | RPG Tools</title>
        <meta name="description" content="Rastreador de iniciativa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Container>
          <RandomizerBox>
            <h2>Initiative Tracker</h2>
            <Table.Table>
              <Table.Header>
                <Table.Row>
                  {inputList.map((list) => {
                    return (
                      <Table.Data key={list.placeholder}>
                        {list.placeholder}
                      </Table.Data>
                    );
                  })}
                  <Table.Data minWidth="80px">&nbsp;</Table.Data>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  {inputList.map((input) => {
                    return (
                      <Table.Data key={input.name}>
                        {input.mask ? (
                          <MaskedInput
                            name={input.name}
                            onChange={updateData}
                            placeholder={input.placeholder}
                            value={data[input.name] || ""}
                            mask={input.mask}
                            maskPlaceholder={null}
                          />
                        ) : (
                          <Input
                            name={input.name}
                            onChange={updateData}
                            placeholder={input.placeholder}
                            value={data[input.name] || ""}
                          />
                        )}
                      </Table.Data>
                    );
                  })}
                  <Table.Data minWidth="80px">
                    <Button text="Add" type="submit" onClick={handleSubmit} />
                  </Table.Data>
                </Table.Row>
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <hr style={{ margin: "15px 0" }} />

                {charactersList.map((character, index) => {
                  return (
                    <Table.Row key={character.key}>
                      {inputList.map((input, i) => (
                        <Table.Data key={i}>
                          {input.mask ? (
                            <MaskedInput
                              type="text"
                              name={input.name}
                              onChange={(e) =>
                                handleCharacterEdit(e, index, input.name)
                              }
                              value={character[input.name]}
                              mask={input.mask}
                              maskPlaceholder={null}
                            />
                          ) : (
                            <Input
                              type="text"
                              name={input.name}
                              onChange={(e) =>
                                handleCharacterEdit(e, index, input.name)
                              }
                              value={character[input.name]}
                            />
                          )}
                        </Table.Data>
                      ))}
                      <Table.Data minWidth="80px">
                        <Button
                          text="Remove"
                          type="submit"
                          onClick={() => removeData(`${character.key}`)}
                        />
                      </Table.Data>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Table>
          </RandomizerBox>
        </Container>
      </main>
    </>
  );
}
