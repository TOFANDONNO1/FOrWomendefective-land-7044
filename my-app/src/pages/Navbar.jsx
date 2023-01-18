import { Box,  Button,  Drawer,    DrawerCloseButton,  DrawerContent,      DrawerOverlay,  Image,  useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from './logo1.png'
// import {AiOutlineShoppingCart} from "react-icons/fa"
import { IoCartOutline, IoHeartOutline, IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <Box style={{display:'flex',flexDirection:'row'}}>
        <Link to={'/'}> <Image src={logo} style={{width:'100px'}} alt={"LOGO"}/>  </Link>
        
        <Box ref={btnRef}  color={'red'} onClick={onOpen}>
        Our Brand's Partner Brand's
        </Box>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
             </DrawerContent>
        </Drawer>
        <Link to={"userpage"}>  <IoPersonOutline/> </Link>
        <Link >  <IoNotificationsOutline/> </Link>
        <Link to={"whichlistpage"}>  <IoHeartOutline/> </Link>
       <Link to={"cartpage"}>  <IoCartOutline/> </Link>
      

        
    </Box>


  );
};

export default Navbar;

    