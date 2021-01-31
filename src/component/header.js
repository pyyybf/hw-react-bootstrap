import React from 'react'

class Head extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#example-navbar-collapse">
                                <span className="sr-only">切换导航</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/home">朝暮博客</a>
                        </div>
                        <div className="collapse navbar-collapse navbar-right" id="example-navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="/home">首页</a></li>
                                <li><a href="/editor">编辑器</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        我的 <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">我的主页</a></li>
                                        <li><a href="#">我的文字</a></li>
                                        <li><a href="#">个人信息</a></li>
                                        <li className="divider"></li>
                                        <li><a href="/">退出登录</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-transparent"/>
            </div>
        );
    }
}

export default Head