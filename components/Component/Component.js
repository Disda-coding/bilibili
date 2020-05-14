// components/Component/Component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      tabs:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */ 
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
     // console.log(e);
      // 获取索引
      const{index}=e.currentTarget.dataset;
      // 获取data中的数组
      // 解构 对 复杂类型 进行解构的时候 复制了一份 变量的引用
      // 最严谨的做法是重新拷贝一份数组,再对这个数组的备份进行处理，不要直接修改this.data.数据
      //let tabs=JSON.parse(JSON.stringify(this.data.tabs));
      // let {tabs}=this.data; //let tabs=this.data.tabs
     
      // 循环数组
      // tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
      // this.setData({
      //   tabs
      // })

      //触发父组件的自定义事件
      this.triggerEvent("itemChange1",{index});
    },
  }
})
