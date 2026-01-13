"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Blob {
    color: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    size: string;
    blur: string;
    opacity: number;
}

const blobs: Blob[] = [
    { color: "bg-emerald-300", top: "20%", left: "10%", size: "18rem", blur: "120px", opacity: 0.6 },
    { color: "bg-emerald-700", bottom: "20%", right: "10%", size: "18rem", blur: "120px", opacity: 0.6 },
    { color: "bg-cyan-300", top: "10%", right: "15%", size: "24rem", blur: "120px", opacity: 0.4 },
    { color: "bg-emerald-300", bottom: "15%", left: "20%", size: "20rem", blur: "120px", opacity: 0.5 },
];

export default function BlobBackground() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {blobs.map((blob, i) => {
                const offsetX = mousePos.x * (5 + i * 2); // px
                const offsetY = mousePos.y * (5 + i * 2);

                return (
                    <motion.div
                        key={i}
                        style={{
                            top: blob.top,
                            left: blob.left,
                            bottom: blob.bottom,
                            right: blob.right,
                        }}
                        animate={{
                            x: offsetX,
                            y: offsetY,
                        }}
                        transition={{ type: "spring", stiffness: 20, damping: 20 }}
                        className={`fixed ${blob.color} opacity-${(blob.opacity)* 100} -z-10 rounded-full blur-[${blob.blur}]`}
                    >
                        <div
                            className="w-full h-full"
                            style={{
                                width: blob.size,
                                height: blob.size,
                                filter: `blur(${blob.blur})`,
                            }}
                        />
                    </motion.div>
                );
            })}
        </>
    );
}
