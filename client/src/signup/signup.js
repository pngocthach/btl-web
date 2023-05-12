import style from './signup.module.css'
import TextField from '../components/textField/textField';
import Button from '../components/button/button';

function Signup() {
    return (
        <div className={style.signup}>
            <form className={style.form}>
                <img className={style.image}></img>
                <div className={style.formContainer}>
                    <div className={style.informationContainer}>
                        <div className={style.textFieldContainer}>
                            <TextField name='Username' width="300px" type="text"></TextField>
                            <TextField name='Password' width="300px" type="password"></TextField>
                            <TextField name='Confirm password' width="300px" type="password"></TextField>
                        </div>
                    </div>
                    <div className={style.informationContainer}>
                        <div className={style.textFieldContainer}>
                            <TextField name='Tên trung tâm' width="300px" type="text"></TextField>

                            <div className={style.selectContainer}>
                                <label className={style.label}>Địa chỉ:</label>
                                <select className={style.select}>
                                    <option value="0">Tỉnh</option>
                                </select>
                                <select className={style.select}>
                                    <option value="0">Huyện</option>
                                </select>
                                <select className={style.select}>
                                    <option value="0">Xã</option>
                                </select>
                            </div>
                            
                            <TextField name='Địa chỉ cụ thể' width="300px" type="text"></TextField>
                        </div>
                    </div>
                </div>
                <Button text="Create account"></Button>
            </form>
        </div>
    );
}

export default Signup;