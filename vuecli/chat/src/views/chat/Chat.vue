<template>
  <div>
    <div class="talk-bar">
      <ul>
        <li v-for="(item,index) in talkList" :key="index">
          <div class="right">
            <span>{{item.question}}</span>
          </div>
          <div class="left">
            <span>{{item.answer}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="talk">
      <input type="text" v-model="msg">
      <button @click="send">发送</button>
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5';
export default {
  data() {
    return {
      msg: "",
      talkList: []
    }
  },
  created() {
    let obj = {
      tittle: "聊天",
      className: "chat"
    };
    this.$emit("changeNav", obj);
  },
  methods: {
    getTimeStamp() {
      let dateStr = Date.parse(new Date());
      return dateStr = dateStr.toString().substr(0, 10);
    },
    getNonceStr() {
      let noncestr = Math.random()
        .toString(36)
        .substr(2);
      return noncestr;
    },
    getReqSign(params, appkey) {
      let arr = [];
      let obj = {};
      let str = ""
      //1、排序
      arr = Object.keys(params).sort();
      arr.forEach((item,index,arr)=>{
        obj[item]= params[item]
      })
      //2、参数对按URL键值对的格式拼接成字符串
      for (let item in obj) {
        if ((obj[item]!= "")) {
          str += item + "=" + encodeURI(obj[item]) + "&";
        }
      }
      //3 将应用密钥以app_key为键名，组成URL键值拼接到字符串末尾
      str += "app_key=" + appkey;
      
      //4.对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写
      str=md5(str).toUpperCase();
      return str;
    },
    send(){
      let pro = 'https://bird.ioliu.cn/v2?url=';
      let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat';
      let params = {
        app_id:"2111901624",
        time_stamp:this.getTimeStamp(),
        nonce_str:this.getNonceStr(),
        session:"100",
        question:this.msg,
        sign:""
      }
      let appkey = 'ijS7lw3tX4KmI3Kf';
      params.sign = this.getReqSign(params,appkey);
      axios({
        url:pro+url,
        method: 'post',
        data: {...params},
      }).then((res)=>{
        let obj = {
          question:this.msg,
          answer:res.data.data.answer,
        }
        this.talkList.push(obj);
        this.msg=''
      })
    }
 
  }
}
</script>
<style scoped>
.talk {
  height: 1rem;
  width: 100%;
  background: #eee;
  text-align: center;
  position: fixed;
  bottom: 1rem;
}
.talk-bar span {
  padding: 5px 10px;
  background: rgb(12, 223, 58);
  border-radius: 10px;
}
.talk-bar .left {
  text-align: left;
}
.talk-bar .right {
  text-align: right;
}
</style>
