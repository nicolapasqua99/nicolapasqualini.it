import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { adminAuth } from '../(lib)/firebase-admin';

export default async function WorkLayout({ children }: { children: React.ReactNode }) {
    const session = cookies().get('__session')?.value || ''

    //Validate if the cookie exist in the request
    if (!session) {
        redirect("/login");
    }

    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await adminAuth().verifySessionCookie(session, true)

    if (!decodedClaims) {
        redirect("/login");
    }

    return <>{ children }</>
}
