<template>
  <div id="login">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">
          登录
        </el-button>
        <el-button @click="resetForm('form')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginFlag: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '必填', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '必填', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form);
          this.$store.dispatch('Login', this.form).then(() => {
            // this.loading = false
            // this.$router.push({ path: this.redirect || '/' });
            this.$message({
              showClose: true,
              message: '恭喜你，登录成功！',
              type: 'success'
            });
            this.$router.push({ path: '/' });
          }).catch((err) => {
            console.log(err);
            // this.loading = false
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
#login{
  width: 500px;
  margin: 0 auto;
}
</style>
