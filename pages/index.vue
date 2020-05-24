<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <div class="img">
          <img src="@/static/laptop-with-slack-by-oblik-studio.png" />
        </div>
        <el-form ref="form" :model="data" :rules="rules">
          <div class="content">
            <h2>Sign up</h2>
          </div>
          <el-form-item label="email" prop="email">
            <el-input v-model="data.email"></el-input>
          </el-form-item>
          <el-form-item label="password" prop="pass">
            <el-input
              v-model="data.password"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="create">Create new Account</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: { email: '', password: '' },
      rules: {
        email: [
          { required: true, message: 'email is required' },
          { type: 'email', message: 'email is need valide' }
        ],
        pass: [{ required: true, message: 'password is required' }]
      }
    }
  },
  methods: {
    create() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            const data = {
              email: this.data.email,
              password: this.data.password
            }
            await this.$store.dispatch('create', data)
          } catch (e) {}
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.img img {
  width: 200px;
}
.img {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
.content {
  display: flex;
  justify-content: center;
}
</style>
