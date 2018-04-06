/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

const __RES__ = JSON.parse(JSON.stringify(window.__RES__))

const articles = __RES__.contentsSortedByTime.slice(0, 6).map(art => {
  art = __RES__.contents[art]

  return {
    title: art.title,
    thumb: art.desc.slice(0, 200),
    url: `https://blog.ijason.cc/article/${art.name}`,
    time: art.mtime
  }
})

const base = {
  title: ' 大鱼吃小鱼@ 的简历 ',
  name: '易东英',
  shortDescription: '大四学生，前端工程师进阶中...',
  description: '大二开打印工作室，为满足客户需求，接触前端。大三开始系统性的学习前端知识，做过移动端应用、小程序项目，也开发过pc端项目，目前在信盛通讯的研发部做前端开发工作。',
  infomations: [{
    icon: 'https://cdn.ijason.cc/static/svgs/info/birthday.svg',
    key: '生日',
    value: '1995.12.22'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/education.svg',
    key: '教育经历',
    value: '江西农业大学 · 计算机科学与技术'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/nowCity.svg',
    key: '居住地',
    value: '广东 · 广州'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/email.svg',
    key: '邮箱',
    value: 'lyidongy@gmail.com'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/phone.svg',
    key: '手机号',
    value: '+86 15070985787'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/company.svg',
    key: '公司',
    value: '信盛通讯·广州 '
  }],
  skills: [{
    value: 'HTML',
    logo: 'https://cdn.ijason.cc/static/images/logos/html.png'
  }, {
    value: 'CSS',
    logo: 'https://cdn.ijason.cc/static/images/logos/css.png'
  }, {
    value: 'JavaScript',
    logo: 'https://cdn.ijason.cc/static/images/logos/javascript.png',
    style: {
      background: 'linear-gradient(to bottom, #ffeb0e , #efdd1b)',
      'border-color': '#ffeb0e'
    }
  }, {
    value: 'Node.js',
    logo: 'https://cdn.ijason.cc/static/images/logos/nodejs.png',
    style: {
      background: 'linear-gradient(to bottom, #8ccf00 , #80bd01)',
      'border-color': '#8ccf00'
    }
  }, {
    value: 'react',
    logo: '../../static/images/skills/react.png',
    style: {
      background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
      'border-color': '#8093d1'
    }
  }, {
    value: 'VUE',
    logo: '../../static/images/skills/VUE.png'
  }, {
    value: 'Photoshop',
    logo: 'https://cdn.ijason.cc/static/images/logos/photoshop.png',
    style: {
      background: '#001d26',
      border: '5px solid #00c8ff'
    }
  }],
  projects: [{
    image: 'https://xiaoyu7.oss-cn-beijing.aliyuncs.com/operate.png?Expires=1523088295&OSSAccessKeyId=TMP.AQE7a85YSz8yzDYIt6K4pdBrVuqehW1Vv0_JdU3YMsO4Iho_ne8KFXzdoRjbAAAwLAIURgusrA1zS2EIBnKDTSFofYqCeocCFEI23kb2yCuqzcT15TinlOIzCDUj&Signature=Jaql08fi5H77EQjv3L7sWXzLc0A%3D',
    desc: ' 这是一个出租空间的运营管理后台系统，微信端和选址端的数据可以在这里进行管理，前端使用dva-cli脚手架搭建项目，配合react全家桶和antd-design进行开发',
    url: 'http://operate.renrencell.com/'
    // qrcode: 'https://cdn.ijason.cc/static/images/projects/goszu_qrcode.png'
  }, {
    image: 'https://xiaoyu7.oss-cn-beijing.aliyuncs.com/hackManager.png?Expires=1523088220&OSSAccessKeyId=TMP.AQE7a85YSz8yzDYIt6K4pdBrVuqehW1Vv0_JdU3YMsO4Iho_ne8KFXzdoRjbAAAwLAIURgusrA1zS2EIBnKDTSFofYqCeocCFEI23kb2yCuqzcT15TinlOIzCDUj&Signature=fTZbRoaJMm%2FVeES8OlRUg6ZbiyI%3D',
    desc: '这个项目是一个静态页面后台管理系统，前台页面需要显示的资源在后台都可以管理， 采用的是前后端分离的开发模式，前端采用vue2.0全家桶，后端采用nodeJS + mongoDB，使用express框架搭建服务器。',
    url: 'https://github.com/yidongying/hack'
    // qrcode: 'https://cdn.ijason.cc/static/images/projects/powerusage_qrcode.png'
  }, {
    image: 'https://xiaoyu7.oss-cn-beijing.aliyuncs.com/merge_order.png?Expires=1523088353&OSSAccessKeyId=TMP.AQE7a85YSz8yzDYIt6K4pdBrVuqehW1Vv0_JdU3YMsO4Iho_ne8KFXzdoRjbAAAwLAIURgusrA1zS2EIBnKDTSFofYqCeocCFEI23kb2yCuqzcT15TinlOIzCDUj&Signature=cOfQu6HFtD%2FjNW9nob1U%2BA1GwuQ%3D',
    desc: '用vue-cli实现的移动端的单页应用，移动端适配采用的是阿里高清方案，布局采用rem为单位，主要技术采用vue2.0全家桶+webapck+axios+express，数据用mock模拟，实现了基本的登录注册、添加订单、结算订单等',
    url: 'https://github.com/yidongying/vue-elm-spa'
    // qrcode: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp_qrcode.png'
  }],
  projectRefer: '在我的 Github 查看更多项目',
  designs: {
    jingmei: {
      background: `#859398`,
      mainImage: 'https://cdn.ijason.cc/static/images/designs/mockup_jingmei.png',
      title: '静魅',
      subTitle: '魅族 FlymeOS 主题',
      desc: '这是 2014 年我参加魅族主题大赛的参赛作品，设计风格采用了无棱角图标，搭配饱和度较低的配色，与山水背景衬托出一种静和清爽的感觉。',
      link: 'http://www.ui.cn/detail/26910.html',
      linkRefer: '去 ui.cn 查看详情',
      posi: 'left'
    },
    mi4Mockup: {
      background: '#222',
      mainImage: 'https://cdn.ijason.cc/static/images/designs/mockup_mi4.png',
      title: '小米 4 模型',
      subTitle: '手机展示模型 Psd',
      desc: '临摹小米官网的小米手机4模型。全矢量绘制，屏幕部分采用智能对象，可嵌入展示图片。',
      link: 'http://www.ui.cn/detail/21758.html',
      linkRefer: '去 ui.cn 查看详情',
      posi: 'left'
    },
    logos: {
      background: '#F8F8F8',
      mainImage: 'https://cdn.ijason.cc/static/images/designs/logos.png',
      title: 'LOGO',
      subTitle: '',
      desc: '为一些公众号的和网站所设计的Logo',
      link: '',
      linkRefer: '',
      posi: 'left'
    }
  },
  articles
}

