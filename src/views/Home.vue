<template>
  <div>
    <el-button @click="go" type="primary">主要按钮</el-button>

    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <!-- <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span> -->
      <hellowWorld></hellowWorld>
    </el-dialog>
  </div>
</template>

<script>
import hellowWorld from "../components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    hellowWorld
  },
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  methods: {
    go() {
      //   this.$store.dispatch("music");
      //   console.log(this.$store.state.montage.music);
      console.log(".2");
      this.centerDialogVisible = true;
    },
  },
};
</script>

<style>
</style>