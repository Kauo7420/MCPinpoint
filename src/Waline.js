import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';

init({
  el: '#waline',
  serverURL: 'https://waline-starter.netlify.app/.netlify/functions/comment',
  reaction: [
      'https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_heart_eyes.png',
      'https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_thumbsup.png',
      'https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_zhoumei.png',
      'https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_grievance.png',
      'https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_dizzy_face.png',
      'https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_slap.png',
  ],
  locale: {
      placeholder: "请留言(审核通过后显示)",
      reaction0: "非常有用",
      reaction1: "有帮助",
      reaction2: "一般",
      reaction3: "无帮助",
      reaction4: "看不懂",
      reaction5: "有错误",
      reactionTitle: "本站内容对你有帮助吗？",
      sofa: "还没有人留言哦！快来抢沙发吧~",
      comment: "留言",
  },
  emoji: [
      "https://jsd.akams.cn/gh/walinejs/emojis@1.4.0/bilibili",
      "https://jsd.akams.cn/gh/walinejs/emojis@1.4.0/bmoji",
      'https://jsd.akams.cn/gh/walinejs/emojis@1.4.0/qq',
      'https://jsd.akams.cn/gh/walinejs/emojis@1.4.0/tieba',
      "https://jsd.akams.cn/gh/walinejs/emojis@1.4.0/weibo",
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji',
      'https://jsd.akams.cn/gh/norevi/waline-blobcatemojis@1.0/blobs',
      'https://jsd.akams.cn/gh/walinejs/emojis@1.4.0/alus',
  ],
});
