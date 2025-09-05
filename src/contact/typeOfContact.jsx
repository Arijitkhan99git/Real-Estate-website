import { Phone } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Video } from 'lucide-react';
import { MessageSquare } from 'lucide-react';

const data=[
    {
        icon: <Phone size={20}></Phone>,
        type:'Call',
        num:'021 123 145 14',
        buttonText:'Call now'
    },
    {
        icon: <MessageCircleMore size={20}></MessageCircleMore>,
        type:'Chat',
        num:'021 123 145 14',
        buttonText:'Chat now'
    },
    {
        icon: <Video size={20}></Video>,
        type:'Video Call',
        num:'021 123 145 14',
        buttonText:'Video call now'
    },
    {
        icon: <MessageSquare size={20}></MessageSquare>,
        type:'Message',
        num:'021 123 145 14',
        buttonText:'Message now'
    },

]

export default data;