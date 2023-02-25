import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGooglePlusG, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGooglePlusG></FaGooglePlusG> Login with Gmail</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>

                <div className='mt-2'>
                    <h5>Find us on </h5>
                    <ListGroup>
                        <ListGroup.Item><FaFacebook />Facebook</ListGroup.Item>
                        <ListGroup.Item><FaWhatsapp />WhatsApp</ListGroup.Item>
                        <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                        <ListGroup.Item><FaTwitch></FaTwitch>Twitch</ListGroup.Item>

                    </ListGroup>
                </div>

            </ButtonGroup>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;