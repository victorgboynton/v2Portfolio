"use client";
import React from "react";
import { quote } from "./QuoteBlock";

function QuoteBlock({ children, borderColor, author }: quote) {
  return (
    <div className={`block border-l-2 ${borderColor} p-3 ml-5 my-5`}>
      <q className=" italic">{children}</q>
      <p className="text-[15px] font-robotoSlab float-right">-{author}</p>
    </div>
  );
}
export type quote = {
  children: string;
  borderColor: string;
  author: string;
};
