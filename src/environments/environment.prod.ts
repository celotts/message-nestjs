export const environment = {
  production: true,
  qa: true,
  csim: '',
  conextoData: '',


  // Basse de datos

  urlBaseDato: 'localhost:3000/',


  service: {
    getallMessage: {
      public: false,
      nameservice: 'getallMessage',
      endpoint: 'mensajes'
    },
    newMessage: {
      public: false,
      nameservice: 'newMessage',
      endpoint: 'mensajes'
    },
    editMessage: {
      public: false,
      nameservice: 'newMessage',
      endpoint: 'mensajes'
    },
    deleteMessage: {
      public: false,
      nameservice: 'newMessage',
      endpoint: 'mensajes'
    }
  }

};
