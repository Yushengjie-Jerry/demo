//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    tablist: [{ id: 1, text: '正在热映', url: '/v2/movie/in_theaters' },
    { id: 2, text: '即将上映', url: '/v2/movie/new_movies' },
    { id: 3, text: 'TOP250', url: '/v2/movie/top250' }]
  },
  //事件处理函数
  
 
})
