import { defineStore } from "pinia";
import bcrypt from 'bcryptjs';
export const useAuthStore = defineStore('auth', {
    // state
    state: () => {
        return {
            users: JSON.parse(localStorage.getItem('users')),
            isauthenticated: 0
        }
    },

    // Methods
    actions: {
        // Add an user
        addUser(user) {
            this.users.push(user);
            localStorage.setItem('users', JSON.stringify(this.users));
        },

        // Get an user
        getUser(newmail, newpassword){
            console.log(newmail);
            for (let i = 0; i < this.users.length; i++){
                
                console.log(this.users[i]['email'])
                if(newmail == this.users[i]['email']){
                    let passverify = bcrypt.compareSync(newpassword,this.users[i].password)
                    if (passverify){
                        this.isauthenticated = 1;
                    }
                    else{
                        console.log("Invalid input !");
                    }
                }
                else{
                    console.log("User not found !")
                }
                // if(newmail == this.users[i]['email'] && bcrypt.compareSync(newpassword,this.users[i]['password']))
                // {
                //     if (this.isauthenticated == 1){
                //         console.log(this.isauthenticated);
                //         localStorage.setItem('activeUser', JSON.stringify(this.users[i]));
                //     }
                // }
                // else{
                //     this.isauthenticated = 0;
                // }
            }
            return this.isauthenticated;
        }
    }
})