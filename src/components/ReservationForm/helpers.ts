import firebaseDb from "../../firebaseconfig"


const date ={
    date:'12-05-2020',
    active:true
}


export const addDates =(dates=date)=>{
    firebaseDb.child('dates').push(date,err => {
        if(err) {
            console.log(err)
        }
    })
}
export const addUsers =(users:any)=>{
    users.map((user:any)=>{
        firebaseDb.child('users').push(user,err => {
            if(err) {
                console.log(err)
            }
        })
    })
    
   
}
export const getUsers=()=>{
    firebaseDb.child('users').on('value',snapshot => {
        const data=snapshot.val()
        if(data) {
            return data
        }
    })
}
