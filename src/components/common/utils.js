const Utils={
	smartDate(data){
		if (!data) {
			return;
		}
		let isToday = false,
            isYesterday = false,
            isPastYear = false,
		    nowDate=new Date();
		let originDate=new Date(data);
		let diffMinute=Math.round((nowDate.getTime()-originDate.getTime())/(1000*60));
		if (diffMinute <= nowDate.getHours() * 60) {
		    isToday = true;
		}
		if (nowDate.getDate() - originDate.getDate() == 1) {
		    isYesterday = true;
		}
		if (nowDate.getFullYear() - originDate.getFullYear() >= 1) {
		    isPastYear = true;
		}
		if (diffMinute < 60 && isToday) {
		    return(diffMinute + ' 分钟前');
		} else if (diffMinute < 60 * 24 && isToday) {
		    return(Math.floor(diffMinute / 60) + ' 小时前');
		} else if (diffMinute < 60 * 24 * 2 && isYesterday) {
		    return('昨天');
		} else if (isPastYear) {
		    return(originDate.getFullYear() + ' 年 ' + (originDate.getMonth() + 1) + ' 月 ' + originDate.getDate() + ' 日');
		} else {
		    return(originDate.getMonth() + 1 + ' 月 ' + originDate.getDate() + ' 日');
		}

	},
	addClass(obj,cls){
		if(!obj.className.match(new RegExp('(^|\\s)'+cls+'(\\s|$)'))){
			obj.className+=' '+cls;
		}
	},
	hasClass(obj,cls){
		return obj.className.match(new RegExp('(^|\\s)'+cls+'(\\s|$)'));
	},
	removeClass(obj,cls){
		let oClass=new RegExp('(^|\\s)'+cls+'(\\s|$)');
		if(obj.className.match(new RegExp('(^|\\s)'+cls+'(\\s|$)'))){
			obj.className=obj.className.replace(oClass,'');
		}
	}
};
export default Utils;