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
  
  
    function createPost(post){
    
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
  
                posts.push({...post,createdAt:new Date().getTime()});
            const error=false;
       if(!error){
        resolve();
       }else{
        reject('Error:Something went wrong');
       }
              },2000)
        })
     
  
    }

    function deletePost(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
     
                
       if(!(posts.length===0)){
        resolve(posts.pop());
       }else{
        reject('Error:Array have no element');
       }
              },1000)
        })
    }

    const user={
        username:'Mohit',
        lastactivityTime:new Date().getDate()
    }

    function updatelastactivityTime(){
        return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        user.lastactivityTime=new Date();
        console.log(user.lastactivityTime);
        resolve(user.lastactivityTime);
      },1000)
        })
    }

   
          
    


    
    Promise.all([createPost({title:"post one",body:"This is post one"}),updatelastactivityTime()]).then(()=>{
    }).catch(err=>console.log(err))
    .then(()=>{
    getPost();
    deletePost().then(()=>{
        getPost();
        deletePost().then(()=>{
            getPost();
            deletePost().then(()=>{
                getPost();
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log(err);
                }).then(()=>{
                    updatelastactivityTime(); 
                })
            })
        })
    })
    
})
.catch(err=>console.log(err));

