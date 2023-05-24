<script lang="ts" setup>
  import { ref } from "vue";
  import { ILogin } from "../../models/IAuth";
  import { VForm } from "vuetify/components";
  import { useRouter } from "vue-router";
  import authLogin from "../../actions/authLogin";

  const authModel = ref({
    username: "",
    password: "",
  } as ILogin);

  const formRef = ref<InstanceType<typeof VForm> | null>(null);
  const router = useRouter();

  const login = async () => {
    const response = await authLogin(authModel.value);

    if (response) {
      router.push("/"); // TODO - Change this to a non-hardcoded value
    }
  };
</script>
<!-- TODO - Add rules and validation to the form -->
<template>
  <div class="flex h-screen justify-center">
    <VCard class="m-auto px-6 py-8 w-64">
      <VForm ref="formRef" :model="authModel">
        <VTextField
          class="mb-2"
          label="Username"
          v-model="authModel.username"
        ></VTextField>

        <VTextField
          label="Password"
          v-model="authModel.password"
          placeholder="Enter your password"
          type="password"
          @keydown.enter="login"
        ></VTextField>

        <VBtn
          block
          color="success"
          size="large"
          variant="elevated"
          @click="login"
        >
          Sign In
        </VBtn>
      </VForm>
    </VCard>
  </div>
</template>
