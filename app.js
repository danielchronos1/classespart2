//Implement the User class. When creating an instance based on this class, the object must have the form {name: ‘Petro’, role: ‘admin’} (role can be either admin or user). In case of incorrectly transferred data of such an object, the corresponding field that was entered incorrectly should be warned using an alert. The User class must have the following components: 

    //getName
    //getRole
    //login
    //logout
    //сhangeName
    //changePassword

//The Admin class should have the following components:

    //addUser
    //removeUser
    //changeUserRole
    //getAllUsers
    //removeAllUsers

class User {
    constructor(name, role) {
      if (role !== 'admin' && role !== 'user') {
        alert('Invalid role! Role must be either "admin" or "user".');
        return;
      }
  
      this.name = name;
      this.role = role;
      this.loggedIn = false;
    }
  
    getName() {
      return this.name;
    }
  
    getRole() {
      return this.role;
    }
  
    login() {
      this.loggedIn = true;
      console.log('Logged in successfully.');
    }
  
    logout() {
      this.loggedIn = false;
      console.log('Logged out successfully.');
    }
  
    changeName(newName) {
      this.name = newName;
      console.log('Name changed successfully.');
    }
  
    changePassword(newPassword) {
      this.password = newPassword;
      console.log('Password changed successfully.');
    }
  }
  
  class Admin extends User {
    constructor(name) {
      super(name, 'admin');
      this.users = [];
    }
  
    addUser(user) {
      if (!(user instanceof User)) {
        console.log('Invalid user! Only User objects can be added.');
        return;
      }
  
      this.users.push(user);
      console.log('User added successfully.');
    }
  
    removeUser(user) {
      const index = this.users.indexOf(user);
      if (index === -1) {
        console.log('User not found.');
        return;
      }
  
      this.users.splice(index, 1);
      console.log('User removed successfully.');
    }
  
    changeUserRole(user, newRole) {
      if (!(user instanceof User)) {
        console.log('Invalid user! Only User objects can have their roles changed.');
        return;
      }
  
      if (newRole !== 'admin' && newRole !== 'user') {
        console.log('Invalid role! Role must be either "admin" or "user".');
        return;
      }
  
      user.role = newRole;
      console.log('User role changed successfully.');
    }
  
    getAllUsers() {
      return this.users;
    }
  
    removeAllUsers() {
      this.users = [];
      console.log('All users removed successfully.');
    }
  }
  

  const user = new User('Petro', 'admin');
  console.log(user.getName()); 
  console.log(user.getRole()); 
  user.login(); 
  user.changeName('Peter'); 
  user.changePassword('newpassword'); 
  user.logout(); 
  
  const admin = new Admin('Admin');
  const user1 = new User('User 1', 'user');
  const user2 = new User('User 2', 'user');
  
  admin.addUser(user1); 
  admin.addUser(user2);
  console.log(admin.getAllUsers());
  
  admin.changeUserRole(user1, 'admin');
  console.log(user1.getRole());
  admin.removeUser(user2);
  console.log(admin.getAllUsers());
  
  admin.removeAllUsers();
  console.log(admin.getAllUsers());

// Intermediate level:

//In the HTML page, add the ability for the user to create their own dashboard of clocks. These are clocks for different parts of the world. It is necessary to add an input field and a button to create a new clock when clicked. WorldClock is implemented via the class. Each instance of this class is a new clock. The class must have the following components:

    //getCurrentDate
    //getCurrentDateTime
    //deleteClock
    //button one – shows the user the time in text form
    //button two – displays the current date and time in text form
    //button three – deletes the clock from the "wall" of clocks

    class WorldClock {
        constructor(timezone) {
          this.timezone = timezone;
          this.clockElement = document.createElement("div");
          this.clockElement.className = "clock";
          this.showTimeBtn = document.createElement("button");
          this.showTimeBtn.innerText = "Show Time";
          this.showDateTimeBtn = document.createElement("button");
          this.showDateTimeBtn.innerText = "Show Date & Time";
          this.deleteBtn = document.createElement("button");
          this.deleteBtn.innerText = "Delete Clock";
      
          this.showTimeBtn.addEventListener("click", () => this.showTime());
          this.showDateTimeBtn.addEventListener("click", () => this.showDateTime());
          this.deleteBtn.addEventListener("click", () => this.deleteClock());
      
          this.clockElement.appendChild(this.showTimeBtn);
          this.clockElement.appendChild(this.showDateTimeBtn);
          this.clockElement.appendChild(this.deleteBtn);
      
          document.getElementById("clocks-container").appendChild(this.clockElement);
        }
      
        showTime() {
          const time = new Date().toLocaleTimeString("en-GB", { timeZone: this.timezone });
          alert(`Current time in ${this.timezone}: ${time}`);
        }
      
        showDateTime() {
          const dateTime = new Date().toLocaleString("en-GB", { timeZone: this.timezone });
          alert(`Current date and time in ${this.timezone}: ${dateTime}`);
        }
      
        deleteClock() {
          this.clockElement.remove();
        }
      }
      
      document.getElementById("add-clock-btn").addEventListener("click", () => {
        const timezoneInput = document.getElementById("timezone-input");
        const timezone = timezoneInput.value.trim();
        
        if (timezone !== "") {
          new WorldClock(timezone);
          timezoneInput.value = "";
        }
      });
      
      
  
  