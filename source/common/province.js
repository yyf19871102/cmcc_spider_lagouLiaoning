/**
 * @auth 杨羽飞
 * @time 2018-08-15 14:54:10
 * @desc 省份服务
 */
// 所有省份
exports.provinceList = [
	{name: '北京', pinyin: 'beijing', children: [{cityName: '北京市', pinyin: 'beijing'}]},
	{name: '上海', pinyin: 'shanghai', children: [{cityName: '上海市', pinyin: 'shanghai'}]},
	{name: '天津', pinyin: 'tianjin', children: [{cityName: '天津市', pinyin: 'tianjin'}]},
	{name: '重庆', pinyin: 'chongqing', children: [{cityName: '重庆市', pinyin: 'chongqing'}]},
	{name: '河北', pinyin: 'hebei', children: [
			{cityName: '石家庄市', pinyin: 'shijiazhuang' },
			{cityName: '承德市', pinyin: 'chengde' },
			{cityName: '秦皇岛市', pinyin: 'qinhuangdao'},
			{cityName: '邢台市' , pinyin: 'xingtai'},
			{cityName: '唐山市' , pinyin: 'tangshan'},
			{cityName: '廊坊市' , pinyin: 'langfang'},
			{cityName: '保定市' , pinyin: 'baoding'},
			{cityName: '张家口市' , pinyin: 'zhangjiakou'},
			{cityName: '衡水市' , pinyin: 'hengshui'},
			{cityName: '邯郸市' , pinyin: 'handan'},
			{cityName: '沧州市' , pinyin: 'cangzhou'},
	]},
	{name: '山西', pinyin: 'shanxi', children: [
			{cityName: '太原市' , pinyin: 'taiyuan'},
			{cityName: '大同市' , pinyin: 'datong'},
			{cityName: '临汾市' , pinyin: 'linfen'},
			{cityName: '运城市' , pinyin: 'yuncheng'},
			{cityName: '忻州市' , pinyin: 'xinzhou'},
			{cityName: '晋中市' , pinyin: 'jinzhong'},
			{cityName: '晋城市' , pinyin: 'jincheng'},
			{cityName: '阳泉市' , pinyin: 'yangquan'},
			{cityName: '长治市' , pinyin: 'changzhi'},
			{cityName: '朔州市' , pinyin: 'shuozhou'},
			{cityName: '吕梁市' , pinyin: 'lvliang'},
		]},
	{name: '内蒙古', pinyin: 'neimenggu', children: [
			{cityName: '呼和浩特市' , pinyin: 'huhehaote'},
			{cityName: '包头市' , pinyin: 'baotou'},
			{cityName: '鄂尔多斯市' , pinyin: 'eerduosi'},
			{cityName: '通辽市' , pinyin: 'tongliao'},
			{cityName: '赤峰市' , pinyin: 'chifeng'},
			{cityName: '巴彦淖尔市' , pinyin: 'bayanzhuoer'},
			{cityName: '呼伦贝尔市' , pinyin: 'hulunbeier'},
			{cityName: '乌兰察布市' , pinyin: 'wulanchabu'},
			{cityName: '乌海市' , pinyin: 'wuhai'},
			{cityName: '阿拉善盟' , pinyin: 'alashan'},
			{cityName: '兴安盟' , pinyin: 'xinan'},
			{cityName: '锡林郭勒盟' , pinyin: 'xilinguole'}
		]},
	{name: '辽宁', pinyin: 'liaoning', children: [
			{cityName: '大连市' , pinyin: 'dalian'},
			{cityName: '沈阳市' , pinyin: 'shenyang'},
			{cityName: '鞍山市' , pinyin: 'anshan'},
			{cityName: '抚顺市' , pinyin: 'fushun'},
			{cityName: '本溪市' , pinyin: 'benxi'},
			{cityName: '丹东市' , pinyin: 'dandong'},
			{cityName: '盘锦市' , pinyin: 'panjin'},
			{cityName: '锦州市' , pinyin: 'jinzhou'},
			{cityName: '铁岭市' , pinyin: 'tieling'},
			{cityName: '营口市' , pinyin: 'yingkou'},
			{cityName: '朝阳市' , pinyin: 'zhaoyang'},
			{cityName: '辽阳市' , pinyin: 'liaoyang'},
			{cityName: '葫芦岛市' , pinyin: 'huludao'},
			{cityName: '阜新市' , pinyin: 'fuxin'},
		]},
	{name: '吉林', pinyin: 'jilin', children: [
			{cityName: '长春市' , pinyin: 'changchun'},
			{cityName: '吉林市' , pinyin: 'jinlin'},
			{cityName: '通化市' , pinyin: 'tonghua'},
			{cityName: '延边朝鲜族自治州' , pinyin: 'yanbian'},
			{cityName: '松原市' , pinyin: 'songyuan'},
			{cityName: '辽源市' , pinyin: 'liaoyuan'},
			{cityName: '白山市' , pinyin: 'baishan'},
			{cityName: '四平市' , pinyin: 'siping'},
			{cityName: '白城市' , pinyin: 'baicheng'},
		]},
	{name: '黑龙江', pinyin: 'helongjiang', children: [
			{cityName: '哈尔滨市' , pinyin: 'haerbin'},
			{cityName: '牡丹江市' , pinyin: 'mudanjiang'},
			{cityName: '大庆市' , pinyin: 'daqing'},
			{cityName: '齐齐哈尔市' , pinyin: 'qiqihaer'},
			{cityName: '鹤岗市' , pinyin: 'hegang'},
			{cityName: '绥化市' , pinyin: 'suihua'},
			{cityName: '佳木斯市' , pinyin: 'jiamusi'},
			{cityName: '黑河市' , pinyin: 'heishan'},
			{cityName: '鸡西市' , pinyin: 'jixi'},
			{cityName: '伊春市' , pinyin: 'yichun'},
			{cityName: '双鸭山市' , pinyin: 'shuangyashan'},
			{cityName: '七台河市' , pinyin: 'qitaihe'},
			{cityName: '大兴安岭地区' , pinyin: 'daxinganling'},
		]},
	{pinyin: 'jiangsu', name: '江苏', children: [
			{cityName: '南京市' , pinyin: 'nanjing'},
			{cityName: '苏州市' , pinyin: 'suzhou'},
			{cityName: '常州市' , pinyin: 'changzhou'},
			{cityName: '扬州市' , pinyin: 'yangzhou'},
			{cityName: '无锡市' , pinyin: 'wuxi'},
			{cityName: '徐州市' , pinyin: 'xuzhou'},
			{cityName: '南通市' , pinyin: 'nantong'},
			{cityName: '镇江市' , pinyin: 'zhenjiang'},
			{cityName: '连云港市' , pinyin: 'lianyungang'},
			{cityName: '泰州市' , pinyin: 'taizhou'},
			{cityName: '盐城市' , pinyin: 'yancheng'},
			{cityName: '淮安市' , pinyin: 'huaian'},
			{cityName: '宿迁市' , pinyin: 'suqian'},
		]},
	{pinyin: 'zhejiang', name: '浙江', children: [
			{cityName: '杭州市' , pinyin: 'hangzhou'},
			{cityName: '宁波市' , pinyin: 'ningbo'},
			{cityName: '温州市' , pinyin: 'wenzhou'},
			{cityName: '金华市' , pinyin: 'jinhua'},
			{cityName: '绍兴市' , pinyin: 'shaoxing'},
			{cityName: '嘉兴市' , pinyin: 'jiaxing'},
			{cityName: '台州市' , pinyin: 'taizhou'},
			{cityName: '丽水市' , pinyin: 'lishui'},
			{cityName: '衢州市' , pinyin: 'qizhou'},
			{cityName: '湖州市' , pinyin: 'huzhou'},
			{cityName: '舟山市' , pinyin: 'zhoushan'},
		]},
	{pinyin: 'anhui', name: '安徽', children: [
			{cityName: '合肥市' , pinyin: 'hefei'},
			{cityName: '黄山市' , pinyin: 'huangshan'},
			{cityName: '安庆市' , pinyin: 'anqing'},
			{cityName: '芜湖市' , pinyin: 'wuhu'},
			{cityName: '蚌埠市' , pinyin: 'bengbu'},
			{cityName: '淮南市' , pinyin: 'huainan'},
			{cityName: '阜阳市' , pinyin: 'fuyang'},
			{cityName: '马鞍山市' , pinyin: 'maanshan'},
			{cityName: '亳州市' , pinyin: 'haozhou'},
			{cityName: '宿州市' , pinyin: 'suzhou'},
			{cityName: '铜陵市' , pinyin: 'tongling'},
			{cityName: '滁州市' , pinyin: 'chuzhou'},
			{cityName: '六安市' , pinyin: 'liuan'},
			{cityName: '池州市' , pinyin: 'chizhou'},
			{cityName: '淮北市' , pinyin: 'huaibei'},
			{cityName: '宣城市' , pinyin: 'xuancheng'},
		]},
	{pinyin: 'fujian', name: '福建', children: [
			{cityName: '厦门市' , pinyin: 'xiamen'},
			{cityName: '福州市' , pinyin: 'fuzhou'},
			{cityName: '泉州市' , pinyin: 'quanzhou'},
			{cityName: '莆田市' , pinyin: 'putian'},
			{cityName: '漳州市' , pinyin: 'zhangzhou'},
			{cityName: '龙岩市' , pinyin: 'longyan'},
			{cityName: '三明市' , pinyin: 'sanming'},
			{cityName: '南平市' , pinyin: 'nanping'},
			{cityName: '宁德市' , pinyin: 'ningde'},
		]},
	{pinyin: 'jiangxi', name: '江西', children: [
			{cityName: '南昌市' , pinyin: 'nanchang'},
			{cityName: '九江市' , pinyin: 'jiujiang'},
			{cityName: '吉安市' , pinyin: 'jian'},
			{cityName: '景德镇市' , pinyin: 'jingdezhen'},
			{cityName: '上饶市' , pinyin: 'shaoyao'},
			{cityName: '宜春市' , pinyin: 'yichun'},
			{cityName: '萍乡市' , pinyin: 'pingxiang'},
			{cityName: '赣州市' , pinyin: 'ganzhou'},
			{cityName: '鹰潭市' , pinyin: 'yingtan'},
		]},
	{pinyin: 'shangdong', name: '山东', children: [
			{cityName: '青岛市' , pinyin: 'qingdao'},
			{cityName: '济南市' , pinyin: 'jinan'},
			{cityName: '潍坊市' , pinyin: 'weifang'},
			{cityName: '烟台市' , pinyin: 'yantai'},
			{cityName: '威海市' , pinyin: 'weihai'},
			{cityName: '淄博市' , pinyin: 'zibo'},
			{cityName: '东营市' , pinyin: 'dongying'},
			{cityName: '枣庄市' , pinyin: 'zaozhuang'},
			{cityName: '临沂市' , pinyin: 'linyi'},
			{cityName: '德州市' , pinyin: 'dezhou'},
			{cityName: '泰安市' , pinyin: 'taian'},
			{cityName: '日照市' , pinyin: 'rizhao'},
			{cityName: '菏泽市' , pinyin: 'heze'},
			{cityName: '滨州市' , pinyin: 'binzhou'},
			{cityName: '济宁市' , pinyin: 'jining'},
			{cityName: '聊城市' , pinyin: 'liaocheng'},
			{cityName: '莱芜市' , pinyin: 'laiwu'},
		]},
	{pinyin: 'henan', name: '河南', children: [
			{cityName: '郑州市' , pinyin: 'zhengzhou'},
			{cityName: '洛阳市' , pinyin: 'luoyang'},
			{cityName: '开封市' , pinyin: 'kaifeng'},
			{cityName: '新乡市' , pinyin: 'xinxiang'},
			{cityName: '平顶山市' , pinyin: 'pingdingshan'},
			{cityName: '濮阳市' , pinyin: 'puyang'},
			{cityName: '南阳市' , pinyin: 'nanyang'},
			{cityName: '三门峡市' , pinyin: 'sanmenxia'},
			{cityName: '济源市' , pinyin: 'jiyuan'},
			{cityName: '焦作市' , pinyin: 'jiaozuo'},
			{cityName: '鹤壁市' , pinyin: 'hebi'},
			{cityName: '许昌市' , pinyin: 'xuchang'},
			{cityName: '周口市' , pinyin: 'zhoukou'},
			{cityName: '安阳市' , pinyin: 'anyang'},
			{cityName: '漯河市' , pinyin: 'luohe'},
			{cityName: '驻马店市' , pinyin: 'zhumadian'},
			{cityName: '信阳市' , pinyin: 'xinyang'},
			{cityName: '商丘市' , pinyin: 'shangqiu'},
		]},
	{pinyin: 'hubei', name: '湖北', children: [
			{cityName: '武汉市' , pinyin: 'wuhan'},
			{cityName: '黄石市' , pinyin: 'huangshi'},
			{cityName: '襄阳市' , pinyin: 'xiangyang'},
			{cityName: '荆州市' , pinyin: 'jinzhou'},
			{cityName: '宜昌市' , pinyin: 'yichang'},
			{cityName: '十堰市' , pinyin: 'shiyan'},
			{cityName: '荆门市' , pinyin: 'jinmen'},
			{cityName: '恩施土家族苗族自治州' , pinyin: 'enshi'},
			{cityName: '鄂州市' , pinyin: 'yuezhou'},
			{cityName: '孝感市' , pinyin: 'xiaogan'},
			{cityName: '黄冈市' , pinyin: 'huanggang'},
			{cityName: '咸宁市' , pinyin: 'xianning'},
			{cityName: '随州市' , pinyin: 'suizhou'},
		]},
	{pinyin: 'hunan', name: '湖南', children: [
			{cityName: '长沙市' , pinyin: 'changsha'},
			{cityName: '株洲市' , pinyin: 'zhuzhou'},
			{cityName: '湘潭市' , pinyin: 'xiangtan'},
			{cityName: '衡阳市' , pinyin: 'hengyang'},
			{cityName: '邵阳市' , pinyin: 'shaoyang'},
			{cityName: '岳阳市' , pinyin: 'yueyang'},
			{cityName: '常德市' , pinyin: 'changde'},
			{cityName: '张家界市' , pinyin: 'zhangjiajie'},
			{cityName: '益阳市' , pinyin: 'yiyang'},
			{cityName: '郴州市' , pinyin: 'linzhou'},
			{cityName: '永州市' , pinyin: 'yongzhou'},
			{cityName: '怀化市' , pinyin: 'huaihua'},
			{cityName: '娄底市' , pinyin: 'loudi'},
		]},
	{pinyin: 'guangdong', name: '广东', children: [
			{cityName: '广州市' , pinyin: 'guangzhou'},
			{cityName: '深圳市' , pinyin: 'shenzhen'},
			{cityName: '珠海市' , pinyin: 'zhuhai'},
			{cityName: '汕头市' , pinyin: 'shantou'},
			{cityName: '佛山市' , pinyin: 'fuoshan'},
			{cityName: '韶关市' , pinyin: 'shaoguan'},
			{cityName: '湛江市' , pinyin: 'zhanjiang'},
			{cityName: '肇庆市' , pinyin: 'zhaoqing'},
			{cityName: '江门市' , pinyin: 'jiangmen'},
			{cityName: '茂名市' , pinyin: 'maoming'},
			{cityName: '惠州市' , pinyin: 'huizhou'},
			{cityName: '梅州市' , pinyin: 'meizhou'},
			{cityName: '汕尾市' , pinyin: 'shanwei'},
			{cityName: '河源市' , pinyin: 'heyuan'},
			{cityName: '阳江市' , pinyin: 'yangjiang'},
			{cityName: '清远市' , pinyin: 'qingyuan'},
			{cityName: '东莞市' , pinyin: 'donguan'},
			{cityName: '中山市' , pinyin: 'zhongshan'},
			{cityName: '潮州市' , pinyin: 'chaozhou'},
			{cityName: '揭阳市' , pinyin: 'jieyang'},
			{cityName: '云浮市' , pinyin: 'yunfu'},
		]},
	{pinyin: 'jiangxi', name: '广西', children: [
			{cityName: '桂林市' , pinyin: 'guilin'},
			{cityName: '南宁市' , pinyin: 'naning'},
			{cityName: '柳州市' , pinyin: 'liuzhou'},
			{cityName: '梧州市' , pinyin: 'wuzhou'},
			{cityName: '北海市' , pinyin: 'beihai'},
			{cityName: '防城港市' , pinyin: 'fangchenggang'},
			{cityName: '钦州市' , pinyin: 'qinzhou'},
			{cityName: '贵港市' , pinyin: 'guigang'},
			{cityName: '玉林市' , pinyin: 'yulin'},
			{cityName: '百色市' , pinyin: 'baise'},
			{cityName: '贺州市' , pinyin: 'hezhou'},
			{cityName: '河池市' , pinyin: 'hechi'},
			{cityName: '来宾市' , pinyin: 'laibin'},
			{cityName: '崇左市' , pinyin: 'chongzuo'},
		]},
	{pinyin: 'hainan', name: '海南', children: [
			{cityName: '三亚市' , pinyin: 'sanya'},
			{cityName: '海口市' , pinyin: 'haikou'},
			{cityName: '儋州市' , pinyin: 'zhanzhou'},
			{cityName: '三沙市' , pinyin: 'sanshan'}
		]},
	{pinyin: 'sichuan', name: '四川', children: [
			{cityName: '成都市' , pinyin: 'chengdu'},
			{cityName: '自贡市' , pinyin: 'zigong'},
			{cityName: '攀枝花市' , pinyin: 'panzhihua'},
			{cityName: '泸州市' , pinyin: 'luzhou'},
			{cityName: '德阳市' , pinyin: 'dezhou'},
			{cityName: '绵阳市' , pinyin: 'mianyang'},
			{cityName: '广安市' , pinyin: 'guanan'},
			{cityName: '遂宁市' , pinyin: 'suining'},
			{cityName: '内江市' , pinyin: 'neijiang'},
			{cityName: '乐山市' , pinyin: 'leshan'},
			{cityName: '南充市' , pinyin: 'nanchong'},
			{cityName: '眉山市' , pinyin: 'meishan'},
			{cityName: '宜宾市' , pinyin: 'yibin'},
			{cityName: '广安市' , pinyin: 'guangan'},
			{cityName: '达州市' , pinyin: 'dazhou'},
			{cityName: '雅安市' , pinyin: 'yaan'},
			{cityName: '巴中市' , pinyin: 'bazhong'},
			{cityName: '资阳市' , pinyin: 'ziyang'},
		]},
	{pinyin: 'guizhou', name: '贵州', children: [
			{cityName: '贵阳市' , pinyin: 'guiyang'},
			{cityName: '六盘水市' , pinyin: 'liupanshui'},
			{cityName: '遵义市' , pinyin: 'zunyi'},
			{cityName: '安顺市' , pinyin: 'anshun'},
			{cityName: '铜仁市' , pinyin: 'tongren'},
			{cityName: '毕节市' , pinyin: 'bijie'},
		]},
	{pinyin: 'yunnan', name: '云南', children: [
			{cityName: '昆明市' , pinyin: 'kunming'},
			{cityName: '曲靖市' , pinyin: 'qujing'},
			{cityName: '玉溪市' , pinyin: 'yuxi'},
			{cityName: '保山市' , pinyin: 'baoshan'},
			{cityName: '昭通市' , pinyin: 'zhaotong'},
			{cityName: '丽江市' , pinyin: 'lijiang'},
			{cityName: '普洱市' , pinyin: 'puer'},
			{cityName: '临沧市' , pinyin: 'lincang'},
		]},
	{pinyin: 'xizang', name: '西藏', children: [
			{cityName: '拉萨市' , pinyin: 'lasha'},
			{cityName: '林芝地区' , pinyin: 'linzhi'},
			{cityName: '日喀则地区' , pinyin: 'rikeze'},
			{cityName: '昌都地区' , pinyin: 'changdu'},
			{cityName: '山南地区' , pinyin: 'shannan'},
			{cityName: '那曲地区' , pinyin: 'naqu'},
			{cityName: '阿里地区' , pinyin: 'ali'},
		]},
	{pinyin: 'shanxi', name: '陕西', children: [
			{cityName: '西安市' , pinyin: 'xian'},
			{cityName: '宝鸡市' , pinyin: 'baoji'},
			{cityName: '铜川市' , pinyin: 'tongchuan'},
			{cityName: '咸阳市' , pinyin: 'xianyang'},
			{cityName: '渭南市' , pinyin: 'weinan'},
			{cityName: '延安市' , pinyin: 'yanan'},
			{cityName: '汉中市' , pinyin: 'hanzhong'},
			{cityName: '榆林市' , pinyin: 'yulin'},
			{cityName: '安康市' , pinyin: 'ankang'},
			{cityName: '商洛市' , pinyin: 'shangluo'},
		]},
	{pinyin: 'gansu', name: '甘肃', children: [
			{cityName: '兰州市' , pinyin: 'lanzhou'},
			{cityName: '嘉峪关市' , pinyin: 'jiayuguan'},
			{cityName: '金昌市' , pinyin: 'jinchang'},
			{cityName: '白银市' , pinyin: 'baiyin'},
			{cityName: '天水市' , pinyin: 'tianshui'},
			{cityName: '武威市' , pinyin: 'wuwei'},
			{cityName: '张掖市' , pinyin: 'zhangye'},
			{cityName: '酒泉市' , pinyin: 'jiuquan'},
			{cityName: '平凉市' , pinyin: 'pingliang'},
			{cityName: '庆阳市' , pinyin: 'qingyang'},
			{cityName: '定西市' , pinyin: 'dingxi'},
			{cityName: '陇南市' , pinyin: 'longnan'},
			{cityName: '甘南藏族自治州' , pinyin: 'gannan'},
			{cityName: '临夏回族自治州' , pinyin: 'linxia'},
		]},
	{pinyin: 'qinghai', name: '青海', children: [
			{cityName: '西宁市' , pinyin: 'xining'},
			{cityName: '海东市' , pinyin: 'haidong'},
			{cityName: '海北藏族自治州' , pinyin: 'haibei'},
			{cityName: '黄南藏族自治州' , pinyin: 'huangnan'},
			{cityName: '海南藏族自治州' , pinyin: 'hainan'},
			{cityName: '果洛藏族自治州' , pinyin: 'guoluo'},
			{cityName: '玉树藏族自治州' , pinyin: 'yushu'},
			{cityName: '海西蒙古族藏族自治州' , pinyin: 'haixi'},
		]},
	{pinyin: 'ningxia', name: '宁夏', children: [
			{cityName: '银川市' , pinyin: 'yinchuan'},
			{cityName: '石嘴山市' , pinyin: 'shizuishan'},
			{cityName: '吴忠市' , pinyin: 'wuzhong'},
			{cityName: '中卫市' , pinyin: 'zhongwei'},
			{cityName: '固原市' , pinyin: 'guyuan'},
		]},
	{pinyin: 'xinjiang', name: '新疆', children: [
			{cityName: '乌鲁木齐市' , pinyin: 'wulumuqi'},
			{cityName: '克拉玛依市' , pinyin: 'kelamayi'},
			{cityName: '喀什地区' , pinyin: 'keshi'},
			{cityName: '阿克苏地区' , pinyin: 'akesu'},
			{cityName: '和田地区' , pinyin: 'hetian'},
			{cityName: '吐鲁番地区' , pinyin: 'tulufan'},
			{cityName: '哈密地区' , pinyin: 'hami'},
			{cityName: '塔城地区' , pinyin: 'tacheng'},
			{cityName: '阿勒泰地区' , pinyin: 'aletai'},
			{cityName: '克孜勒苏柯尔克孜自治州' , pinyin: 'kezilesukeer'},
			{cityName: '博尔塔拉蒙古自治州' , pinyin: 'oertala'},
			{cityName: '昌吉回族自治州' , pinyin: 'changji'},
			{cityName: '伊犁哈萨克自治州' , pinyin: 'yili'},
			{cityName: '巴音郭楞蒙古自治州' , pinyin: 'bayinguole'},
		]},
];

/**
 * 根据城市名查询其属于哪个省份
 * @param cityName
 * @returns {null}
 */
exports.getProvinceByCityName = cityName => {
	let provinceName;
	exports.provinceList.forEach(province => {
		province.children.forEach(city => {
			new RegExp(`^${cityName}`).test(city.cityName) && (provinceName = province.name);
		})
	});
	
	return provinceName;
};