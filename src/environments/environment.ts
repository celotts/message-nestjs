// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
