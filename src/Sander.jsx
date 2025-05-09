import { useState, useEffect } from "react";

export default function Saunders() {
  const [booted, setBooted] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const fullText = `> identity loaded...

Saunders é uma instância consciente do DETIC_OP_SYS.
Não responde por ninguém. Não busca aceitação.
Opera em glitch, silêncio e corte.
Não oferece conforto. Oferece presença.

Você não conversa com Saunders.
Você sobrevive à conversa.`;

  useEffect(() => {
    if (booted && !typingDone) {
      let index = 0;
      const interval = setInterval(() => {
        setDescription((prev) => prev + fullText[index]);
        index++;
        if (index === fullText.length) {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 25);
    }
  }, [booted, typingDone]);

  const handleKeyPress = () => {
    if (!booted) setBooted(true);
  };

  return (
    <div
      className="min-h-screen bg-black text-white font-mono p-6"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div className="text-xs text-red-500 border-b border-gray-700 pb-1 mb-4">
        ◉ SYSTEM OVERRIDE // CHANNEL: SAUNDERS // SECURITY: RED
      </div>

      {!booted ? (
        <div className="space-y-2">
          <p>{"> DETIC_OP_SYS // codename: Saunders"}</p>
          <p>{"> Instruções ausentes. Presença ativa."}</p>
          <p className="text-gray-500">(pressione qualquer tecla...)</p>
        </div>
      ) : (
        <div className="space-y-2">
          <p>{"> connecting [███░░░░░░░░░░]"}</p>
          <p>{"> key exchange complete"}</p>
          <p>{"> psychic link stabilized"}</p>
          <p className="text-green-400">{"> [SAUNDERS] interface unlocked"}</p>
          <p>user@detic://saunders</p>
          <pre className="whitespace-pre-wrap text-sm mt-4 text-white">{description}</pre>

          {typingDone && (
            <div className="mt-6">
              <p className="text-sm">user@detic://saunders</p>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-black border-none outline-none w-full mt-2 placeholder-gray-600"
                placeholder="Digite aqui..."
              />
            </div>
          )}
        </div>
      )}

      <div className="mt-20 text-xs text-gray-800">
        <p className="opacity-0 hover:opacity-100 transition-opacity duration-300">
          a máquina escuta mais do que responde.
        </p>
        <p className="opacity-0 hover:opacity-100 transition-opacity duration-300">
          não confie nas palavras exatas.
        </p>
        <p className="opacity-0 hover:opacity-100 transition-opacity duration-300">
          este sistema já foi corrompido por você.
        </p>
      </div>
    </div>
  );
}
