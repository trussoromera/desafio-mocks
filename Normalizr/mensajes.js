import { normalize, schema } from "normalizr";


export const chats = {
    id: 1,
    title: "Vicious Coffee - Chat",
    author: {
        id: 1,
        name: "Veronica",
        lastName: 'Blackheart', 
        age: 19, 
        username: 'veroblackheart1',
        avatar: '../assets/avatar (1).png'
    },
    comments: [
        { 
            id: 1,
            author: {
                id: 2, 
                name: 'Johnny', 
                lastName: 'Orlando', 
                age: 20, 
                username: 'johnny.orlando',
                avatar: '../assets/avatar.png'
            },
            message: "I'm like the water when your ship rolled in that night"
        
        },
        { 
            id: 2,
            author: {
                id: 3, 
                name: 'Sabrina', 
                lastName: 'Carpenter', 
                age: 23, 
                username: 'sabtalkinnonsense',
                avatar: '../assets/avatar.png'
            },
            message: "Rough on the surface but you cut through like a knife"
        },
        { 
            id: 3,
            author: {
                id: 2, 
                name: 'Johnny', 
                lastName: 'Orlando', 
                age: 20, 
                username: 'johnny.orlando',
                avatar: '../assets/avatar.png'
            },
            message: "And if it was an open-shut case"
        },
        { 
            id: 4,
            author: {
                id: 1, 
                name: 'Veronica', 
                lastName: 'Blackheart', 
                age: 19, 
                username: 'johnny.orlando',
                avatar: '../assets/avatar.png'
            },
            message: "I never would've known from that look on your face"
        }
    ]
};

const name = new schema.Entity('name')
const message = new schema.Entity('message')
const userId = new schema.Entity('id')
const author = new schema.Entity('author', {
    id : userId, 
    name : name,
})
const comment = new schema.Entity('comment', {
    message : message,
})
export const postChat = new schema.Entity('post', {
    author : author,
    messages : [comment]
}) 

const normalizedData = normalize(chats, postChat)
console.log(normalizedData, null, '\t');
console.log(`Longitud normalize: ${JSON.stringify(normalizedData).length}`);

export default normalizedData

















//const user = new schema.Entity('users');
//const comment = new schema.Entity('comments', {
//    author: user
//});
//const chat = new schema.Entity('mensajes',{
//    author: user,
//    comments: [comment]
//});

//const normalizeData = normalize(chats, chat);