const en = {
  title: `Jason's resume`,
  name: 'Jason Chen',
  shortDescription: 'A student, front-end developer...',
  description: `I started learning front-end development and participating in development and maintenance of a number of WeChat public accounts in school when I was a freshman at university. At the same time, I began to follow the open source community and the front-end ecosystem closely. Now work in Tencent as trainee.`,
  infomations: [{
    icon: 'https://cdn.ijason.cc/static/svgs/info/birthday.svg',
    key: 'Birthday',
    value: '1996.2.11'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/education.svg',
    key: 'Education',
    value: 'CIE · SZU'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/nowCity.svg',
    key: 'Live in',
    value: 'Shenzhen, Guangdong'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/email.svg',
    key: 'Email',
    value: 'jason@iszu.cn'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/phone.svg',
    key: 'Phone Number',
    value: '+86 13128931074'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/company.svg',
    key: 'Company',
    value: 'Tencent.Inc'
  }],
  projects: [{
    image: 'https://cdn.ijason.cc/static/images/projects/goszu.jpg',
    desc: 'A website navigation for students of Shenzhen University. It collects many commonly used websites and some websites hard to find. This site is powered by Vue.js and Node.js for backend.',
    url: 'http://www.goszu.com/',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/goszu_qrcode.png'
  }, {
    image: 'https://cdn.ijason.cc/static/images/projects/powerusage.jpg',
    desc: `It's a website that can query the remaining electricity of dormitory, predict available days based on your usage, and also can push low-power-warning via Wechat.`,
    url: 'http://www.wacxt.cn/powerusage/',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/powerusage_qrcode.png'
  }, {
    image: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp.jpg',
    desc: `A app can auto sync class schedule from server. You can inquire your class infomations everywhere. It's based on Cordova and Vue.js and Node.js for backend. `,
    url: 'https://github.com/heyszu/szuschedule-app',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp_qrcode.png'
  }],
  projectRefer: 'See more projects in my Github',
  designs: {
    jingmei: {
      background: `#859398`,
      mainImage: 'https://cdn.ijason.cc/static/images/designs/mockup_jingmei.png',
      title: 'Silence',
      subTitle: 'Theme for FlymeOS',
      desc: 'This is a theme designing for MEIZU Flyme Theme Competition 2014. No edges and corners icons, with low saturation color and the wallpaper to bring out a quiet feeling.',
      link: 'http://www.ui.cn/detail/26910.html',
      linkRefer: 'See detail in ui.cn',
      posi: 'left'
    },
    mi4Mockup: {
      background: '#222',
      mainImage: 'https://cdn.ijason.cc/static/images/designs/mockup_mi4.png',
      title: 'Mi4 Mockup',
      subTitle: 'Phone mockup psd',
      desc: 'Copy painting from offcial website of Xiaomi 4. Fully vector painting, the screen use intelligent object, can be embedded in the display picture.',
      link: 'http://www.ui.cn/detail/21758.html',
      linkRefer: 'See detail in ui.cn',
      posi: 'left'
    },
    logos: {
      background: '#F8F8F8',
      mainImage: 'https://cdn.ijason.cc/static/images/designs/logos.png',
      title: 'Logos',
      subTitle: '',
      desc: 'Design for some websites and Wechat Public Accounts.',
      link: '',
      linkRefer: '去 ui.cn 查看详情',
      posi: 'left'
    }
  }
}

export default {
  cn: {
    website: base,
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: Object.assign({}, base, en),
    route: routeMap.map(v => v.en)
  }
}
