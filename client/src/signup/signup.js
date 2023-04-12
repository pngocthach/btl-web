import './signup.css'

function signup() {
    return (
        <div className="signup">
            <div className="signup_header">Tạo tài khoản trung tâm đăng kiểm</div>
            <div className="signup_container">
                
        
                <form className="signup_form">
                    <div className="signup_information">
                        <div className="form_label">Thông tin trung tâm</div>
                        <div className="name">
                            <label className="information_label">Tên trung tâm</label><br></br>
                            <input type="text" placeholder="Nhập tên trung tâm"></input>
                        </div>

                        <div className="address">
                            <label className="information_label">Địa chỉ trung tâm</label>
                            <br></br>
                            <select>
                                <option value="0">Tỉnh</option>
                            </select>
                            <br></br>
                            <select>
                                <option value="0">Huyện</option>
                            </select>
                            <br></br>
                            <select>
                                <option value="0">Xã</option>
                            </select>
                            <br></br>
                            <label className="information_label">Địa chỉ cụ thể</label>
                            <br></br>
                            <input type="text" placeholder="Số nhà, Đường"></input>
                        </div>
                    </div>

                    <div className="vertical_seperator"></div>

                    <div className="signup_account">
                        <div className="form_label">Thông tin tài khoản</div>
                        <div className="username">
                            <label className="information_label">Username</label>
                            <br></br>
                            <input type="text" placeholder="Nhập tên người dùng"></input>
                        </div>

                        <div className="password">
                            <label className="information_label">Password</label>
                            <br></br>
                            <input type="password" placeholder="Nhập mật khẩu"></input>
                        </div>

                        <div className="confirm_password">
                            <label className="information_label">Confirm Password</label>
                            <br></br>
                        <input type="password" placeholder="Nhập lại mật khẩu"></input>
                        </div>

                        <button className="create_account_button">Tạo tài khoản</button>

                    </div>
                
                </form>
            </div>
        </div>
    );
}

export default signup;