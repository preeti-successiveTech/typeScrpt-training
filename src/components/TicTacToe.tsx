"use client";

import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
interface arrProp {
  id: string;
  item: string;
  status: boolean;
}
export default function TicTac() {
  const [input, setInput] = useState<string>("");
  const [win, setWin] = useState<string>("");
  const computerInput = input === "X" ? "O" : "X";
  const [arr, setArr] = useState<arrProp[]>([
    { id: "0", item: "", status: true },
    { id: "1", item: "", status: true },
    { id: "2", item: "", status: true },
    { id: "3", item: "", status: true },
    { id: "4", item: "", status: true },
    { id: "5", item: "", status: true },
    { id: "6", item: "", status: true },
    { id: "7", item: "", status: true },
    { id: "8", item: "", status: true },
  ]);
  const [turn, setTurn] = useState<string>("user");
  function randomCell(emptyCells: arrProp[]): string | undefined {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex]?.id; // safe access
  }
  function winner(): boolean {
    const list: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < list.length; i++) {
      const [a, b, c] = list[i];
      if (
        arr[a].item != "" &&
        arr[a].item === arr[b].item &&
        arr[a].item === arr[c].item
      ) {
        if (arr[a].item === input) {
          setWin("User");
          alert("You Won");
          return true;
        } else {
          setWin("computer");
          alert("You Lose");
          return true;
        }
      }
    }
    return false;
  }

  useEffect(() => {
    if(input==="")
        return;
    if (winner()) {
      return;
    }
    if (turn === "user") return;
    const emptyCell = arr.filter((cell) => cell.status === true);

    if (emptyCell.length > 0) {
      const t = setTimeout(() => {
        const selectId = randomCell(emptyCell);
        const fillcell = arr.map((data) => {
          if (data.id === selectId && data.status === true) {
            return {
              ...data,
              status: false,
              item: computerInput,
            };
          }
          return data;
        });

        setArr(fillcell);
        setTurn("user");
      }, 500);

      return () => clearTimeout(t);
    }
  }, [arr]);

  function check(idto: string): void {
    if(input==="") return;
    if (turn === "computer") return;
    console.log(idto, "ff");
    const newArr: arrProp[] = arr.map((data) => {
      if (idto === data.id && data.status == true) {
        return {
          ...data,
          status: false,
          item: input,
        };
      }
      return data;
    });
    setArr(newArr);
    setTurn("computer");
  }

  function reset(): void {
    setInput("");
    setTurn("user");
    setWin("");
    setArr(
      arr.map((cell) => ({
        ...cell,
        item: "",
        status: true,
      }))
    );
  }
  const pageCss: React.CSSProperties = {
    textAlign: "center",
    width: 180,
    justifyContent: "center",
    margin: "auto",
  };
  const styleRow: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };
  const styleCol: React.CSSProperties = {
    width: 60,
    height: 60,
    borderRadius: 1,
    border: "solid 2px black",
    textAlign: "center",
    justifyContent: "center",
  };
  const styleButton: React.CSSProperties = {
    width: 30,
    height: 30,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#a5d6a7",
    marginTop: 10,
  };

  return (
    <div style={pageCss}>
      <h1>Hello Gamer!</h1>
      <input
        type="text"
        value={input}
        placeholder="Enter the input "
        onChange={(e) => setInput(e.target.value)}
        style={{ border: "solid 2px black" }}
      />
      <div style={pageCss}>
        <div style={styleRow}>
          <Box sx={styleCol}>
            <button id="0" onClick={() => check("0")} style={styleButton}>
              {arr[0].item}
            </button>
          </Box>
          <Box sx={styleCol}>
            <button id="1" onClick={() => check("1")} style={styleButton}>
              {arr[1].item}
            </button>
          </Box>
          <Box sx={styleCol}>
            <button id="2" onClick={() => check("2")} style={styleButton}>
              {arr[2].item}
            </button>
          </Box>
        </div>
        <div style={styleRow}>
          <Box sx={styleCol}>
            <button id="3" onClick={() => check("3")} style={styleButton}>
              {arr[3].item}
            </button>
          </Box>
          <Box sx={styleCol}>
            <button id="4" onClick={() => check("4")} style={styleButton}>
              {arr[4].item}
            </button>
          </Box>
          <Box sx={styleCol}>
            <button id="5" onClick={() => check("5")} style={styleButton}>
              {arr[5].item}
            </button>
          </Box>
        </div>
        <div style={styleRow}>
          <Box sx={styleCol}>
            <button id="6" onClick={() => check("6")} style={styleButton}>
              {arr[6].item}
            </button>
          </Box>
          <Box sx={styleCol}>
            <button id="7" onClick={() => check("7")} style={styleButton}>
              {arr[7].item}
            </button>
          </Box>
          <Box sx={styleCol}>
            <button id="8" onClick={() => check("8")} style={styleButton}>
              {arr[8].item}
            </button>
          </Box>
        </div>
      </div>
      <Button variant="contained" onClick={reset}>
        Reset
      </Button>
    </div>
  );
}
