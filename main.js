
const posts= [

    {title:"post one",body:"This is post one",createdAt:new Date().getTime()},
  
    {title:"post two",body:"This is post two",createdAt:new Date().getTime()}
  
    ];
  
     
  
    let intervalId=0;
  
    function getPost(){
  
      clearInterval(intervalId);
  
      intervalId= setInterval(()=>{
  
       let output='';
  
      for(let i=0;i<posts.length;i++){
  
        output+=`<li>${posts[i].title}-last updated ${Math.floor((new Date().getTime() - posts[i].createdAt)/1000)} seconds ago</li>`   
  
      }
  
      document.body.innerHTML=output;  
  
      },1000)
  
       
  
    }
     
  
    function createPost(post,callback){
  
      setTimeout(()=>{
  
        posts.push({...post,createdAt:new Date().getTime()});
  
        callback()
  
      },2000)
  
    }
  
    function createPost4(post,callback){
  
      setTimeout(()=>{
  
        posts.push({...post,createdAt:new Date().getTime()});
  
        callback()
  
      },6000)
  
    }
  
     
  
    createPost({title:"post three",body:"This is post three"},getPost)
  
    createPost4({title:"post four",body:"This is post four"},getPost)

    