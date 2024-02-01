import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react'
import React from 'react'
//Boton para cambiar el theme de la pagina
export default function ToggleButton() {

    const {toggleColorMode, colorMode} = useColorMode();

  return (
    <button onClick={toggleColorMode}>{
        colorMode == 'light' ? <SunIcon color="white" w={50} />: <MoonIcon w={50} />
    }
    </button>
  )
}
