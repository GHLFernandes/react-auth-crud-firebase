import { FunctionComponent, createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../../config/firebase';

interface UserAuthContextProviderProps {
    children: JSX.Element
};

const UserAuthContext = createContext({});
 
export const UserAuthContextProvider: FunctionComponent<UserAuthContextProviderProps> = (UserAuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>();
    const [erro, setErro] = useState({});
    const [loading, setLoading] = useState<boolean>(true);

    const signUp = async (email: string, password: string): Promise<any> => {
        return await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          // Signed up
          setUser(userCredential.user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErro({ errorCode, errorMessage });
          })
    }

    const signIn = async (email: string, password: string): Promise<any> => {
        return await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            console.log('Sign in')
            setUser(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErro({ errorCode, errorMessage });
            })
        }

    const signOutUser = async (): Promise<void> => {
        return await signOut(auth)
            .then(() => {
            console.log('Sign out')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErro({ errorCode, errorMessage });
            })
        }

    const googleSignIn = async (): Promise<any> => {
        const googleAuthProvider = new GoogleAuthProvider();

        return await signInWithPopup(auth, googleAuthProvider)
            .then((userCredential) => {
            // Signed in
            setUser(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErro({ errorCode, errorMessage });
            })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // if (user)
            // {
            //     console.log('User detected.');
            // }
            // else
            // {
            //     console.log('No user detected');
            // }

            setLoading(false);
        })
    }, []);

    return ( 
        <UserAuthContext.Provider value={{ user, signUp, signIn, signOutUser, googleSignIn, erro, setErro, loading }} >
            { UserAuthContextProviderProps.children }
        </UserAuthContext.Provider>
     );
}
 
export const useUserAuth = (): any => {
    return useContext(UserAuthContext);
  }