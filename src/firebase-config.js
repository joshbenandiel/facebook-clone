import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set , child, get , push} from "firebase/database";
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


export const writeUserData = (userId, name, icon, imageUrl) =>  {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    display: icon,
    profile_picture : imageUrl
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

  const db = getDatabase();
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
  useEffect(() => {
    data()
  },[data])

  return {allData}
}











export const auth = getAuth(app);
