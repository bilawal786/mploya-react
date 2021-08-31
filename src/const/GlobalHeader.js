global.myPostHeader = function createPostHeader(token) {
      return {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Brearer ' + token,
      };
};