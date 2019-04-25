<template>
  <div id="register">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="确认密码" prop="confirm">
        <el-input v-model="form.confirm" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">
          注册
        </el-button>
        <el-button @click="resetForm('form')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { valPassword } from '../../utils/validate';
import axios from 'axios';
export default {
  name: 'Register',
  data() {
    const pwdValidate = (rule, value, callback) => {
      if (!valPassword(value)) {
        callback(new Error('请输入6-20位字符'));
      } else {
        callback();
      }
    };
    const confirmValidate = (rule, value, callback) => {
      if (!valPassword(value)) {
        callback(new Error('请输入6-20位字符'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: '',
        email: '',
        phone: '',
        password: '',
        confirm: ''
      },
      rules: {
        username: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 4, max: 16, message: '4-16个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '必填', trigger: 'blur' },
          { pattern: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/, message: '请输入合法邮箱', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '必填', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '请输入合法手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: pwdValidate, trigger: 'blur' }
        ],
        confirm: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: confirmValidate, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        // console.log(this.password, this.);
        if (valid) {
          axios.post('http://localhost:8080/api/user/register', {
            'email': this.form.email,
            'password': this.form.password,
            'mobile': this.form.phone,
            'name': this.form.username
          })
            .then((response) => {
              console.log(response);
              this.$message({
                showClose: true,
                message: '恭喜你，注册成功，请登录进入平台！',
                type: 'success'
              });
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
#register{
  width: 500px;
  margin: 0 auto;
}
</style>

