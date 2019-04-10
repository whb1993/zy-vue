<template>
  <div id="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          登录
        </el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit() {
      axios.post('', {})
        .then((response) => {
          console.log(response);
        });
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
