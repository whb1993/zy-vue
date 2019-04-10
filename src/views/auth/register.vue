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
        <el-button type="primary" @click="onSubmit">
          注册
        </el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
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
          { pattern: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/, message: '请输入合法邮箱', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '必填', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '请输入合法手机号', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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

