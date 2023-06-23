
import {useRef, useState} from "react";
import {Parallax} from "@/components/Parallax";

export default function Home() {

  return (
    <main>
        <Parallax />
        <div className={"text-secondary pl-[10%] pb-[20%]"}>
            <h2 className={"secondary text-6xl"}>
                Lorem
            </h2>
            <p className={"mt-1 w-1/2"}>Lorem ipsum dolor sit amet.</p>
        </div>
    </main>
  )
}
