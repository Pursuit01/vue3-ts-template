import { defineComponent, readonly, ref } from "vue";
export default defineComponent({
  setup() {
    // const num = ref(1);
    // const add = () => {
    //   num.value += 1;
    //   console.log(num.value);
    // };
    const tableData = ref([
      {name: '1', },
    ])
    const tabColumn = readonly([
      {label: '名字', props: 'name'},
      {label: '性别', props: 'sex'},
      {label: '年龄', props: 'age'},
    ])
    return () => (
      <>
        {/* <div>{num.value}</div>
        <button onClick={add}>click</button>
        */}
        <el-table data={tableData.value} >
          {
            tabColumn.map(item => {
              return (
                <el-table-column prop={item.props} label={item.label}></el-table-column>
              )
            })
          }
        </el-table>
      </>
    );
  },
});

// import { ref } from "vue"
// export default () => {
//   const num = ref(1)
//   //
//   const add = () => {

//     num.value+= 1
//     console.log(num.value);
//   }
//   return (
//     <>
//       <div >{num.value}</div>
//       <button onClick={add}>click</button>
//     </>
//   )
// }
