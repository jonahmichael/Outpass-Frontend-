import {
    initializeApp
} from 'firebase/app'
import {
    getFirestore,collection,getDocs
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBNv1ehBbnU0qc8_gz_Yog2iTQxJ8k3I9g",
    authDomain: "exitease-8fc92.firebaseapp.com",
    databaseURL: "https://exitease-8fc92-default-rtdb.firebaseio.com",
    projectId: "exitease-8fc92",
    storageBucket: "exitease-8fc92.firebasestorage.app",
    messagingSenderId: "639228933337",
    appId: "1:639228933337:web:cfe5d6a353bf38f0363ac8",
    measurementId: "G-QK8ZW2P3H1"
};

//init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef_requests = collection(db,'requests')

// count pending
var cnt_pend = 0
var cnt_app  = 0
var cnt_rej = 0


// get collection data
getDocs(colRef_requests)
    .then(snapshot => {
        let requests = []
        snapshot.docs.forEach((doc) => {
            requests.push({...doc.data(), id: doc.id })
            console.log(requests)
            requests.forEach((e) => {
                if (e["status"] === "pending"){
                    cnt_pend+= 1
                    document.getElementById('cnt-pending').innerText = cnt_pend
                }
                else if (e["status"] === "approved"){
                    cnt_app+= 1
                    document.getElementById('cnt-approved').innerText = cnt_app
                    
                }
                else if(e["status"] === "rejected"){
                    cnt_rej+= 1
                    document.getElementById('cnt-rejected').innerText = cnt_rej
                }
            })
            
        })
    })
    .catch(err => {
        console.log(err.message)
    })




