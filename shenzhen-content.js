(() => {
  const data = window.GRATITUDE_CONTENT;
  if (!data) return;
  const cityWords = value => typeof value === 'string'
    ? value.replaceAll('陆家嘴', '福田中心区').replaceAll('外滩', '深圳湾').replaceAll('申城', '鹏城').replaceAll('海派', '鹏城')
      .replaceAll('秋冬鲜果', '当季水果').replaceAll('秋季', '日常').replaceAll('秋雨', '雨天')
      .replaceAll('深秋', '感恩月').replaceAll('秋意渐深', '感恩月里').replaceAll('秋意渐浓', '感恩相伴')
      .replaceAll('秋日', '感恩月').replaceAll('秋天', '感恩月')
    : Array.isArray(value) ? value.map(cityWords)
    : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cityWords(item)]))
    : value;
  const updated = cityWords(data);
  updated.action.professionalMaterials = [];
  updated.gifts.priceDisclaimer = '主推礼品由伙伴自行下单。实际款式、价格和库存以商品页为准。';
  updated.gifts.deliveryPolicy = '采购前按深圳实际收货地址核对库存、运费和预计送达时间。';
  const cardNames = {champagne:'鹏城鎏金', haipai:'暮云雅紫', amber:'榕影暖杏', jade:'梧桐青绿', bluegold:'湾畔蓝金'};
  for (const card of updated.action.cards.online || []) if (cardNames[card.theme]) card.title = card.styleName = cardNames[card.theme];
  const gifts = updated.gifts.items;
  updated.gifts.items = gifts.filter(gift => !['g01', 'g02', 'g04'].includes(gift.id));
  const byId = id => updated.gifts.items.find(gift => gift.id === id);
  Object.assign(byId('g15'), {
    name: '真丝睡眠眼罩',
    platform: '京东',
    purchaseUrl: 'https://item.jd.com/product/-7AhPq7N1ew2wLK8CGYI5A.html',
    linkType: '京东商品页',
    category: '日常品质生活',
    scenario: '适合重视出行休息、日常睡眠品质的顾客。',
    selectionNote: '购买前核对是否为桑蚕丝、包装、实时价格和配送。'
  });
  const featuredGifts = [
  {
    "id": "featured-pumpkin",
    "name": "贝贝南瓜礼盒",
    "platform": "京东",
    "purchaseUrl": "https://3.cn/-2vgLAgx?jkl=@RFyQY40Ln66@",
    "components": "山东贝贝南瓜，5–6 粒装，净重 4.6 斤，单果 280 克以上",
    "freshGift": true,
    "script": "您好，十一月感恩月，丽兹行深圳团队想送您一份贝贝南瓜礼盒，谢谢您一直以来的信任与支持。\n\n愿这份粉糯香甜，为您和家人的餐桌添一点暖意。\n\n很感谢有机会为您服务。祝您和家人平安顺心，生活常有欢喜。",
    "posters": [
      "featured-pumpkin-soft.jpg",
      "featured-pumpkin-shenzhen.jpg"
    ],
    "shareText": "【京东】https://3.cn/-2vgLAgx?jkl=@RFyQY40Ln66@ CA1507 「京地达山东贝贝南瓜礼盒5-6粒装净重4.6斤单果280g+粉糯香甜源头直发」"
  },
  {
    "id": "featured-brown-rice",
    "name": "七色糙米礼盒",
    "platform": "京东",
    "purchaseUrl": "https://3.cn/3bzXw-yV?jkl=@NFim1C1FMhX@",
    "components": "瑞利来七色糙米，5 斤装",
    "script": "您好，十一月感恩月，丽兹行深圳团队想送您一份七色糙米礼盒，谢谢您一直以来的信任与支持。\n\n愿这份七色糙米，给您和家人的日常餐桌添一点新意。\n\n很感谢有机会为您服务。祝您和家人平安顺心，生活常有欢喜。",
    "posters": [
      "featured-brown-rice-soft.jpg",
      "featured-brown-rice-shenzhen.jpg"
    ],
    "shareText": "【京东】https://3.cn/3bzXw-yV?jkl=@NFim1C1FMhX@ ZH1997 「瑞利来七色糙米5斤」"
  },
  {
    "id": "featured-millet",
    "name": "黄小米礼盒",
    "platform": "京东",
    "purchaseUrl": "https://3.cn/3bzY-3lu?jkl=@Y42aq4UjIrx@",
    "components": "黄小米，1 千克／盒",
    "script": "您好，十一月感恩月，丽兹行深圳团队想送您一份黄小米礼盒，谢谢您一直以来的信任与支持。\n\n愿一碗热乎乎的小米粥，陪您和家人度过一个舒心的早晨。\n\n很感谢有机会为您服务。祝您和家人平安顺心，生活常有欢喜。",
    "posters": [
      "featured-millet-soft.jpg",
      "featured-millet-shenzhen.jpg"
    ],
    "shareText": "【京东】https://3.cn/3bzY-3lu?jkl=@Y42aq4UjIrx@ MF3390 「黄小米礼盒1kg健身减脂1盒」"
  },
  {
    "id": "featured-dessert",
    "name": "蓝羊手作甜品礼盒",
    "platform": "微店",
    "purchaseUrl": "https://shop291507827.v.weidian.com/item.html?itemID=7892533838&wfr=wx_wxh5&source=goods_home&sfr=app&ifr=itemdetail&state=H5WXshareOld&distributorId=1454256085&share_relation=8ad9e2e140c06116_1454256085_1",
    "components": "手作甜品礼盒，具体款式可进入小程序查看",
    "estimatedPriceRange": "68 元 / 98 元 / 106 元",
    "budgetTier": ">60元",
    "orderNotes": [
      "自行选择礼盒并填写收件信息，备注【姓名+店面+电话】。",
      "如需代写贺卡，可把祝福文案写在订单备注中，贺卡随礼盒寄送。",
      "购买后 3 天内发货。可在订单中选择或备注指定发货日期，蓝羊将按预约时间发货。"
    ],
    "script": "您好，十一月感恩月，丽兹行深圳团队想送您一份蓝羊手作甜品礼盒，谢谢您一直以来的信任与支持。\n\n愿这份手作甜品，陪您和家人分享一个甜甜的午后。\n\n很感谢有机会为您服务。祝您和家人平安顺心，生活常有欢喜。",
    "posters": [
      "featured-dessert-soft.jpg",
      "featured-dessert-shenzhen.jpg"
    ]
  },
  {
    "id": "featured-candle",
    "name": "香薰蜡烛",
    "platform": "淘宝",
    "purchaseUrl": "https://e.tb.cn/h.jRQBsn2FTYd0whw?tk=pliL6dT9xWr",
    "components": "香薰蜡烛礼盒，香型与规格以商品页为准",
    "script": "您好，十一月感恩月，丽兹行深圳团队想送您一份香薰蜡烛，谢谢您一直以来的信任与支持。\n\n愿这份香气，给您的日常添一点放松的时光。\n\n很感谢有机会为您服务。祝您和家人平安顺心，生活常有欢喜。",
    "posters": [
      "featured-candle-soft.jpg",
      "featured-candle-shenzhen.jpg"
    ],
    "shareText": "【淘宝】https://e.tb.cn/h.jRQBsn2FTYd0whw?tk=pliL6dT9xWr CZ057 「闺蜜生日礼物送女生礼盒香薰蜡烛卧室伴娘伴手礼送礼实用小礼物女」"
  },
  {
    "id": "featured-wreath-scarecrow",
    "name": "花环稻草人礼盒",
    "platform": "1688",
    "components": "秋季花环门挂、稻草人公仔、丝带手提礼品袋，三件分别采购后自行组合。",
    "purchaseItems": [
      {
        "name": "秋季花环门挂",
        "url": "https://qr.1688.com/s/VveQ76Ak",
        "shareText": "【跨境亚马逊秋季花环门挂感恩节丰收节挂饰仿真人造枫叶向日葵花环】复制￥c3GUN4Q00a8ae￥，打开【手机阿里】或【支付宝-点首页进行搜索】查看：https://qr.1688.com/s/VveQ76Ak CZ1718"
      },
      {
        "name": "稻草人公仔",
        "url": "https://qr.1688.com/s/DBQt7WbO",
        "shareText": "【跨境感恩节稻草人公仔系列装饰品丰收季枫叶草帽地精侏儒娃娃摆件】复制￥HnA57Dd00Y8ae￥，打开【手机阿里】或【支付宝-点首页进行搜索】查看：https://qr.1688.com/s/DBQt7WbO CZ2253"
      },
      {
        "name": "丝带手提礼品袋",
        "url": "https://qr.1688.com/s/cg89quIC",
        "shareText": "【高级感礼品袋手提服装包装袋跨境纸袋配丝带送礼礼物袋伴手礼袋】复制￥vRXX04z64wuan￥，打开【手机阿里】或【支付宝-点首页进行搜索】查看：https://qr.1688.com/s/cg89quIC CZ9708"
      }
    ]
  }
].map(gift => ({...gift, priority: true, productImage: `assets/featured/${gift.id}-product.webp`}));
  updated.gifts.items.forEach(gift => { gift.priority = false; });
  updated.gifts.items = [...featuredGifts,...updated.gifts.items];
  updated.gifts.recommendedIds = featuredGifts.map(gift => gift.id);
  updated.gifts.freshFruitGuide = undefined;
  window.GRATITUDE_CONTENT = updated;
})();

