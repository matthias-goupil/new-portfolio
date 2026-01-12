"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

export function useHash() {
    const [hash, setHash] = useState("");
    const params = useParams();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHash(window.location.hash);
    }, [params]);

    return hash;
}
