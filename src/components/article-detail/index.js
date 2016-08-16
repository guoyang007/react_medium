'use strict';

import React from 'react';

require('./index.less');

class ArticleDetail extends React.Component {
    render() {
        return (
        	<div className="com-article-detail">
        		<div className="article-detail-hd imgcover">
        			<img src={'/images/articles/banner.jpg'} />
        		</div>
        		<div className="article-detail-bd">
        			<div className="detail">
						<p>专注可穿戴科技的荷<a href="">兰时尚设计师</a> Pauline van Dongen 又推出了</p>
						<p>这种太阳能衬衫能储存更多的能量，充电时间达到数小时。支持的充电设备包括智能手机、MP3 播放器、相机、GPS 设备和其他 USB 可充设备。暂时不需要充电的话，衬衫中的电量也会保留用以之后使用。</p>
						<p>van Dongen 是从 2013 年开始有了设计太阳能充电服饰的想法的，之前，她还推出过太阳能派克大衣、夹克和裙子系列。</p>
						<p class="">讲真，电子设备严重依赖者的充电需求，实在是太需要被满足了。</p>
						<p class="">题图来自 <a href="http://www.dezeen.com/2016/08/15/pauline-van-dongen-solar-powered-windbreaker-jacket-charges-phone/" rel="nofollow">dezeen&nbsp;</a></p>
					</div>
        		</div>
        		<div className="article-detail-ft">
        			<ul className="tags">
        				<li className="tag">贾木许</li>
        				<li className="tag">电影</li>
        				<li className="tag">戛纳</li>
        			</ul>
        		</div>
        	</div>
        );
    }
}

ArticleDetail.displayName = 'ArticleDetail';

ArticleDetail.propTypes = {};
ArticleDetail.defaultProps = {};

export default ArticleDetail;
