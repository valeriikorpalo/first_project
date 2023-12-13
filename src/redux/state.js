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

        avatar: [
            {}
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
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How Are U?' },
            { id: 3, message: 'Tnx I fine, U?' },
            { id: 4, message: 'U?'},
            { id: 5, message: 'Tnx I fine too, today I have such a wonderful day :)'},
        ],
    },

    navData: {
        sidebar: [
            { id: 1, name: 'Robert', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLpMUVGKD1e77BskkXt4zeuszQniiNNfisQ&usqp=CAU"},
            { id: 2, name: 'Alex', img: "https://wtpartnership.co.nz/wp-content/uploads/2022/05/Alex-Hampshire-1.jpg" },
            { id: 3, name: 'Sarah', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVb7VJqrpml4hbhYTY1EpwdxqDtcsuljUW4A&usqp=CAU" },
        ],
        
    }

}



export default state