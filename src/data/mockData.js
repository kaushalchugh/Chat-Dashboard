export const mockData = {
  user: {
    _id: '6078672b5d00d34288d8e377',
    name: 'John Doe',
    email: 'johndoe@example.com',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
  },
  chats: [
    {
      _id: '6078672b5d00d34288d8e37a',
      users: [
        {
          _id: '6078672b5d00d34288d8e377',
          name: 'John Doe',
          email: 'johndoe@example.com',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
          status: 'online',
        },
        {
          _id: '6078672b5d00d34288d8e379',
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
          status: 'offline',
        },
      ],
      latestMessage: {
        content: 'Hey Jane!',
        timestamp: new Date(),
        user: {
          _id: '6078672b5d00d34288d8e377',
          name: 'John Doe',
          email: 'johndoe@example.com',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
          status: 'online',
        },
        isRead: false,
      },
      messages: [
        {
          text: 'Hey John!',
          timestamp: new Date(),
          sender: 'Jane Doe',
        },
        {
          text: 'Hi Jane!',
          timestamp: new Date(),
          sender: 'John Doe',
        },
      ],
    },
    {
      _id: '6078672b5d00d34288d8e37e',
      users: [
        {
          _id: '6078672b5d00d34288d8e377',
          name: 'John Doe',
          email: 'johndoe@example.com',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
          status: 'online',
        },
        {
          _id: '6078672b5d00d34288d8e378',
          name: 'Jim Smith',
          email: 'jimsmith@example.com',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
          status: 'offline',
        },
        {
          _id: '6078672b5d00d34288d8e379',
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
          status: 'offline',
        },
      ],
      latestMessage: {
        content: 'Hey John!',
        timestamp: new Date(),
        user: {
          _id: '6078672b5d00d34288d8e378',
          name: 'Jim Smith',
          email: 'jimsmith@example.com',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
          status: 'offline',
        },
        isRead: true,
      },
      messages: [
        {
          text: 'Hey John!',
          timestamp: new Date(),
          sender: 'Jim Smith',
        },
        {
          text: 'Hi Jim!',
          timestamp: new Date(),
          sender: 'John Doe',
        },
      ],
    },
  ],
  users: [
    {
      _id: '6078672b5d00d34288d8e377',
      name: 'John Doe',
      email: 'johndoe@example.com',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
      status: 'online',
    },
    {
      _id: '6078672b5d00d34288d8e378',
      name: 'Jim Smith',
      email: 'jimsmith@example.com',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
      status: 'offline',
    },
    {
      _id: '6078672b5d00d34288d8e379',
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
      status: 'offline',
    },
    {
      _id: '6078672b5d00d34288d8e37a',
      name: 'Jake White',
      email: 'jakewhite@example.com',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
      status: 'offline',
    },
    {
     _id: '6078672b5d00d34288d8e37b',
      name: 'Jack Black',
      email: 'jackblack@example.com',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
      status: 'offline',
    },
    {
      _id: '6078672b5d00d34288d8e37c',
      name: 'Jessica Pink',
      email: 'jessicapink@example.com',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png',
      status: 'offline',
    },
  ],
};

export default mockData;
