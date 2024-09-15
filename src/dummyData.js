const requests = [
    { id: 1, timestamp: '7:57:36', method: 'GET', path: '/sample/post/request/',},
    { id: 2, timestamp: '7:57:37', method: 'POST', path: '/sample/get/request?id=ddc5f0ed-60ff-4435-abc5-590fafe4a771&timestamp=1544827965&event=delivered',},
    { id: 3, timestamp: '7:57:39', method: 'GET', path: '/sample/post/request/',},
    { id: 4, timestamp: '7:57:49', method: 'POST', path: '/sample/get/request?id=ddc5f0ed-60ff-4435-abc5-590fafe4a771&timestamp=1544827965&event=delivered',},
    { id: 5, timestamp: '7:57:52', method: 'GET', path: '/sample/post/request/',},
    { id: 6, timestamp: '7:57:52', method: 'GET', path: '/sample/post/request/',},
  ];

const endpoint = 'https://enl5dfc924ll.x.pipedream.net'

export {
    requests,
    endpoint
}