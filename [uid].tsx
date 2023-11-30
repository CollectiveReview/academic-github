import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/app/firebase';

type DocData = {
    title: string;
    content: string;
};

const UGCDocument = () => {
    // const router = useRouter();
    // const { uid } = router.query;
    // const [docData, setDocData] = useState<DocData | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (typeof uid === 'string') {

    //             const docRef = doc(db, "documents", uid);
    //             const docSnap = await getDoc(docRef);

    //             if (docSnap.exists()) {
    //                 setDocData(docSnap.data());
    //             } else {
    //                 console.log("No such document!");
    //             }
    //         }
    //     }

    //     if (uid) {
    //         fetchData();
    //     }
    // }, [uid]);

    return (
        <div>
            {/* {docData && (
                <div>
                    <h1>{docData.title}</h1>
                    <p>{docData.content}</p>
                </div>
            )} */}
        </div>
    );
};

export default UGCDocument;