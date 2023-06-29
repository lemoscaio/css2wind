"use client";
import { Arrow, Zap } from "@/icons";
import { useEffect, useState } from "react";

export const cssProperties = {
  "display: flex": "flex",
  "flex-direction: column": "flex-col",
  "padding: 16px": "p-4",
  "padding-inline: 16px": "px-4",
  "margin: 16px": "m-4",
  "margin-inline: 16px": "mx-4",
};

function getRandomKey(obj: any) {
  let keys = Object.keys(obj);
  let randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

export default function PlayPage() {
  const [attempt, setAttempt] = useState<string>("");
  const [cssProperty, setCssProperty] = useState<string>();
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [incorrect, setIncorrect] = useState<boolean | null>(null);

  const notSubmitted = correct === null && incorrect === null;

  useEffect(() => {
    setCssProperty(getRandomKey(cssProperties));
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const attempt = event.currentTarget.value;
    setAttempt(attempt);
  };

  const evaluateTranslation = (attempt: string) => {
    if (!attempt) {
      return;
    }

    if (attempt === cssProperties[cssProperty]) {
      setCorrect(true);
      setIncorrect(false);
      return;
    }

    setCorrect(false);
    setIncorrect(true);
    return;
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    translation: string
  ) => {
    if (event.key == " " || event.code == "Space") {
      event.preventDefault();
      evaluateTranslation(translation);
    }
  };

  return (
    <main className="flex flex-col justify-center divide-y-2 divide-zinc-800 text-center">
      <section
        id="translate-ongoing"
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 py-[268px]"
      >
        <div className="flex items-center gap-4">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-medium">Tip: </span>While the user is
            translating
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            .class &#123;
            <span
              className={`${
                notSubmitted && "border border-berryBlue text-berryBlue"
              } ${correct && "border border-greenGo text-greenGo"}
              ${
                incorrect && "border border-alertRed text-alertRed"
              } bg-transparent p-5 text-xl`}
            >
              {cssProperty}
            </span>
            &#125;
          </div>
          <Arrow className="mx-8 fill-zinc-50" />
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            className=&#34;
            <input
              value={attempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, attempt)}
              className={`${
                notSubmitted && "border border-zinc-50 text-zinc-50"
              } ${correct && "border border-greenGo text-greenGo"}
              ${
                incorrect && "border border-alertRed text-alertRed"
              } bg-transparent p-5 text-xl focus:outline-none`}
            />
            &#34;
          </div>
        </div>
        <p>{attempt}</p>
        <p>{`correct: ${correct}`}</p>
        <p>{`incorrect: ${incorrect}`}</p>
        <p>{`notSubmitted: ${notSubmitted}`}</p>
        <p>{`cssProperty: ${cssProperty}`}</p>
      </section>
    </main>
  );
}
