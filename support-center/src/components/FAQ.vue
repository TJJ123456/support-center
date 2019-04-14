<template>
  <main class="faq">
    <div class="error" v-if="hasRemoteErrors">不能加载问题</div>
    <section class="list">
      <article v-for="question of questionList" :key="question._id">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
    <Loading v-if="remoteDataBusy"/>
  </main>
</template>
<script>
import RemoteData from "../mixins/RemoteData";
export default {
  mixins: [
    RemoteData({
      questionList: "questions"
    })
  ],
  created() {
    console.log("xxxxxxxx", this.$state);
  }
};
</script>