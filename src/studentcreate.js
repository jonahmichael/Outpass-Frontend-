import {
    initializeApp
} from 'firebase/app'
import {
    getFirestore,collection,getDocs,
    addDoc,
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
const colRef_requests = collection(db,'users')

// Redirect page
function handleSubmit(event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission
    } else {
        window.location.href = "homelogin.html"; // Redirect to the home login page
    }
}

// Add document

const addForm = document.querySelector('.addDoc')
addForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef_requests, {
        name: addForm.name.value,
        gender: addForm.gender.value,
        hostel_no: addForm.hostel.value,
        appartment_no: addForm.apartment.value,
        roomno: addForm.room.value,
        enrollment_no: addForm.enroll.value,
        dept: addForm.dept.value,
        year: addForm.year.value,
        email_id: addForm.email.value,
        stud_mobile: addForm.phone.value,
        parent_mobile: addForm.parentPhone.value,
        role: 'stud',

    })
    .then(() => {
        addForm.reset()
        handleSubmit(e)

    })


})

// Delete Document

