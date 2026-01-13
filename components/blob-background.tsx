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
    opacity: number;
}

const blobs: Blob[] = [
    { color: "bg-emerald-300", top: "20%", left: "10%", size: "18rem", opacity: 0.6 },
    { color: "bg-cyan-100", bottom: "40%", right: "10%", size: "20rem", opacity: 0.5 },

    { color: "bg-emerald-100", bottom: "20%", right: "10%", size: "18rem", opacity: 0.6 },
    { color: "bg-emerald-300", top: "10%", right: "15%", size: "24rem",  opacity: 0.4 },
    { color: "bg-cyan-100", bottom: "15%", left: "20%", size: "20rem", opacity: 0.5 },
];

export default function BlobBackground() {

    return (
        <>
            {blobs.map((blob, i) => {
                return (
                    <div
                        key={i}
                        style={{
                            top: blob.top,
                            left: blob.left,
                            bottom: blob.bottom,
                            right: blob.right,
                        }}
                        className={`fixed ${blob.color} opacity-${(blob.opacity)* 100} -z-10 rounded-full blur-2xl`}
                    >
                        <div
                            className="w-full h-full"
                            style={{
                                width: blob.size,
                                height: blob.size,
                            }}
                        />
                    </div>
                );
            })}
            <div className="pointer-events-none fixed inset-0 -z-10 grain" />

        </>
    );
}
