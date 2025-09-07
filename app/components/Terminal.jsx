"use client";
import { useState } from "react";
import { motion } from "motion/react"

export default function Terminal() {
  const [output, setOutput] = useState([
    "Welcome to Kingshuk's Portfolio Terminal!",
    "Type 'help' to get started."
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();
    let newOutput = [...output, `> ${input}`];

    switch (input.toLowerCase()) {
      case "help":
        newOutput.push("Available commands: food, hello, about, projects, contact, clear");
        break;

        case "hello":
            newOutput.push("Hi,here this is my portfolio's terminal,you can ask your doubt here about this portfolio")
            break;
        case "food":
            newOutput.push("My favourite food item is 'Hydrabadi Biriyani' ")
            break;

      case "about":
        newOutput.push("I am Kingshuk Roy, a Web Developer & Designer from West Bengal, India. Currently i am in 2nd year at Dept. of Printing and Packaging Technology in Jadavpur University");
        break;

      case "projects":
        newOutput.push("Opening latest projects...");
        window.open("https://rking731.github.io/Zomato-Clone/", "_blank"); // opens in new tab
        break;

      case "contact":
        newOutput.push("You can reach me at: rkingshuk731@gmail.com");
        break;

      case "clear":
        newOutput = [];
        break;

      default:
        newOutput.push("Unknown command. Type 'help' to see options.");
    }

    setOutput(newOutput);
    setInput("");
  };

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} id="Terminal" className="bg-red-200 scroll mb-15 text-black lg:w-[60%] w-[80%] mx-auto font-mono p-4 rounded-2xl h-80  max-w-2xl overflow-y-auto shadow-lg">
      {output.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <form onSubmit={handleCommand} className="flex mt-1">
        <span className="mr-2">&gt;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent outline-none text-black flex-1"
        />
      </form>
    </motion.div>
  );
}