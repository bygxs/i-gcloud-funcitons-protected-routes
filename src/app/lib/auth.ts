// lib/auth.ts
import { getAuth, signOut } from 'firebase/auth';
import { app } from './firebase'; // Assuming firebase.ts is in the same directory

const auth = getAuth(app);

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error; // Rethrow to handle it in the component if needed
  }
};

export { auth }; // Export the auth instance for use in other components