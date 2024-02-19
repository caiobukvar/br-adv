// import { NextResponse } from "next/server";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// export async function GET() {
//   const { getUser, isAuthenticated } = getKindeServerSession();

//   const isLogged = await isAuthenticated();

//   if (!isLogged) {
//     return new Response("Unauthorized", { status: 401 });
//   }
//   const user = await getUser();
//   const data = { message: "Hello User", id: user.id };

//   return NextResponse.json({ data });
// }
