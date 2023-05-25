<script lang="ts" setup>
  import { ref } from "vue";
  import { ILogin } from "../../models/IAuth";
  import { VForm } from "vuetify/components";
  import { useRouter } from "vue-router";
  import authLogin from "../../actions/authLogin";
  import loginRules from "./loginRules";
  import { ElMessage } from "element-plus";

  const authModel = ref({
    username: "",
    password: "",
  } as ILogin);

  const formRef = ref<InstanceType<typeof VForm> | null>(null);
  const loading = ref<boolean>(false);
  const router = useRouter();

  const login = async () => {
    const isValidForm = await formRef.value?.validate();

    if (!isValidForm) {
      console.log("Form is not valid");
      return;
    }

    console.log("Form is valid");

    // login action
    loading.value = true;

    if (await authLogin(authModel.value)) {
      router.push("/"); // TODO - Change this to a non-hardcoded value
      return;
    }

    loading.value = false;
    ElMessage.error("Wrong credentials");
  };
</script>

<template>
  <div class="flex h-screen justify-center">
    <el-form
      class="m-auto"
      ref="formRef"
      :model="authModel"
      :rules="loginRules"
    >
      <el-form-item prop="username">
        <el-input v-model="authModel.username" placeholder="Username" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="authModel.password"
          type="password"
          show-password
          placeholder="Username"
          @keyup.enter="login"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          class="w-full"
          @click="login"
          :loading="loading"
        >
          Sign in
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
