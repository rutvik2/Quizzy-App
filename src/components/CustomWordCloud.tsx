"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";
type Props = {}

const data = [
    {
        text: "Hey",
        value: 5
    },
    {
        text: "Yo",
        value: 8
    },
    {
        text: "Dog",
        value: 2
    },
    {
        text: "JOHN CENA",
        value: 8
    },
    {
        text: "triple h ",
        value: 10
    },
    {
        text: "p",
        value: 1
    },
];

const fontSizeMapper = (word: { value: number }) => {
    return Math.log2(word.value) * 5 + 16;
  };

const CustomWordCloud = (props: Props) => {
    const theme = useTheme();
  const router = useRouter();
  return (
    
    <>
    <D3WordCloud
      height={550}
      data={data}
      font="Times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      
      fill={theme.theme == "dark" ? "white" : "black"}
    />
  </>
  )
}

export default CustomWordCloud