import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";
import { api } from "./Api";


initializeAuthentication();

const useFirebase = () => {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const [authError, setAuthError] = useState("");
  const [booksCount, setBooksCount] = useState(0);
  const [privateTeacherCount, setTeachersCount] = useState(0);
  const [schoolsCount, setSchoolsCount] = useState(0);


  // login google------------------------
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate(location?.state?.from || "/");
        const user = result.user;
        // save user to database--
        saveUsers(
          {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          },
          "PATCH"
        );

        setUser(user);

        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      }).finally(() => {
        setIsLoading(false);
      })
  };

  // singin with facebook
  const facebookLogin = (location, navigate) => {
    setIsLoading(true);
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        saveUsers(
          {
            displayName: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
          },
          "PATCH"
        );

        setUser(user)
        setAuthError('')
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {

        const errorMessage = error.message;
        setAuthError(errorMessage)

      }).finally(() => {
        setIsLoading(false);
      })
  }

  // register user
  const registerUser = (
    email,
    password,
    name,
    userPhoto,
    location,
    navigate
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        setAuthError("");
        const newUser = { email, displayName: name, photoURL: userPhoto };
        setUser(newUser);

        // save to database-------------
        saveUsers(newUser, "POST");
        // updateProfile----------
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: userPhoto,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        navigate(location?.state?.from || "/");
        setAuthError("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password, location, navigate) => {

    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate(location?.state?.from || "/");
        setAuthError("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  const updateUserProfile = (name, photo) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    }).finally(() => {
      setIsLoading(false)
    })
  }



  //logout-----------------

  const logOut = (navigate) => {
    signOut(auth)
      .then(() => {
        setUser({});
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // save user to database-------------
  const saveUsers = (newUser, method) => {
    setIsLoading(true);
    const user = { ...newUser };
    fetch(`${api}/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      /* .then((data) => console.log(data)) */
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  };

  // on auth state change -----------------------------

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);
  // const email = 'koiry.rupok@gmail.com'
  // get admin ============================
  useEffect(() => {
    setIsLoading(true);
    fetch(`${api}/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {

        setAdmin(data.admin);
      }).catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user.email]);

  //////////////////////////////////////////////
  useEffect(() => {

    fetch(`${api}/books`)
      .then((res) => res.json())
      .then((data) => {
        setBooksCount(data?.data?.data.length);
      });
    fetch(`${api}/privateTeachers`)
      .then(res => res.json())
      .then(data => {
        setTeachersCount(data?.data?.data.length);
      })
    fetch(`${api}/schools`)
      .then((res) => res.json())
      .then((data) => {
        setSchoolsCount(data?.data?.data.length);

      });

  }, [])

  //////////////////////////////////////////////

  return {
    user,
    setUser,
    signInWithGoogle,
    registerUser,
    loginUser,
    updateUserProfile,
    isLoading,
    setIsLoading,
    facebookLogin,
    logOut,
    authError,
    admin,
    booksCount,
    privateTeacherCount,
    schoolsCount
  };
};

export default useFirebase;
