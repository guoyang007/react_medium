'use strict';

import React from 'react';
//import ArticleList from '../../components/article-list/index.js';

require('./login.less');

class LoginIndex extends React.Component {


    render() {
        return (
        	<div className="page-login">
        		<form className="login active" action="/users/signup" method="POST" enctype="text/plain" onsubmit="return check();">
                    {/*
                        <p className="small-title"><span>社交账号登录</span></p>
                        <div className="social-login">
                            <a data-ga-event="mobile:login:weibo" href="http://www.qdaily.com/oauth_sessions/weibo_token" className="social iconfont icon-weibo"></a>
                            <a data-ga-event="mobile:login:qq" href="http://www.qdaily.com/oauth_sessions/qq_token" className="social iconfont icon-qq"></a>
                        </div>
                        <p className="small-title"><span>或者</span></p>
                        <div className="form-control">
                            <input type="text" name="user[email]" placeholder="电子邮箱" />
                        </div>
                    */}
        			<div className="form-control">
                        <input type="text" name="user[name]" placeholder="用户名" />
                    </div>
        			<div className="form-control">
        				<input type="password" name="user[password]" placeholder="密码" />
        			</div>
                {/*
                    <div className="form-control">
                        <input type="password" name="user[password]" placeholder="确认密码" />
                    </div>
                */}
                    
        			<div className="form-control">
        				{/*<a  href="#" className="btn submit">注册</a>*/}
                        <input type="submit" value="Submit" />

        			</div>
        		</form>
        		
        	</div>
        );
    }
}

LoginIndex.displayName = 'LoginIndex';

LoginIndex.propTypes = {};
LoginIndex.defaultProps = {};

export default LoginIndex;
