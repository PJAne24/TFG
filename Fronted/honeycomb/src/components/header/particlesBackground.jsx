import React, { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesConfid from './particles-config.js'

const particlesBackground = () =>{

    const particlesInit = useCallback((engine) =>{
        loadFull(engine)
    }, [])

    return(
        <>
        <Particles
        options={particlesConfid}
        init={particlesInit}
        />
        </>
    )

}

export default particlesBackground