'use client'

import {useEffect, useLayoutEffect, useRef, useState} from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export function Parallax(){
    const [background, setBackground]= useState(20)

    const parallaxRef = useRef(null);
    const mountain3 = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const sun = useRef(null);
    const copy = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            let tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                mountain3.current,
                {
                    y: "-=80",
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: "-=30",
                },
                0
            );
            tl.to(
                mountain1.current,
                {
                    y: "+=50",
                },
                0
            );
            tl.to(
                stars.current,
                {
                    top: 50,
                },
                0
            );
            tl.to(
                cloudsBottom.current,
                {
                    opacity: 0,
                    duration: 0.5
                },
                0
            );
            tl.to(
                cloudsLeft.current,
                {
                    x: "-20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                cloudsRight.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                sun.current,
                {
                    y: "+=210",
                },
                0
            );
            tl.to(
                copy.current,
                {
                    y: "-150%",
                    opacity: 1
                },
                0
            );
            tl.to(
                btn.current,
                {
                    opacity: 1,
                },
                1
            );
        });
        return () => ctx.revert();
    }, []);



    return(
        <div ref={parallaxRef} className={"h-[110vh] w-full relative overflow-hidden"} style={{ background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )` }}>
            <Image ref={sun} width={100} height={100} src="/parallax/sun.svg" alt="" className={"top-[70%] left-[70%] translate-x-[70%] translate-y-[70%] w-[40%] "}/>
            <Image ref={stars} width={100} height={100} className='absolute left-0 top-0 w-full z-0' alt="" src="/parallax/stars.svg" />
            <Image ref={mountain1} width={100} height={100} src="/parallax/mountain-1.svg" alt="" className={"absolute w-full z-3"}/>
            <Image ref={mountain2} width={100} height={100} src="/parallax/mountain-2.svg" alt="" className={"absolute w-full  z-2"}/>
            <Image ref={mountain3} width={100} height={100} src="/parallax/mountain-3.svg" alt="" className={"absolute w-full z-1"}/>
            <Image ref={cloudsBottom} width={100} height={100} className='top-0 w-full' alt="" src="/parallax/cloud-bottom.svg"  />
            <Image ref={cloudsLeft} width={400} height={100}  className='absolute top-0 left-0  z-10 ' alt="" src="/parallax/clouds-left.svg" />
            <Image ref={cloudsRight} width={400} height={400} className='absolute top-0 right-0 z-10 ' alt="" src="/parallax/clouds-right.svg" />
            <div ref={copy} className="absolute opacity-0 bottom-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center align-middle flex-col z-0" >
                <h1 className={"text-[10em]"}>Journey</h1>
                <span ref={btn} className={"opacity-0 bg-secondary text-prime p-1 font-bold rounded-lg"}>Discover more</span>
            </div>
        </div>
    )
}