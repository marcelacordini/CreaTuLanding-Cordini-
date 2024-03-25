import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Heading, Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react'
import { HiChevronDown } from "react-icons/hi2";
import {
    
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Heading>Tienda de Cafe</Heading>
        <Menu>
        <MenuButton as={Button} rightIcon={<HiChevronDown />}>
            Acciones
        </MenuButton>
            <MenuList>
                <MenuItem>Seleccionar Cafe</MenuItem>
                <MenuItem>Descprición</MenuItem>
                <MenuItem>Ingredientes</MenuItem>
                <MenuItem>Combos</MenuItem>
            x</MenuList>
        </Menu>
        <CartWidget />
    </div>
  )
}

export default NavBar