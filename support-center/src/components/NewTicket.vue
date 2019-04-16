<template>
  <div class="new-ticket">
    <SmartForm title="新票" :operation="operation" :valid="valid">
      <FormInput name="title" v-model="title" placeholder="标题（100字以内）" maxlength="100" required/>

      <FormInput
        type="textarea"
        name="description"
        v-model="description"
        placeholder="描述细节"
        required
        rows="4"
      />
      <template slot="actions">
        <router-link tag="button" :to="{name:'tickets'}" class="secondary">退后</router-link>
        <button type="sunmit" :disabled="!valid">新建</button>
      </template>
    </SmartForm>
  </div>
</template>
<script>
import PersistantData from "../mixins/PersistantData.js";
export default {
  mixins: [PersistantData("NewTicket", ["title", "description"])],
  data() {
    return {
      title: "",
      description: ""
    };
  },
  computed: {
    valid() {
      return !!this.title && !!this.description;
    }
  },
  methods: {
    async operation() {
      const result = await this.$fetch("tickets/new/", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          description: this.description
        })
      });
      this.title = this.description = "";
    }
  }
};
</script>
