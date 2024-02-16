import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  const authenticated = await isAuthenticated();

  return NextResponse.json({ user, authenticated });
}
