<template>
  <el-row class="avatar-container">
    <div class="avatar-logo" v-html="svg"></div>
    <el-col :span="24">
      <el-input
        v-model="seed"
        placeholder="输入内容"
        size="large"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="spriteCollectionId" placeholder="选择类型" style="width: 110px;">
            <el-option
              v-for="item in spriteCollections"
              :key="item.id"
              :label="item.id"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </template>
      </el-input>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { createAvatar } from '@dicebear/avatars'

import spriteCollections from '../../options'
import SpriteCollection from '../../types/spriteCollection'

const spriteCollectionId = ref('')
const seed = ref('')
let spriteCollection = reactive<SpriteCollection>(spriteCollections[0])

const svg = computed(() => {
  spriteCollections.forEach(item => {
    if (item.id === spriteCollectionId.value) {
      spriteCollection = item
    }
  })

  return createAvatar(spriteCollection.style, {
    seed: seed.value
  })
})
</script>

<style lang="scss">
.avatar-container {
  position: relative;
  width: 500px;
  padding: 20px;
  padding-top: 100px;
  background-color: #fff;
  border-radius: 4px;

  .avatar-logo {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border: 4px solid #f0f0f0;
    border-radius: 4px;
    background-color: #fff;
  }
}
</style>
