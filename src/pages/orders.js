import Header from "../components/Header";
import { getSession, useSession } from  "next-auth/client";
import db from "../../firebase";
import image from "next/image";

function orders({ orders }) {
    const {session} = useSession();

    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-600">Your Orders</h1>
             
             {session ? (
             <h2>x orders</h2>
    ) : (
        <h2>Please Sign in to see your orders</h2>
    )}
            </main>
        </div>
    );
}

export default orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
   
    const session = getSession(context);

    if(!session) {
        return {
            props: {},
        
        };
    }
    const stripeOrders = await db.collection("users").doc(session.user.
        email).collection('orders').orderBy('timestamp','desc')
        .get();

         
        
        const orders = await Promise.all(
            stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount_shipping,
            image: order.data().images,

            }))
        )
}
