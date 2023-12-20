import { rerenderEntireTree } from "../Render";

let state = {

    profileData: {

        posts: [
            { id: 1, message: 'Hi, How are U?', likesCount: '25' },
            { id: 2, message: 'I fine Tnx?', likesCount: '55' },
        ],

        description: [
            {
                id: 1, name: 'Jill', surname: 'Valentine',
            }
        ],
    },

    dialogsData: {

        dialogs: [
            { id: 1, name: 'Robert' },
            { id: 2, name: 'Alex' },
            { id: 3, name: 'Sarah' },
            { id: 4, name: 'Julia' },
            { id: 5, name: 'Richard' },
            { id: 6, name: 'Britney' },
        ],

        messages: [
            { id: 1,
              message: 'Hi', 
              username: 'Robert',
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLpMUVGKD1e77BskkXt4zeuszQniiNNfisQ&usqp=CAU" },
            { id: 2, 
              message: 'How Are U?', 
              username: 'Robert',
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLpMUVGKD1e77BskkXt4zeuszQniiNNfisQ&usqp=CAU" },
            { id: 3, 
              message: 'Tnx I fine, U?', 
              username: 'Jill', 
              img: 'https://vote.dem-alliance.org/wp-content/uploads/2015/10/Pavlovska_sc-600x600.jpg' },
            { id: 4, 
              message: 'U?', 
              username: 'Jill', 
              img: 'https://vote.dem-alliance.org/wp-content/uploads/2015/10/Pavlovska_sc-600x600.jpg' },
            { id: 5, 
              message: 'Tnx I fine too, today I have such a wonderful day :)', 
              username: 'Robert', 
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLpMUVGKD1e77BskkXt4zeuszQniiNNfisQ&usqp=CAU"},
        ],

    },

    navData: {
        sidebar: [
            { id: 1, name: 'Robert', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLpMUVGKD1e77BskkXt4zeuszQniiNNfisQ&usqp=CAU"},
            { id: 2, name: 'Alex', img: "https://wtpartnership.co.nz/wp-content/uploads/2022/05/Alex-Hampshire-1.jpg" },
            { id: 3, name: 'Sarah', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVb7VJqrpml4hbhYTY1EpwdxqDtcsuljUW4A&usqp=CAU" },
            { id: 4, name: 'Julia', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT0F7iHEoGCx1juJNbNMHpqQ-IXouBWVYcQ&usqp=CAU" },
            { id: 5, name: 'Richard', img: "https://dozari.net/img/man-bun-600x600-1.webp" },
            { id: 6, name: 'Britney', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpYYH6OtCjJc-PF7qcwjRdkAK1ZFzJKQkgw&usqp=CAU" },
        ],
        
    }

}

export let addPost = (postMessage) => {

    let newPost =  { 
        id: 3,
        message: postMessage,
        likesCount: '0',
    };

    state.profileData.posts.push(newPost);

    rerenderEntireTree(state);
}

export let addMessage = (PostDialogMessage) => {

    let newMessage = {
        id: 6,
        message: PostDialogMessage,
        username: 'Jill',
        img: "https://vote.dem-alliance.org/wp-content/uploads/2015/10/Pavlovska_sc-600x600.jpg"
    };

    state.dialogsData.messages.push(newMessage);
    
    rerenderEntireTree(state);
    console.log(state)
}


export default state