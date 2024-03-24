import React from 'react'
import { Html } from '@react-three/drei'

export const Loader = () => {
    return (
        <Html>
            <div className="absolute left-0 top-0 flex size-full items-center justify-center">
                <div className="size-[10vw] rounded-full">Loading...</div>
            </div>
        </Html>
    )
}
