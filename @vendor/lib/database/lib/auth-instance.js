export class Auth {
    async getUser(credentials) {
      const user = (await useDatabase()).auth;
      return user ? user.toJSON() : null;
    }
  
    async update(key, value) {
      const user = (await useDatabase()).auth.currentUser;
      try {
        await user.updateProfile({ [key]: value });
        return true; // Success
      } catch (error) {
        console.error("Error updating user profile:", error);
        return false; // Failed
      }
    }
  
    async registerUser(credentials) {
      try {
        const { email, password } = credentials;
        await (await useDatabase()).auth.createUserWithEmailAndPassword(
          email,
          password
        );
        return true; // Success
      } catch (error) {
        console.error("Error registering user:", error);
        return false; // Failed
      }
    }
  
    async authenticate(credentials) {
      try {
        const { email, password } = credentials;
        await (await useDatabase()).auth.signInWithEmailAndPassword(
          email,
          password
        );
        return true; // Success
      } catch (error) {
        console.error("Error authenticating user:", error);
        return false; // Failed
      }
    }
  
    async signOut() {
      try {
        await useDatabase().auth.signOut();
        return true; // Success
      } catch (error) {
        console.error("Error signing out:", error);
        return false; // Failed
      }
    }
  }