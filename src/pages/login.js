import React from 'react'
import '../styles/login.css'

class Alert extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.status == 0) {
            return null;
        } else if (this.props.status == 1) {
            return (
                <div className="alert alert-danger">
                    <p className="text-center">请填写用户名和密码！</p>
                </div>
            );
        } else if (this.props.status == 2) {
            return (
                <div className="alert alert-danger">
                    <p className="text-center">用户名长度应该为<strong>6-12位字母、数字或下划线</strong>！</p>
                </div>
            );
        } else if (this.props.status == 3) {
            return (
                <div className="alert alert-danger">
                    <p className="text-center">密码长度应该为<strong>6-12位字母或数字</strong>！</p>
                </div>
            );
        }
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            username: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleLogin(event) {
        console.log(this.state)
        this.setState({status: 0})
        if (this.state.username == '' || this.state.password == '') {
            this.setState({status: 1})
        } else if (this.state.username.length < 6 || this.state.username.length > 12) {
            this.setState({status: 2})
        } else if (this.state.password.length < 6 || this.state.password.length > 12) {
            this.setState({status: 3})
        } else {
            this.props.history.push('/home')
        }
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-offset-4 col-sm-4" id="login-table">
                    <h1 className="text-center page-header blog-name">朝暮博客</h1>
                    <Alert status={this.state.status}/>
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <div className="col-sm-offset-1 col-sm-10">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.username}
                                       name="username"
                                       placeholder="用户名"
                                       onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-1 col-sm-10">
                                <input type="password"
                                       className="form-control"
                                       name="password"
                                       placeholder="密码"
                                       value={this.state.password}
                                       onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-1 col-sm-10">
                                <button className="btn btn-success col-xs-12 col-sm-12"
                                        type="submit"
                                        onClick={this.handleLogin}>登录
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-1 col-sm-10">
                                <p className="text-center">还没有账号？<a href="#">立即注册</a></p>
                            </div>
                        </div>
                    </form>
                    <h5 className="text-center page-header">其他登录方式</h5>
                    <img className="col-sm-12" src="https://s3.ax1x.com/2021/01/31/yViNG9.png"/>
                </div>
            </div>
        );
    }
}

export default Login
