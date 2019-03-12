<template>
  <div>
    <h1 v-if="error.statusCode === 404">페이지를 찾을 수 없습니다.</h1>
    <h1 v-else>에러가 발생했습니다.</h1>
  </div>
</template>

<script>
export default{
props: ['error'] //외부에서 error인자를 받음. 해당 파일에서 데이터 바인딩 할 수 있음.
}
</script>
