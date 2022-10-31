import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { cardScooter } from "../components/constans/constans";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuQiWxZ98QhKcVCxIx9UjxXzr0fmHsPKo",
  authDomain: "kugoo-project.firebaseapp.com",
  projectId: "kugoo-project",
  storageBucket: "kugoo-project.appspot.com",
  messagingSenderId: "41209374019",
  appId: "1:41209374019:web:c765aa2cda5a902150fbf6",
  measurementId: "G-BSFXG4JMBS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const storage = getStorage(app);
// const imagesRef = ref(storage, "Scooters_images");
// console.log(imagesRef);
// const kugooRef = ref(storage, "Scooters_images/kugo_m2/kugoo-m2-1.jpg");
// getDownloadURL(kugooRef).then((url) => {
//   const urlsc = url;
//   console.log(urlsc);
//   return urlsc;
// return <Url ls = {urlsc}/> ;
//    <img src={url} alt=""></img>;
// });

// console.log(kugooRef.fullPath);

// const path = kugooRef.fullPath;

// const name = kugooRef.name;
// const imagesRefAgain = kugooRef.parent;
// const gsReference = ref(
//   storage,
//   "gs://bucket/Scooters_images/kugo_m2/kugoo-m2-1.jpg"
// );
// console.log(gsReference);

export async function scootersRefAdd(): Promise<void> {
  await addDoc(collection(db, "products"), cardScooter);
  // await setDoc(doc(db, "products", "cardScooter"), {
  //   title: "Электросамокат Kugoo M4",
  //   price: 800,
  //   description: `Электросамокат Kugoo M4 – младшая модель электросамоката M4 Pro, отличающаяся
  //     среди своих собратьев самой меньшей емкостью батареи. Благодаря этому устройство
  //     облегченное. Его могут эксплуатировать дети и девушки. Даже при небольшом весе самокат
  //     способен набрать скорость до 40 км/ч. Есть возможность установить ограничение этого
  //     показателя для детей, чтобы самокат не разгонялся более 10–15 км/ч. Kugoo M4 отличный
  //     самокат для езды по городским улицам и по пересеченной местности. Водитель в любых условиях
  //     движения будет чувствовать себя максимально комфортно.`,
  //   category: "urban scooter",
  //   image: "https://",
  //   rating: {
  //     rate: 4.1,
  //     count: 8,
  //   },
  // });
}
// console.log(scootersRefAdd());

// export async function scootersRefGet(): Promise<object> {
//   return await getDocs(collection(db, "products"));
// }

// const querySnapshot = async () => {
//   await getDocs(collection(db, "products"));
// };
// console.log(querySnapshot);

// querySnapshot.forEach((doc: { id: any; data: () => any }) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

export enum authErrors {
  "auth/weak-password" = "Пароль не должен быть меньше шести символов",
  "auth/user-not-found" = "Неправильный email!",
  "auth/email-already-in-use" = "Такой email уже существует!",
  "auth/wrong-password" = "Неправильный пароль!",
  "auth/invalid-email" = "Неправильный email!",
  "auth/email-already-exists" = "Такой email уже существует!",
}
