import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set , child, get , remove } from "firebase/database";
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCzM_MUs-kb6eR4_JuzU_vwYnhEMb-0s5w",
  authDomain: "facebook-clone-349202.firebaseapp.com",
  databaseURL: "https://facebook-clone-349202-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-349202",
  storageBucket: "facebook-clone-349202.appspot.com",
  messagingSenderId: "563218784634",
  appId: "1:563218784634:web:68544526801c93281ef6c3",
  measurementId: "G-9K082EB5FM"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const writeUserData = (userId, name, icon, imageUrl, time, id) =>  {
  set(ref(db, 'users/' + userId), {
    id: id,
    username: name,
    display: icon,
    stories : imageUrl,  
    date: time
  });
}

export const writePostData = (userId, name, icon, content, imageUrl, date, id) =>  {
  set(ref(db, 'posts/' + userId), {
    id: id,
    username: name,
    display: icon,
    content: content,
    image : imageUrl,
    date: date
  });
}




 
export const useData = (userId) => {
  
  const [data, setData] = useState({})
  const [error, setError] = useState({})

  function getData(userId){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      setError(error);
    });

  }

  useEffect(() => {
    getData(userId)
  },[userId])

  return {data,error}
}


export const useGetAllData = () => {

  const [allData, setAllData] = useState([])
  const dbRef = ref(db)
  

  function data(){
    get(child(dbRef, 'users'))
    .then((snapshot) => {
      let users = []
      snapshot.forEach(childSnapshot => {
        users.push(childSnapshot.val())
        setAllData(users)
      })
     
    })
  }
  data()



  return {allData}
}

export const useGetPostsData = () => {

  const [allPostsData, setAllPostsData] = useState([])
  const dbRef = ref(db)
  
  function data(){
    get(child(dbRef, 'posts'))
    .then((snapshot) => {
        let posts = []
        snapshot.forEach(childSnapshot => {
          posts.push(childSnapshot.val())
          setAllPostsData(posts)
        })
    })
  }
  data()
  


  return { allPostsData }
}



export const deletePostsData = (userId) => {
  remove(ref(db, 'posts/' + userId))
  .then(() => {
    console.log('Deleted')
  })
  .catch((err) => {
    console.log(err)
  })
}









export const auth = getAuth(app);
